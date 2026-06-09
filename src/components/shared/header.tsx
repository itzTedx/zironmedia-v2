import { cn } from "@/lib/utils";

interface HeaderProps {
	title: string;
	description: string;
	className?: string;
	children?: React.ReactNode;
	isBorderless?: boolean;
}

export const Header = ({
	title,
	description,
	className,
	children,
	isBorderless = false,
}: HeaderProps) => {
	return (
		<header
			className={cn(
				"flex w-full flex-col gap-4 py-12 sm:flex-row sm:items-center",
				!isBorderless && "dashed dashed-x container max-w-7xl",
				className
			)}
		>
			<div
				className={cn(
					"flex flex-col gap-4 sm:container sm:flex-row sm:items-center",
					children ? "sm:justify-between" : ""
				)}
			>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
					<h2 className="max-w-sm shrink-0 font-display font-semibold text-4xl text-gray-1000 leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
						{title}
					</h2>
					<span
						aria-hidden="true"
						className="hidden h-10 w-px bg-gray-300 sm:block"
					/>
					<p className="max-w-xl text-balance text-muted-foreground text-sm sm:text-base">
						{description}
					</p>
				</div>
				{children}
			</div>
		</header>
	);
};
