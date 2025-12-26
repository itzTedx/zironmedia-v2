"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface LogoItem {
	/** The label text displayed next to the icon */
	label: string;
	/** The icon name from the Icons object (e.g., "gitHub", "react", "tailwind") */
	icon: React.ReactNode;
	/** Animation delay in seconds (use negative values for staggered effect) */
	animationDelay: number;
	/** Animation duration in seconds */
	animationDuration: number;
	/** The row number where this logo should appear (1-based) */
	row: number;
}

export interface LogoTimelineProps {
	/** Array of logo items to display */
	items: LogoItem[];
	/** Optional title text to display in the center */
	title?: string;
	/** Height of the timeline container */
	height?: string;
	/** Additional className for the container */
	className?: string;
	/** Icon size in pixels (default: 16) */
	iconSize?: number;
	/** Whether to show separator lines between rows (default: true) */
	showRowSeparator?: boolean;
	/** Whether to animate logos only on hover (default: false) */
	animateOnHover?: boolean;
}

export function LogoTimeline({
	items,
	title,
	height = "h-[400px] sm:h-[800px]",
	className,
	showRowSeparator = true,
	animateOnHover = false,
}: LogoTimelineProps) {
	const [isHovered, setIsHovered] = useState(false);

	// Group items by row
	const rowsMap = new Map<number, LogoItem[]>();
	items.forEach((item) => {
		if (!rowsMap.has(item.row)) {
			rowsMap.set(item.row, []);
		}
		rowsMap.get(item.row)?.push(item);
	});

	// Convert map to sorted array
	const rows = Array.from(rowsMap.entries())
		.sort(([a], [b]) => a - b)
		.map(([, rowItems]) => rowItems);

	// Determine animation play state
	const animationPlayState = animateOnHover
		? isHovered
			? "running"
			: "paused"
		: "running";

	return (
		<section className={cn("w-full", height, className)}>
			<motion.div
				aria-hidden="true"
				className="relative h-full w-full overflow-hidden bg-background py-24 ring-inset sm:py-32"
				onMouseEnter={() => animateOnHover && setIsHovered(true)}
				onMouseLeave={() => animateOnHover && setIsHovered(false)}
			>
				{title && (
					<div className="absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 text-center">
						<div className="relative z-10">
							<p className="mx-auto mt-2 max-w-3xl text-pretty font-semibold text-4xl text-foreground/10 tracking-tight sm:text-5xl md:text-6xl">
								{title}
							</p>
						</div>
					</div>
				)}
				<div
					className="@container absolute inset-0 grid"
					style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
				>
					{rows.map((rowItems, index) => (
						<div
							className="group relative flex items-center"
							key={`${index + 1}-row`}
						>
							<div className="absolute inset-x-0 top-1/2 h-0.5 bg-linear-to-r bg-size-[12px_100%] from-[2px] from-foreground/15 to-[2px] dark:from-foreground/15" />
							{showRowSeparator && (
								<div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r bg-size-[12px_100%] from-[2px] from-foreground/5 to-[2px] group-last:hidden dark:from-foreground/5" />
							)}
							{rowItems.map((logo) => {
								return (
									<div
										className={cn(
											"absolute top-1/2 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap px-3 py-1.5",
											"rounded-full bg-linear-to-t from-50% from-secondary/50 to-secondary/50 ring-1 ring-background/10 ring-inset backdrop-blur-sm dark:ring-foreground/10",
											"repeat-[infinite] [--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-name:move-x] [animation-timing-function:linear]",
											"shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-none"
										)}
										key={`${logo.row}-${logo.label}`}
										style={{
											animationDelay: `${logo.animationDelay}s`,
											animationDuration: `${logo.animationDuration}s`,
											animationPlayState: animationPlayState,
										}}
									>
										{logo.icon}
										<span className="font-medium text-foreground text-sm/6">
											{logo.label}
										</span>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
