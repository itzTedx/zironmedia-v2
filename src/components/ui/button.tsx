"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Slot, WithAsChild } from "../primitives/slot";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-clip-padding font-medium text-sm outline-none transition-[box-shadow,color,background-color,border-color,outline-color,text-decoration-color,fill,stroke] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"relative bg-primary text-white shadow-button-primary after:absolute after:inset-0 after:z-10 after:bg-linear-0 after:from-white/15 hover:brightness-120 [a]:hover:bg-primary/80",
				outline:
					"border-border bg-background/20 hover:border-white hover:bg-white/40 hover:text-white aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-primary shadow-sm aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
				ghost:
					"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
				destructive:
					"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default:
					"h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
				xs: "h-6 gap-1 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-7 gap-1 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-11 gap-1.5 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				icon: "size-8",
				"icon-xs":
					"size-6 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
				"icon-sm":
					"size-7 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)]",
				"icon-lg": "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

type ButtonProps = WithAsChild<
	HTMLMotionProps<"button"> & {
		hoverScale?: number;
		tapScale?: number;
	}
> &
	VariantProps<typeof buttonVariants>;

function Button({
	className,
	variant = "default",
	size = "default",
	hoverScale = 1.05,
	tapScale = 0.95,
	asChild,
	...props
}: ButtonProps) {
	const Component = asChild ? Slot : motion.button;

	return (
		<Component
			className={cn(buttonVariants({ variant, size, className }))}
			data-slot="button"
			whileHover={{ scale: hoverScale }}
			whileTap={{ scale: tapScale }}
			{...props}
		/>
	);
}

export { Button, buttonVariants, type ButtonProps };
