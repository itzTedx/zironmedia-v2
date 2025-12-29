"use client";

import * as React from "react";

import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { IconCaretRight } from "@/assets/icons/caret";
import { IconMenu } from "@/assets/icons/menu";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../data/constants";
import { MobileProductsNavbar } from "./products-navbar";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<Drawer onOpenChange={setOpen} open={open}>
			<DrawerTrigger asChild>
				<Button
					className={cn("extend-touch-target md:hidden")}
					size="icon-lg"
					variant="secondary"
				>
					<IconMenu />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent data-scroll-locked={open ? true : false}>
				<DrawerHeader className="sr-only">
					<DrawerTitle>Ziron Media</DrawerTitle>
					<DrawerDescription>Ziron Media</DrawerDescription>
				</DrawerHeader>
				<nav className="flex flex-col gap-12 overflow-auto px-6 py-6">
					<div className="flex flex-col gap-6">
						{NAV_LINKS.map((links) =>
							links.submenu ? (
								<ul className="space-y-2.5" key={links.label}>
									{links.label === "Products" ? (
										links.submenu?.map((sub) => (
											<MobileProductsNavbar key={sub.id} submenu={sub} />
										))
									) : (
										<li className="flex flex-col gap-3" key={links.label}>
											<h2 className="text-sm">{links.label}</h2>
											{links.submenu?.map((service) => (
												<MobileLink
													href={service.href}
													key={service.id}
													onOpenChange={setOpen}
												>
													{service.title}
												</MobileLink>
											))}
										</li>
									)}
								</ul>
							) : (
								<MobileLink
									href={links.href!}
									key={links.label}
									onOpenChange={setOpen}
								>
									{links.label}
								</MobileLink>
							)
						)}
					</div>
				</nav>
				<DrawerFooter>
					<Button size="lg" variant="default">
						Start a project
						<IconCaretRight className="hidden md:block" />
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: {
	href: Route;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}) {
	const router = useRouter();
	return (
		<Link
			className={cn("font-medium text-2xl", className)}
			href={href}
			onClick={() => {
				router.push(href);
				onOpenChange?.(false);
			}}
			{...props}
		>
			{children}
		</Link>
	);
}
