"use client";

import * as React from "react";
import {
	type ComponentProps,
	createContext,
	type HTMLAttributes,
	type ReactNode,
	type RefObject,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/utils";

// ============================================================================
// Types
// ============================================================================

export interface TOCItemType {
	title: ReactNode;
	url: string;
	depth: number;
}

export type TableOfContents = TOCItemType[];

// ============================================================================
// Contexts
// ============================================================================

const ActiveAnchorContext = createContext<string[]>([]);
const ScrollContext = createContext<RefObject<HTMLElement | null>>({
	current: null,
});
const TOCContext = createContext<TOCItemType[]>([]);

// ============================================================================
// Hooks
// ============================================================================

/**
 * The id of visible anchors
 */
export function useActiveAnchors(): string[] {
	return useContext(ActiveAnchorContext);
}

/**
 * The estimated active heading ID
 */
export function useActiveAnchor(): string | undefined {
	return useContext(ActiveAnchorContext)[0];
}

/**
 * Get TOC items from context
 */
export function useTOCItems(): TOCItemType[] {
	return useContext(TOCContext);
}

// ============================================================================
// Utility Functions
// ============================================================================

function mergeRefs<T>(
	...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(value);
			} else if (ref != null) {
				(ref as React.MutableRefObject<T | null>).current = value;
			}
		});
	};
}

/**
 * Find the active heading of page using IntersectionObserver
 */
function useAnchorObserver(watch: string[], single: boolean): string[] {
	const observerRef = useRef<IntersectionObserver | null>(null);
	const [activeAnchor, setActiveAnchor] = useState<string[]>([]);
	const stateRef = useRef<{ visible: Set<string> } | null>(null);

	const onChange = React.useCallback(
		(entries: IntersectionObserverEntry[]) => {
			stateRef.current ??= { visible: new Set() };
			const state = stateRef.current;

			for (const entry of entries) {
				if (entry.isIntersecting) {
					state.visible.add(entry.target.id);
				} else {
					state.visible.delete(entry.target.id);
				}
			}

			if (state.visible.size === 0) {
				const viewTop = entries[0]?.rootBounds?.top ?? 0;
				let fallback: Element | undefined;
				let min = -1;

				for (const id of watch) {
					const element = document.getElementById(id);
					if (!element) continue;

					const d = Math.abs(viewTop - element.getBoundingClientRect().top);
					if (min === -1 || d < min) {
						fallback = element;
						min = d;
					}
				}

				setActiveAnchor(fallback ? [fallback.id] : []);
			} else {
				const items = watch.filter((item) => state.visible.has(item));
				setActiveAnchor(single ? items.slice(0, 1) : items);
			}
		},
		[watch, single]
	);

	useEffect(() => {
		if (observerRef.current) return;
		observerRef.current = new IntersectionObserver(onChange, {
			rootMargin: "0px",
			threshold: 0.98,
		});

		return () => {
			observerRef.current?.disconnect();
			observerRef.current = null;
		};
	}, [onChange]);

	useEffect(() => {
		const observer = observerRef.current;
		if (!observer) return;
		const elements = watch.flatMap(
			(heading) => document.getElementById(heading) ?? []
		);

		for (const element of elements) observer.observe(element);
		return () => {
			for (const element of elements) observer.unobserve(element);
		};
	}, [watch]);

	return activeAnchor;
}

// ============================================================================
// TOCProvider - Main context provider
// ============================================================================

export interface TOCProviderProps {
	// toc: TableOfContents;
	/**
	 * Only accept one active item at most
	 * @defaultValue false
	 */
	single?: boolean;
	children?: ReactNode;
}

export function TOCProvider({ single = false, children }: TOCProviderProps) {
	const { headings: items } = useTableOfContents();

	console.log(items);

	const headings = useMemo(() => {
		return items.map((item) => item.url.split("#")[1]);
	}, [items]);

	const activeAnchors = useAnchorObserver(headings, single);

	return (
		<TOCContext.Provider value={items}>
			<ActiveAnchorContext.Provider value={activeAnchors}>
				{children}
			</ActiveAnchorContext.Provider>
		</TOCContext.Provider>
	);
}

