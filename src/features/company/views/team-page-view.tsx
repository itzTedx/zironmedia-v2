"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { Header } from "@/components/shared/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Frame, FramePanel } from "@/components/ui/frame";

import { TEAM_MEMBERS } from "@/data/team";
import { cn } from "@/lib/utils";

export function TeamPageView() {
	return (
		<main className="pb-16 md:pb-20">
			{/* Hero Section */}
			<section className="dashed dashed-x container max-w-7xl py-12 md:py-16">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<div className="space-y-4">
						<Badge variant="outline">ZironPro Team</Badge>
						<h1 className="font-display font-semibold text-4xl text-primary md:text-7xl">
							Meet the Minds Behind ZironPro.
						</h1>
						<p className="max-w-xl text-lg text-muted-foreground md:text-xl">
							We combine strategic consulting, user-centered design, and robust
							engineering to launch brand platforms and pipelines built for
							scale.
						</p>
					</div>
					<div className="flex flex-col justify-end space-y-4">
						<div className="rounded-2xl bg-surface p-5">
							<p className="font-medium text-foreground">
								A culture built on transparency, rapid iteration, and
								performance.
							</p>
							<p className="mt-2 text-muted-foreground text-sm md:text-base">
								By keeping leadership, strategy, design, and full-stack
								development tightly coupled, we make decisions faster, deploy
								more reliably, and optimize directly for growth.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Staggered Grid Section */}
			<section className="dashed dashed-y">
				<Header
					description="A multidisciplinary group of practitioners focused on turning attention into customer action."
					title="Our Team"
				/>

				<div className="container max-w-7xl py-8 md:py-16">
					{/* Staggered 3-Column Grid */}
					<div className="grid gap-6 pb-16 sm:grid-cols-2 md:pb-32 lg:grid-cols-3">
						{TEAM_MEMBERS.map((member, index) => (
							<motion.div
								animate={{ opacity: 1, y: 0 }}
								className={cn(
									"h-full",
									// Stagger Column 1 on 2-col grids (tablet)
									index % 2 === 0 ? "sm:translate-y-12" : "sm:translate-y-0",
									// Stagger Column 2 on 3-col grids (desktop)
									index % 3 === 1 ? "lg:translate-y-16" : "lg:translate-y-0"
								)}
								initial={{ opacity: 0, y: 15 }}
								key={member.id}
								transition={{ duration: 0.35, ease: "easeOut" }}
							>
								<Frame className="group h-full">
									<FramePanel className="flex h-full flex-col justify-between gap-4 p-2.5">
										{/* Full Width Placeholder Image with local webp */}
										<div className="relative aspect-square w-full select-none overflow-hidden rounded-xl bg-muted">
											<Image
												alt={`${member.name} - ${member.role}`}
												className="object-cover transition-transform duration-500 group-hover:scale-103"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												src={member.image}
											/>

											{/* Department Badge Overlay */}
											<div className="absolute top-3 left-3 z-10">
												<Badge
													className="h-6 rounded-md border-white/10 bg-black/20 px-2 text-[10px] text-white backdrop-blur-md"
													variant="ghost"
												>
													{member.category}
												</Badge>
											</div>
										</div>

										{/* Info Section below avatar image */}
										<div className="px-2 pb-2">
											<div className="space-y-1">
												<h3 className="font-semibold text-base text-foreground leading-tight sm:text-lg">
													{member.name}
												</h3>
												<p className="font-medium text-muted-foreground text-xs sm:text-sm">
													{member.role}
												</p>
											</div>
										</div>
									</FramePanel>
								</Frame>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Bottom CTA Banner */}
			<section className="dashed dashed-x container max-w-7xl py-12 md:py-16">
				<div className="rounded-3xl bg-linear-to-b from-brand-500 to-brand-secondary-400 p-8 text-white md:p-12">
					<Badge className="bg-card text-foreground" variant="outline">
						Ready to Grow
					</Badge>
					<h2 className="mt-4 max-w-3xl font-display font-semibold text-3xl text-white md:text-5xl">
						Build a Digital Presence That Performs as Good as It Looks.
					</h2>
					<p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
						Book a strategy conversation to map your next 90 days of brand,
						website, and marketing priorities with a team built for execution.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Button render={<Link href="/contact" />} variant="secondary">
							Get Your Growth Plan
						</Button>
						<Button
							className="border-white/40 bg-transparent text-white hover:bg-white/10"
							render={<Link href="/services" />}
							variant="outline"
						>
							Explore Services
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
