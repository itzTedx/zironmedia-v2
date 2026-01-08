"use client";

import Link from "next/link";

import { IconCaretRight } from "@/assets/icons/caret";
import { Logo, Wordmark } from "@/assets/logo";

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
import { ListItem } from "./ui/list-item";
import { MobileNav } from "./ui/mobile-navbar";
import { ProductsNavbar } from "./ui/products-navbar";
import { ServicesNavbar } from "./ui/services-navbar";

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-999 bg-primary/85 py-2.5 backdrop-blur-xl">
			<div className="container mx-auto flex max-w-7xl items-center justify-between gap-4">
				<div className="flex items-center gap-9">
					<Link
						className="flex items-center gap-2 transition-[filter] duration-300 hover:brightness-135"
						href="/"
					>
						<Logo className="size-10" />
						<Wordmark className="mt-1 h-4 w-fit text-white md:h-5" isMono />
					</Link>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							{NAV_LINKS.map((link) =>
								link.submenu ? (
									<NavigationMenuItem key={link.label}>
										<NavigationMenuTrigger>
											{link.href ? (
												<Link href={link.href}>{link.label}</Link>
											) : (
												link.label
											)}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											{link.label === "Products" ? (
												<ProductsNavbar submenu={link.submenu} />
											) : link.label === "Services" ? (
												<ServicesNavbar submenu={link.submenu} />
											) : (
												<ul className="w-96">
													{link.submenu.map((sub) => (
														<ListItem
															href={sub.href}
															id={sub.id}
															key={sub.title}
															title={sub.title}
														>
															{sub.description}
														</ListItem>
													))}
												</ul>
											)}
										</NavigationMenuContent>
									</NavigationMenuItem>
								) : (
									<NavigationMenuItem key={link.label}>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
											render={<Link href={link.href!} />}
										>
											{link.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								)
							)}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex items-center gap-2">
					<Button asChild variant="secondary">
						<Link href="/contact">
							<span className="hidden md:inline">Start a project</span>
							<span className="md:hidden">Contact</span>
							<IconCaretRight className="hidden md:block" />
						</Link>
					</Button>
					<MobileNav />
				</div>
			</div>

			<Noise className="opacity-40" />
		</header>
	);
};