// ============================================================================
// TOCScrollArea - Scrollable container with auto-scroll support
// ============================================================================

export function TOCScrollArea({
	ref,
	className,
	...props
}: ComponentProps<"div">) {
	const viewRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className={cn(
				"mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] relative ms-px min-h-0 overflow-auto py-3 text-sm [scrollbar-width:none]",
				className
			)}
			ref={mergeRefs(viewRef, ref)}
			{...props}
		>
			<ScrollContext.Provider value={viewRef}>
				{props.children}
			</ScrollContext.Provider>
		</div>
	);
}

// ============================================================================
// TOCThumb - Active indicator that shows current position
// ============================================================================

type TocThumbValues = [top: number, height: number];

interface TocThumbProps extends HTMLAttributes<HTMLDivElement> {
	containerRef: RefObject<HTMLElement | null>;
}

function calcThumb(container: HTMLElement, active: string[]): TocThumbValues {
	if (active.length === 0 || container.clientHeight === 0) {
		return [0, 0];
	}

	let upper = Number.MAX_VALUE;
	let lower = 0;

	for (const item of active) {
		const element = container.querySelector<HTMLElement>(`a[href="#${item}"]`);
		if (!element) continue;

		const styles = getComputedStyle(element);
		upper = Math.min(
			upper,
			element.offsetTop + Number.parseFloat(styles.paddingTop)
		);
		lower = Math.max(
			lower,
			element.offsetTop +
				element.clientHeight -
				Number.parseFloat(styles.paddingBottom)
		);
	}

	return [upper, lower - upper];
}

function updateThumb(element: HTMLElement, info: TocThumbValues): void {
	element.style.setProperty("--toc-top", `${info[0]}px`);
	element.style.setProperty("--toc-height", `${info[1]}px`);
}

function TocThumb({ containerRef, ...props }: TocThumbProps) {
	const thumbRef = useRef<HTMLDivElement>(null);
	const active = useActiveAnchors();

	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;

		const onUpdate = () => {
			if (!thumbRef.current) return;
			updateThumb(thumbRef.current, calcThumb(container, active));
		};

		const observer = new ResizeObserver(onUpdate);
		observer.observe(container);
		onUpdate();

		return () => {
			observer.disconnect();
		};
	}, [containerRef, active]);

	// Initial update
	if (containerRef.current && thumbRef.current) {
		updateThumb(thumbRef.current, calcThumb(containerRef.current, active));
	}

	return <div ref={thumbRef} role="none" {...props} />;
}

// ============================================================================
// TOCItem - Individual TOC link item
// ============================================================================

export interface TOCItemProps extends Omit<ComponentProps<"a">, "href"> {
	href: string;
	onActiveChange?: (v: boolean) => void;
}

export function TOCItem({ ref, onActiveChange, ...props }: TOCItemProps) {
	const containerRef = useContext(ScrollContext);
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const activeAnchors = useActiveAnchors();
	const activeOrder = activeAnchors.indexOf(props.href.slice(1));
	const isActive = activeOrder !== -1;
	const shouldScroll = activeOrder === 0;

	useLayoutEffect(() => {
		const anchor = anchorRef.current;
		const container = containerRef.current;

		// Safety check: ensure elements are connected to the DOM
		if (!container || !anchor || !shouldScroll || !anchor.isConnected) {
			return;
		}

		const containerRect = container.getBoundingClientRect();
		const anchorRect = anchor.getBoundingClientRect();

		// "if-needed" check: only scroll if anchor is outside the visible area
		const isAbove = anchorRect.top < containerRect.top;
		const isBelow = anchorRect.bottom > containerRect.bottom;

		if (isAbove || isBelow) {
			// Calculate scroll position to center the anchor in the container
			// This mimics `block: 'center'` from the library
			const anchorCenter =
				anchor.offsetTop - container.offsetTop + anchor.offsetHeight / 2;
			const containerCenter = container.clientHeight / 2;
			const scrollTop = anchorCenter - containerCenter;

			// Scroll only the container (boundary constraint), not the page
			container.scrollTo({
				top: Math.max(0, scrollTop),
				behavior: "smooth",
			});
		}
	}, [containerRef, shouldScroll]);

	useEffect(() => {
		onActiveChange?.(isActive);
	}, [isActive, onActiveChange]);

	return (
		<a data-active={isActive} ref={mergeRefs(anchorRef, ref)} {...props}>
			{props.children}
		</a>
	);
}

