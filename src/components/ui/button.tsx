"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Slot, WithAsChild } from "../primitives/slot";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-clip-padding font-display font-semibold text-sm outline-none transition-[box-shadow,color,background-color,border-color,outline-color,text-decoration-color,fill,stroke] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"relative bg-primary text-white shadow-button-primary after:absolute after:inset-0 after:z-10 after:bg-linear-to-b after:from-white/15 hover:brightness-120",
				outline:
					"border-border bg-surface hover:border-white hover:bg-white hover:shadow-sm aria-expanded:bg-muted aria-expanded:text-foreground",
				secondary:
					"bg-secondary text-primary shadow-sm aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
				ghost:
					"hover:bg-muted/30 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
				destructive:
					"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
				link: "relative text-primary underline-offset-4 before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:content-[''] hover:underline hover:before:origin-left hover:before:scale-x-100",
			},
			size: {
				default:
					"h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
				xs: "h-6 gap-1 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-7 gap-1 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-11 gap-1.5 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				icon: "size-10",
				"icon-xs":
					"size-6 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
				"icon-sm":
					"size-8 in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)]",
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
