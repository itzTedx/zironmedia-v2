"use client";

import { useState } from "react";

import { Route } from "next";
import Link from "next/link";

import { IconCaretDown, IconCaretRight } from "@/assets/icons/caret";
import { IconMenu, IconX } from "@/assets/icons/menu"; // Assuming these icons exist or I'll need to find them
import { Logo } from "@/assets/logo";

import { Noise } from "../shared/noise";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NAV_LINKS } from "./data/constants";
import { NavLink } from "./data/types";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="sticky top-0 z-999 bg-primary py-2.5">
			<div className="container mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-9">
					<Link
						className="transition-[filter] duration-300 hover:brightness-135"
						href="/"
					>
						<Logo className="size-10" />
					</Link>
					<NavigationMenu>
						<NavigationMenuList>
							{NAV_LINKS.map((link) =>
								link.submenu ? (
									<NavigationMenuItem key={link.label}>
										<NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="w-96">
												{link.submenu.map((sub) => (
													<ListItem
														href={sub.href}
														key={sub.title}
														title={sub.title}
													>
														{sub.description}
													</ListItem>
												))}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								) : (
									<NavigationMenuItem key={link.label}>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
											render={<Link href={link.href} />}
										>
											{link.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								)
							)}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-4">
					<Button className="hidden md:flex" variant="secondary">
						Start a project
						<IconCaretRight />
					</Button>
					<button
						className="flex text-white lg:hidden"
						onClick={() => setIsOpen(!isOpen)}
						type="button"
					>
						{isOpen ? (
							<IconX className="size-8" />
						) : (
							<IconMenu className="size-8" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="fade-in slide-in-from-top-4 absolute top-full left-0 w-full animate-in border-white/10 border-t bg-primary p-6 shadow-xl lg:hidden">
					<ul className="flex flex-col gap-6 font-display font-semibold uppercase">
						{NAV_LINKS.map((link) => (
							<NavLinkItem key={link.label} link={link} />
						))}
					</ul>
					<Button className="mt-8 w-full" variant="secondary">
						Start a project
						<IconCaretRight />
					</Button>
				</div>
			)}
			<Noise className="opacity-40" />
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

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: Route }) {
	return (
		<li {...props}>
			<NavigationMenuLink render={<Link href={href} />}>
				<div className="flex flex-col gap-1 style-lyra:text-xs style-maia:text-sm style-mira:text-xs style-nova:text-sm style-vega:text-sm">
					<div className="font-medium leading-none">{title}</div>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
		</li>
	);
}
