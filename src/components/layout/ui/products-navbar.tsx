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
				const Icon = sub.icon!;
				return (
					<li key={sub.id}>
						<NavigationMenuLink
							className={cn(
								"group/product overflow-hidden rounded-xl! p-6 text-card transition-colors duration-300 data-[product=crm]:bg-yellow-300/80 data-[product=tap]:bg-blue-500 data-[product=crm]:text-foreground data-[product=crm]:hover:bg-yellow-400 data-[product=tap]:hover:bg-blue-600"
							)}
							data-product={sub.id}
							render={<Link href={sub.href} />}
						>
							<div className="relative flex w-full flex-col gap-6">
								<div
									className={cn(
										"flex size-10 items-center justify-center rounded-lg shadow-dark transition-colors data-[product=crm]:bg-yellow-100 data-[product=tap]:bg-blue-700"
									)}
									data-product={sub.id}
								>
									<Icon className="size-8" />
								</div>
								<div className="flex w-full items-end justify-between">
									<div>
										<p className="font-display font-medium text-lg leading-none">
											{sub.title}
										</p>
										<span className="line-clamp-2">{sub.description}</span>
									</div>
									{sub.badge && (
										<Badge
											className="relative z-10 text-brand-secondary"
											size="sm"
										>
											{sub.badge}
										</Badge>
									)}
								</div>
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
	const Icon = submenu.icon!;
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
