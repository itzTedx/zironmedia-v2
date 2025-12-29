import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { IconSignal } from "@/assets/icons/signal";

import { cn } from "@/lib/utils";

import { Submenu } from "../data/types";

export const ProductsNavbar = ({ submenu }: { submenu: Submenu[] }) => {
	return (
		<ul className="w-sm space-y-1.5">
			{submenu.map((sub) => {
				const Icon = sub.icon;
				return (
					<li key={sub.id}>
						<NavigationMenuLink
							className={cn(
								"group/product overflow-hidden rounded-xl! p-6",
								sub.id === "tap"
									? "bg-gray-1000 text-white hover:bg-gray-1500"
									: "bg-fuchsia-300 text-foreground hover:bg-fuchsia-400"
							)}
							render={<Link href={sub.href} />}
						>
							<div className="relative flex w-full justify-between">
								<div className="flex flex-col gap-6">
									<div
										className={cn(
											"flex size-10 items-center justify-center rounded-lg transition-colors",
											sub.id === "tap"
												? "bg-gray-900"
												: "bg-fuchsia-400 group-hover/product:bg-fuchsia-300"
										)}
									>
										<Icon className="size-8" />
									</div>
									<div>
										<p className="font-display font-medium text-lg leading-none">
											{sub.title}
										</p>
										<span className="line-clamp-2">{sub.description}</span>
									</div>
								</div>

								{sub.badge && (
									<Badge className="text-brand-secondary" size="sm">
										{sub.badge}
									</Badge>
								)}

								{sub.id === "tap" && (
									<div className="absolute left-1/2 -translate-y-1/2">
										<IconSignal className="size-" />
									</div>
								)}
							</div>
						</NavigationMenuLink>
					</li>
				);
			})}
		</ul>
	);
};

export const MobileProductsNavbar = ({ submenu }: { submenu: Submenu }) => {
	const Icon = submenu.icon;
	const tap = submenu.id === "tap";

	return (
		<li
			className={cn(
				"group/product overflow-hidden rounded-xl bg-primary p-6",
				tap
					? "bg-gray-1000 text-white hover:bg-gray-1500"
					: "bg-fuchsia-300 hover:bg-fuchsia-400"
			)}
			key={submenu.id}
		>
			<div className="relative flex w-full justify-between">
				<div className="flex flex-col gap-6">
					<div
						className={cn(
							"flex size-10 items-center justify-center rounded-lg shadow-dark transition-colors",
							tap ? "bg-gray-900/50" : "bg-fuchsia-200/50"
						)}
					>
						<Icon className="size-8" />
					</div>
					<div>
						<p className="font-display font-medium text-lg leading-none">
							{submenu.title}
						</p>
						<span className="line-clamp-2">{submenu.description}</span>
					</div>
				</div>

				{submenu.badge && (
					<Badge className="text-brand-secondary" size="sm">
						{submenu.badge}
					</Badge>
				)}

				{tap && (
					<div className="absolute left-1/2 -translate-y-1/2">
						<IconSignal className="size-" />
					</div>
				)}
			</div>
		</li>
	);
};
