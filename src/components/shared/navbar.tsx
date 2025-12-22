import Link from "next/link";

import { IconArrowDown, IconArrowRight } from "@/assets/icons/arrow";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";
import { NAV_LINKS, NavLink } from "./constants";

export const Navbar = () => {
	return (
		<header className="bg-primary py-2">
			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-12">
					<Logo className="size-10" />
					<ul className="flex items-center gap-12 font-display font-semibold uppercase">
						{NAV_LINKS.map((link) => (
							<NavLinkItem key={link.label} link={link} />
						))}
					</ul>
				</div>
				<Button size="lg" variant="secondary">
					Start a project
					<IconArrowRight />
				</Button>
			</nav>
		</header>
	);
};

function NavLinkItem({ link }: { link: NavLink }) {
	return (
		<li>
			<Link
				className="flex items-center gap-1.5 text-primary-foreground transition-colors hover:text-white"
				href={link.href}
			>
				{link.label}

				{link.submenu && <IconArrowDown className="shrink-0" />}
			</Link>
		</li>
	);
}
