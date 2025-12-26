"use client";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface BentoItem {
	id: number | string;
	title: string;
	subtitle: string;
	description: string;
	icon: React.ReactNode;
	content?: React.ReactNode;
	image: React.ReactNode;
}

export interface StaggeredGridProps {
	images: string[];
	items: BentoItem[];
	centerText?: string;
	credits?: {
		madeBy: { text: string; href: string };
		moreDemos: { text: string; href: string };
	};
	className?: string;
	showFooter?: boolean;
}

export function StaggeredGrid({
	images,
	items,
	centerText = "Halcyon",
	credits = {
		madeBy: { text: "@codrops", href: "https://x.com/codrops" },
		moreDemos: {
			text: "More demos",
			href: "https://tympanus.net/codrops/demos",
		},
	},
	className,
	showFooter = true,
}: StaggeredGridProps) {
	const gridFullRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const [activeBento, setActiveBento] = useState<number>(0);

	const splitText = (text: string) => {
		return text.split("").map((char, i) => (
			<span
				className="char inline-block"
				key={`char-${i + 1}`}
				style={{ willChange: "transform" }}
			>
				{char === " " ? "\u00A0" : char}
			</span>
		));
	};

	useEffect(() => {
		// Animate Text Element
		if (textRef.current) {
			const chars = textRef.current.querySelectorAll(".char");
			gsap
				.timeline({
					scrollTrigger: {
						trigger: textRef.current,
						start: "top bottom",
						end: "center center-=25%",
						scrub: 1,
					},
				})
				.from(chars, {
					ease: "sine.out",
					yPercent: 300,
					autoAlpha: 0,
					stagger: { each: 0.05, from: "center" },
				});
		}

		// Animate Full Grid
		if (gridFullRef.current) {
			const gridFullItems = gridFullRef.current.querySelectorAll(".grid__item");
			const numColumns = getComputedStyle(gridFullRef.current)
				.getPropertyValue("grid-template-columns")
				.split(" ").length;
			const middleColumnIndex = Math.floor(numColumns / 2);

			const columns: Element[][] = Array.from({ length: numColumns }, () => []);
			gridFullItems.forEach((item, index: number) => {
				columns[index % numColumns].push(item);
			});

			columns.forEach((columnItems, columnIndex) => {
				const delayFactor = Math.abs(columnIndex - middleColumnIndex) * 0.2;
				gsap
					.timeline({
						scrollTrigger: {
							trigger: gridFullRef.current,
							start: "top bottom",
							end: "center center",
							scrub: 1.5,
						},
					})
					.from(columnItems, {
						yPercent: 450,
						autoAlpha: 0,
						delay: delayFactor,
						ease: "sine.out",
					})
					.from(
						columnItems.map((item) => item.querySelector(".grid__item-img")),
						{
							transformOrigin: "50% 0%",
							ease: "sine.out",
						},
						0
					);
			});

			// Bento Container Animation
			const bentoContainer =
				gridFullRef.current.querySelector(".bento-container");
			if (bentoContainer) {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: gridFullRef.current,
							start: "top top+=15%",
							end: "bottom center",
							scrub: 1,
							invalidateOnRefresh: true,
						},
					})
					.to(
						bentoContainer,
						{
							y: window.innerHeight * 0.1,
							scale: 1.5,
							zIndex: 1000,
							ease: "power2.out",
							duration: 1,
							force3D: true,
						},
						0
					);
			}
		}
	}, []);

	const mixedGridItems: (string | "BENTO_GROUP")[] = [
		...images,
		...images,
		images[0],
	].slice(0, 35);
	mixedGridItems[16] = "BENTO_GROUP";

	return (
		<div
			className={cn("relative w-full overflow-hidden shadow", className)}
			style={{ "--grid-item-translate": "0px" } as React.CSSProperties}
		>
			<section className="relative mt-[50vh] grid w-full place-items-center">
				<div
					className="text flex content-center font-display font-semibold text-[clamp(3rem,14vw,10rem)] text-neutral-900 uppercase leading-[0.7] dark:text-white"
					ref={textRef}
				>
					{splitText(centerText)}
				</div>
			</section>

			<section className="relative grid w-full place-items-center">
				<div
					className="grid--full relative my-[1vh] grid aspect-[1.1] h-auto w-full max-w-none grid-cols-7 grid-rows-5 gap-4 p-4"
					ref={gridFullRef}
				>
					<div className="grid-overlay pointer-events-none absolute inset-0 z-15 rounded-lg bg-white/80 opacity-0 transition-opacity duration-500 dark:bg-black/80" />
					{mixedGridItems.map((item, i) => {
						if (item === "BENTO_GROUP") {
							if (!items || items.length === 0) return null;
							return (
								<div
									className="grid__item bento-container relative z-20 col-span-3 row-span-1 flex h-full w-full items-center justify-center gap-2 will-change-transform"
									key="bento-group"
								>
									{items.map((item, index) => {
										const isActive = activeBento === index;

										return (
											<div
												className={cn(
													"relative h-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
													isActive ? "bg-zinc-900/10 shadow-2xl" : "bg-zinc-950"
												)}
												key={item.id}
												onClick={() => setActiveBento(index)}
												onMouseEnter={() => setActiveBento(index)}
												style={{ width: isActive ? "60%" : "20%" }}
											>
												<div
													className={cn(
														"pointer-events-none absolute inset-0 z-50 rounded-2xl border transition-colors duration-700",
														isActive
															? "border-zinc-500/50"
															: "border-zinc-800/50"
													)}
												/>
												<div className="relative z-10 flex h-full w-full flex-col p-0">
													<div
														className={cn(
															"absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
															isActive
																? "translate-y-0 opacity-100"
																: "pointer-events-none translate-y-4 opacity-0"
														)}
													>
														<div className="group/img absolute inset-0 z-0 overflow-hidden bg-zinc-900">
															{item.image}
															{/* <Image
																		alt={item.title}
																		className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700"
																		fill
																		src={item.image}
																	/> */}
															<div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black via-black/50 to-transparent" />
														</div>
														<div className="absolute bottom-0 left-0 z-20 flex h-20 w-full items-center justify-between px-5">
															<h3 className="font-bold text-sm text-white drop-shadow-md">
																{item.title}
															</h3>
															<div className="text-white/90">{item.icon}</div>
														</div>
													</div>
												</div>
												<div
													className={cn(
														"absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500",
														isActive
															? "pointer-events-none scale-90 opacity-0"
															: "scale-100 opacity-100"
													)}
												>
													<div className="text-white/50">{item.icon}</div>
													<span className="font-medium text-[10px] text-zinc-500 uppercase tracking-wider">
														{item.title}
													</span>
												</div>
											</div>
										);
									})}
								</div>
							);
						}
						if (i === 17 || i === 18) return null;
						if (typeof item === "string") {
							// const Icon = i % 3 === 0 ? Github : i % 3 === 1 ? Slack : Twitter;
							const label =
								i % 3 === 0 ? "Github" : i % 3 === 1 ? "Slack" : "Twitter";
							return (
								<figure
									className="grid__item group perspective-midrange relative z-10 m-0 cursor-pointer will-change-[transform,opacity]"
									key={`img-${i + 1}`}
								>
									<div className="grid__item-img backface-hidden flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm transition-all duration-500 ease-out will-change-transform group-hover:scale-105 group-hover:shadow-xl dark:border-zinc-900 dark:bg-zinc-950">
										<div className="absolute inset-0 z-0 bg-linear-to-b from-black/40 via-black/80 to-black opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
										<div className="relative z-10 flex flex-col items-center justify-center gap-3">
											{/* <Icon className="h-8 w-8 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white dark:text-zinc-500" /> */}
											<div className="translate-y-2 transform text-center opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
												<span className="mb-0.5 block font-medium text-[10px] text-white/90 uppercase tracking-wider">
													Build with
												</span>
												<span className="block font-bold text-sm text-white tracking-tight">
													{label}
												</span>
											</div>
										</div>
									</div>
								</figure>
							);
						}
						return null;
					})}
				</div>
			</section>

			{showFooter && (
				<footer className="frame__footer relative z-50 flex w-full items-center justify-between p-8 font-medium text-neutral-900 text-xs uppercase tracking-wider dark:text-white">
					<a
						className="transition-opacity hover:opacity-60"
						href={credits.madeBy.href}
					>
						{credits.madeBy.text}
					</a>
					<a
						className="transition-opacity hover:opacity-60"
						href={credits.moreDemos.href}
					>
						{credits.moreDemos.text}
					</a>
				</footer>
			)}
		</div>
	);
}

export default StaggeredGrid;
