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
				<div className="flex flex-col gap-1">
					<p className="font-medium leading-none">{title}</p>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
		</li>
	);
}
