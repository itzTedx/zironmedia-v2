import { cn } from "@/lib/utils";

export const Noise = ({ className, ...props }: React.ComponentProps<"div">) => {
	return (
		<div
			{...props}
			className={cn(
				"pointer-events-none absolute inset-0 z-50 opacity-30 mix-blend-overlay",
				className
			)}
		>
			<div className="absolute inset-0 z-50 bg-[url('/images/noise.webp')] bg-size-[128px] bg-top-left bg-repeat" />
		</div>
	);
};
