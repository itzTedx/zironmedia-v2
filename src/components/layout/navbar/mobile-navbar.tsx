"use client";

import * as React from "react";

import { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { IconMenu } from "@/assets/icons/menu";

import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../data/constants";
import { MobileProductsNavbar } from "./products-navbar";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverTrigger
				render={
					<Button
						className={cn("extend-touch-target md:hidden")}
						size="icon-lg"
						variant="secondary"
					/>
				}
			>
				<IconMenu />
				<span className="sr-only">Toggle Menu</span>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				alignOffset={-16}
				className="no-scrollbar h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none bg-white/90 p-0 shadow-none backdrop-blur duration-100"
				side="bottom"
				sideOffset={14}
			>
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
			</PopoverContent>
		</Popover>
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
