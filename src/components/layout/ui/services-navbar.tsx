"use client";

import { Route } from "next";
import Link from "next/link";

import { Submenu } from "../data/types";

export const ServicesNavbar = ({ submenu }: { submenu: Submenu[] }) => {
	return (
		<div className="grid w-2xl grid-cols-7 gap-4">
			<ul className="col-span-4 space-y-1.5">
				{submenu.map((sub) => {
					const Icon = sub.icon!;
					return (
						<li key={sub.id}>
							<Link
								className="group flex items-center gap-2 rounded-lg p-1 hover:bg-background"
								href={sub.href as Route}
							>
								<div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-background">
									<Icon className="size-8 text-muted transition-colors duration-300 group-hover:text-primary" />
								</div>
								<div className="space-y-1">
									<p className="font-medium text-lg leading-none">
										{sub.title}
									</p>
									<span className="line-clamp-2 text-muted-foreground text-xs leading-none">
										{sub.description}
									</span>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="relative isolate col-span-3 flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-linear-[180deg,#B362FF_-8.23%,#401CD8_44.8%,#1A1162_100%] p-12 shadow-sm">
				Image
			</div>
		</div>
	);
};
