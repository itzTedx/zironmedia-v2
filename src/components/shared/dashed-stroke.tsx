import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dashedStrokeVariants = cva(
	"absolute bg-[repeating-linear-gradient(var(--direction),var(--color)_0,var(--color)_6px,transparent_6px,transparent_12px)] [--color:var(--color-strong)] [--size:1px]",
	{
		variants: {
			position: {
				left: "top-0 left-0 h-full w-(--size) [--direction:to_bottom]",
				right: "top-0 right-0 h-full w-(--size) [--direction:to_bottom]",
				bottom: "bottom-0 left-0 h-(--size) w-full [--direction:to_right]",
				top: "top-0 left-0 h-(--size) w-full [--direction:to_right]",
			},
		},
		defaultVariants: {
			position: "bottom",
		},
	}
);

interface DashedStrokeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof dashedStrokeVariants> {}

function DashedStroke({ className, position, ...props }: DashedStrokeProps) {
	return (
		<div
			className={cn(dashedStrokeVariants({ position, className }))}
			data-slot="stroke"
			{...props}
		/>
	);
}

export { DashedStroke, dashedStrokeVariants };