// ============================================================================
// TOCItems - Simple TOC list with straight border line
// ============================================================================

export interface TOCItemsProps extends ComponentProps<"div"> {
	/**
	 * Text to display when there are no headings
	 * @defaultValue "No Headings"
	 */
	emptyText?: string;
}

export function TOCItems({
	ref,
	className,
	emptyText = "No Headings",
	...props
}: TOCItemsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const items = useTOCItems();

	if (items.length === 0) {
		return (
			<div className="rounded-lg border bg-card p-3 text-muted-foreground text-xs">
				{emptyText}
			</div>
		);
	}

	return (
		<>
			<TocThumb
				className="absolute top-(--toc-top) h-(--toc-height) w-px bg-primary transition-all"
				containerRef={containerRef}
			/>
			<div
				className={cn("flex flex-col border-foreground/10 border-s", className)}
				ref={mergeRefs(ref, containerRef)}
				{...props}
			>
				{items.map((item) => (
					<SimpleTOCItem item={item} key={item.url} />
				))}
			</div>
		</>
	);
}

function SimpleTOCItem({ item }: { item: TOCItemType }) {
	return (
		<TOCItem
			className={cn(
				"prose wrap-anywhere py-1.5 text-muted-foreground text-sm transition-colors first:pt-0 last:pb-0 hover:text-accent-foreground data-[active=true]:text-primary",
				item.depth <= 2 && "ps-3",
				item.depth === 3 && "ps-6",
				item.depth >= 4 && "ps-8"
			)}
			href={item.url}
		>
			{item.title}
		</TOCItem>
	);
}

// ============================================================================
// ClerkTOCItems - TOC with depth-aware line that follows the hierarchy
// ============================================================================

function getItemOffset(depth: number): number {
	if (depth <= 2) return 14;
	if (depth === 3) return 26;
	return 36;
}

function getLineOffset(depth: number): number {
	return depth >= 3 ? 10 : 0;
}

export interface ClerkTOCItemsProps extends ComponentProps<"div"> {
	/**
	 * Text to display when there are no headings
	 * @defaultValue "No Headings"
	 */
	emptyText?: string;
}

export function ClerkTOCItems({
	ref,
	className,
	emptyText = "No Headings",
	...props
}: ClerkTOCItemsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const items = useTOCItems();

	const [svg, setSvg] = useState<{
		path: string;
		width: number;
		height: number;
	}>();

	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;

		function onResize(): void {
			if (container.clientHeight === 0) return;
			let w = 0;
			let h = 0;
			const d: string[] = [];

			for (let i = 0; i < items.length; i++) {
				const element: HTMLElement | null = container.querySelector(
					`a[href="#${items[i].url.slice(1)}"]`
				);
				if (!element) continue;

				const styles = getComputedStyle(element);
				const offset = getLineOffset(items[i].depth) + 1;
				const top = element.offsetTop + Number.parseFloat(styles.paddingTop);
				const bottom =
					element.offsetTop +
					element.clientHeight -
					Number.parseFloat(styles.paddingBottom);

				w = Math.max(offset, w);
				h = Math.max(h, bottom);

				d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
				d.push(`L${offset} ${bottom}`);
			}

			setSvg({
				path: d.join(" "),
				width: w + 1,
				height: h,
			});
		}

		const observer = new ResizeObserver(onResize);
		onResize();

		observer.observe(container);
		return () => {
			observer.disconnect();
		};
	}, [items]);

	if (items.length === 0) {
		return (
			<div className="rounded-lg border bg-card p-3 text-muted-foreground text-xs">
				{emptyText}
			</div>
		);
	}

	return (
		<>
			{svg ? (
				<div
					className="absolute start-0 top-0 rtl:-scale-x-100"
					style={{
						width: svg.width,
						height: svg.height,
						maskImage: `url("data:image/svg+xml,${encodeURIComponent(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`
						)}")`,
					}}
				>
					<TocThumb
						className="mt-(--toc-top) h-(--toc-height) bg-primary transition-all"
						containerRef={containerRef}
					/>
				</div>
			) : null}
			<div
				className={cn("flex flex-col", className)}
				ref={mergeRefs(containerRef, ref)}
				{...props}
			>
				{items.map((item, i) => (
					<ClerkTOCItemElement
						item={item}
						key={item.url}
						lower={items[i + 1]?.depth}
						upper={items[i - 1]?.depth}
					/>
				))}
			</div>
		</>
	);
}

