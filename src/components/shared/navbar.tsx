import Link from "next/link";

import { Logo } from "@/assets/logo";

import { NAV_LINKS } from "./constants";

export const Navbar = () => {
	return (
		<header className="bg-primary">
			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-6">
					<Logo />
					<ul className="flex items-center gap-6 text-background">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};
