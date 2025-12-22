import Link from "next/link";

import { IconArrowRight } from "@/assets/icons/arrow";
import { Logo } from "@/assets/logo";

import { Button } from "../ui/button";
import { NAV_LINKS } from "./constants";

export const Navbar = () => {
	return (
		<header className="bg-primary py-2">
			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-12">
					<Logo className="size-10" />
					<ul className="flex items-center gap-12 font-display font-semibold text-background uppercase">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<Link href={link.href}>{link.label}</Link>
							</li>
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
