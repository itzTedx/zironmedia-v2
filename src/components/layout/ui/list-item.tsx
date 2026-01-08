"use client";

import { useState } from "react";

import { Route } from "next";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export function ListItem({
	id,
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & {
	href: Route;
	id: string;
}) {
	const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

	const hovered = id === hoveredIdx;

	return (
		<li
			{...props}
			className="relative"
			onMouseEnter={() => setHoveredIdx(id)}
			onMouseLeave={() => setHoveredIdx(null)}
		>
			<NavigationMenuLink
				className="relative z-10 hover:bg-transparent"
				render={<Link href={href} />}
			>
				<div className="flex flex-col gap-1">
					<p className="font-medium leading-none">{title}</p>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
			<AnimatePresence>
				{hovered && (
					<motion.span
						animate={{
							opacity: 1,
							transition: { duration: 0.05 },
						}}
						className={cn(
							"absolute inset-0 z-0 block h-full w-full rounded-xl bg-gray-100/60"
						)}
						exit={{
							opacity: 0,
							transition: { duration: 0.01, delay: 0.05 },
						}}
						initial={{ opacity: 0 }}
						layoutId="cardHoverEffect"
					/>
				)}
			</AnimatePresence>
		</li>
	);
}
