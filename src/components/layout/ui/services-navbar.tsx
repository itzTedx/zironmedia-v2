"use client";

import { useState } from "react";

import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

import { Submenu } from "../data/types";

export const ServicesNavbar = ({ submenu }: { submenu: Submenu[] }) => {
	const [hoveredIdx, setHoveredIdx] = useState<string | null>(null);

	const hoveredImage = submenu.find((menu) => menu.id === hoveredIdx);

	return (
		<div className="grid w-3xl grid-cols-[1fr_0.85fr] gap-4">
			<ul className="space-y-1.5">
				{submenu.map((sub) => {
					const Icon = sub.icon!;
					return (
						<li
							key={sub.id}
							onMouseEnter={() => setHoveredIdx(sub.id)}
							onMouseLeave={() => setHoveredIdx(null)}
						>
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
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="relative isolate flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-linear-[180deg,#B362FF_-8.23%,#401CD8_44.8%,#1A1162_100%] p-12 shadow-sm">
				<AnimatePresence mode="wait">
					{hoveredIdx && (
						<motion.div
							animate={{ opacity: 1 }}
							className="absolute inset-x-0 bottom-0 z-9 h-1/2 bg-linear-to-t from-foreground to-transparent"
							exit={{ opacity: 0.5 }}
							initial={{ opacity: 0.5 }}
							transition={{ duration: 0.1, ease: "easeIn" }}
						/>
					)}
				</AnimatePresence>
				<AnimatePresence mode="wait">
					<motion.div
						animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						className="absolute inset-0 z-10"
						exit={{ opacity: 0.5, x: -20, filter: "blur(10px)" }}
						initial={{ opacity: 0.5, x: 20, filter: "blur(10px)" }}
						key={hoveredIdx}
						transition={{ duration: 0.1, ease: "easeIn" }}
					>
						<div className="relative z-50 flex h-full flex-col justify-end p-6">
							<h2 className="font-medium text-2xl text-card tracking-tight">
								{hoveredImage?.title}
							</h2>
							<p className="text-muted text-xs">{hoveredImage?.description}</p>
						</div>
					</motion.div>
				</AnimatePresence>
				<AnimatePresence mode="wait">
					<motion.div
						animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
						className="absolute inset-0"
						exit={{ opacity: 0.5, x: -20, filter: "blur(10px)" }}
						initial={{ opacity: 0.5, x: 20, filter: "blur(10px)" }}
						key={hoveredIdx}
						transition={{ duration: 0.1, ease: "easeIn" }}
					>
						<Image
							alt="Service Image"
							className={cn("object-cover")}
							fill
							src={hoveredImage?.image || "/images/services/logo-design.jpg"}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};
