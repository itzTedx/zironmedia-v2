"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { IconPlay } from "@/assets/icons/play";

import { cn } from "@/lib/utils";

export interface LogoItem {
	/** The label text displayed next to the icon */
	label: string;

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

export const logos: LogoItem[] = [
	// Row 1 - Communication & Social (2 logos, 50s duration, spaced 25s apart)
	{
		label: "Discord",
		icon: <IconPlay />,
		animationDelay: -50,
		animationDuration: 50,
		row: 1,
	},
	{
		label: "Twitter",
		icon: <IconPlay />,
		animationDelay: -25,
		animationDuration: 50,
		row: 1,
	},
	// Row 2 - Development Tools (2 logos, 45s duration, spaced 22.5s apart)
	{
		label: "GitHub",
		icon: <IconPlay />,
		animationDelay: -45,
		animationDuration: 45,
		row: 2,
	},
	{
		label: "React",
		icon: <IconPlay />,
		animationDelay: -22.5,
		animationDuration: 45,
		row: 2,
	},
	// Row 3 - Development Tools Continued (3 logos, 60s duration, spaced 20s apart)
	{
		label: "TypeScript",
		icon: <IconPlay />,
		animationDelay: -60,
		animationDuration: 60,
		row: 3,
	},
	{
		label: "Tailwind",
		icon: <IconPlay />,
		animationDelay: -40,
		animationDuration: 60,
		row: 3,
	},
	{
		label: "Radix UI",
		icon: <IconPlay />,
		animationDelay: -40,
		animationDuration: 60,
		row: 3,
	},
	// Row 4 - Productivity & Cloud (2 logos, 55s duration, spaced 27.5s apart)
	{
		label: "Google Drive",
		icon: <IconPlay />,
		animationDelay: -55,
		animationDuration: 55,
		row: 4,
	},
	{
		label: "Notion",
		icon: <IconPlay />,
		animationDelay: -27.5,
		animationDuration: 55,
		row: 4,
	},
	// Row 5 - Messaging (2 logos, 50s duration, spaced 25s apart)
	{
		label: "WhatsApp",
		icon: <IconPlay />,
		animationDelay: -50,
		animationDuration: 50,
		row: 5,
	},
	{
		label: "Messenger",
		icon: <IconPlay />,
		animationDelay: -25,
		animationDuration: 50,
		row: 5,
	},
	// Row 6 - AI & Automation (3 logos, 65s duration, spaced ~21.5s apart)
	{
		label: "OpenAI",
		icon: <IconPlay />,
		animationDelay: -65,
		animationDuration: 65,
		row: 6,
	},
	{
		label: "Zapier",
		animationDelay: -43,
		icon: <IconPlay />,
		animationDuration: 65,
		row: 6,
	},
	{
		label: "v0",
		animationDelay: -21.5,
		icon: <IconPlay />,
		animationDuration: 65,
		row: 6,
	},
	// Row 7 - Payment & Services (2 logos, 50s duration, spaced 25s apart)
	{
		label: "PayPal",
		animationDelay: -50,
		icon: <IconPlay />,
		animationDuration: 50,
		row: 7,
	},
	{
		label: "Apple Pay",
		icon: <IconPlay />,
		animationDelay: -25,
		animationDuration: 50,
		row: 7,
	},
];

export function LogoTimeline({
	items,
	animateOnHover = false,
	title,
	height = "h-[400px] sm:h-[800px]",
	className,
	showRowSeparator = false,
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
