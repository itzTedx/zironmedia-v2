import Link from "next/link";

import { IconCaretDown, IconCaretRight } from "@/assets/icons/caret";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";
import { NAV_LINKS } from "./constants";
import { NavLink } from "./types";

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-999 bg-primary py-2.5">
			<nav className="container mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-12">
					<Link
						className="transition-[filter] duration-300 hover:brightness-135"
						href="/"
					>
						<Logo className="size-10" />
					</Link>
					<ul className="flex items-center gap-12 font-display font-semibold uppercase">
						{NAV_LINKS.map((link) => (
							<NavLinkItem key={link.label} link={link} />
						))}
					</ul>
				</div>
				<Button variant="secondary">
					Start a project
					<IconCaretRight />
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

				{link.submenu && <IconCaretDown className="shrink-0" />}
			</Link>
		</li>
	);
}
