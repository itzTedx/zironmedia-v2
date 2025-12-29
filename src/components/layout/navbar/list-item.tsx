import { Route } from "next";
import Link from "next/link";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: Route }) {
	return (
		<li {...props}>
			<NavigationMenuLink render={<Link href={href} />}>
				<div className="flex flex-col gap-1 style-lyra:text-xs style-maia:text-sm style-mira:text-xs style-nova:text-sm style-vega:text-sm">
					<p className="font-medium leading-none">{title}</p>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
		</li>
	);
}