function ClerkTOCItemElement({
	item,
	upper = item.depth,
	lower = item.depth,
}: {
	item: TOCItemType;
	upper?: number;
	lower?: number;
}) {
	const offset = getLineOffset(item.depth);
	const upperOffset = getLineOffset(upper);
	const lowerOffset = getLineOffset(lower);

	return (
		<TOCItem
			className="prose wrap-anywhere relative py-1.5 text-muted-foreground text-sm transition-colors first:pt-0 last:pb-0 hover:text-accent-foreground data-[active=true]:text-primary"
			href={item.url}
			style={{
				paddingInlineStart: getItemOffset(item.depth),
			}}
		>
			{offset !== upperOffset ? (
				<svg
					className="absolute start-0 -top-1.5 size-4 rtl:-scale-x-100"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						className="stroke-foreground/10"
						strokeWidth="1"
						x1={upperOffset}
						x2={offset}
						y1="0"
						y2="12"
					/>
				</svg>
			) : null}
			<div
				className={cn(
					"absolute inset-y-0 w-px bg-foreground/10",
					offset !== upperOffset && "top-1.5",
					offset !== lowerOffset && "bottom-1.5"
				)}
				style={{
					insetInlineStart: offset,
				}}
			/>
			{item.title}
		</TOCItem>
	);
}

// ============================================================================
// PageTOC & PageTOCItems - Convenience wrappers for page layout
// ============================================================================

export interface PageTOCProps extends ComponentProps<"div"> {
	children?: ReactNode;
}

export function PageTOC({ className, children, ...props }: PageTOCProps) {
	return (
		<div className={cn("flex flex-col gap-3", className)} {...props}>
			{children}
		</div>
	);
}

export interface PageTOCItemsProps extends ComponentProps<"div"> {
	/**
	 * TOC variant style
	 * - "default": Simple straight border line
	 * - "clerk": Depth-aware line that follows hierarchy
	 * @defaultValue "default"
	 */
	variant?: "default" | "clerk";
	/**
	 * Text to display when there are no headings
	 * @defaultValue "No Headings"
	 */
	emptyText?: string;
}

export function PageTOCItems({
	variant = "default",
	emptyText,
	...props
}: PageTOCItemsProps) {
	return (
		<TOCScrollArea>
			{variant === "clerk" ? (
				<ClerkTOCItems emptyText={emptyText} {...props} />
			) : (
				<TOCItems emptyText={emptyText} {...props} />
			)}
		</TOCScrollArea>
	);
}

export interface TableOfContentItem {
	url: string;
	title: string;
	depth: number;
}

export function useTableOfContents() {
	const [headings, setHeadings] = useState<TableOfContentItem[]>([]);
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const articleElement = document.querySelector("article");

		if (!articleElement) {
			setHeadings([]);
			return;
		}

		const headingElements = articleElement.querySelectorAll(
			"h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"
		);

		const filteredHeadings = Array.from(headingElements).filter(
			(heading) =>
				!heading.closest("footer") && !heading.id.startsWith("footer-heading-")
		);

		const headingList: TableOfContentItem[] = filteredHeadings.map(
			(heading) => ({
				url: `#${slugify(heading.textContent)}`,
				title: heading.textContent || "",
				depth: Number.parseInt(heading.tagName.charAt(1), 10),
			})
		);

		console.log(headingList);

		setHeadings(headingList);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-20% 0% -35% 0%",
				threshold: 0,
			}
		);

		filteredHeadings.forEach((heading) => observer.observe(heading));

		return () => {
			filteredHeadings.forEach((heading) => observer.unobserve(heading));
			observer.disconnect();
		};
	}, []);

	return {
		headings,
		activeId,
	};
}
