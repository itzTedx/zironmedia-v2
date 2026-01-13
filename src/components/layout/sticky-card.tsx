"use client";

import { useRef } from "react";

import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { MotionValue, motion, useScroll, useTransform } from "motion/react";

import {
	PreviewLinkCard,
	PreviewLinkCardImage,
	PreviewLinkCardPopup,
	PreviewLinkCardPortal,
	PreviewLinkCardPositioner,
	PreviewLinkCardTrigger,
} from "@/components/primitives/preview-link-card";

import { SERVICES } from "@/features/services/constant";

import { Noise } from "../shared/noise";
import { Badge } from "../ui/badge";

const StickyCard = ({
	i,
	service,
	progress,
	range,
	targetScale,
}: { service: (typeof SERVICES)[number] } & {
	i: number;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}) => {
	const container = useRef<HTMLDivElement>(null);

	const scale = useTransform(progress, range, [1, targetScale]);
	const { description, id, icon: Icon, image, lists, slug, title } = service;

	return (
		<div
			className="sticky top-0 flex items-center justify-center"
			ref={container}
		>
			<motion.div
				className="relative grid w-5xl origin-top gap-6 overflow-hidden rounded-4xl bg-card p-9 md:grid-cols-2"
				style={{
					scale,
					top: `calc(-12vh + ${i * 20 + 250}px)`,
				}}
			>
				<Link
					className="absolute inset-0 z-10"
					href={`/services/${slug}` as Route}
					title={title}
				/>
				<span className="pointer-events-none absolute bottom-6 left-6 z-20 text-6xl text-muted">
					0{id}
					<span className="font-bold text-brand-secondary">.</span>
				</span>
				<Icon className="pointer-events-none absolute -bottom-20 -left-12 size-72 text-muted/10" />
				<div className="relative z-50">
					<h3 className="font-semibold text-2xl text-primary tracking-tight md:text-4xl">
						{title}
					</h3>
					<p className="text-balance text-lg text-muted-foreground">
						{description}
					</p>

					<ul className="relative isolate z-50 mt-4 flex flex-wrap gap-3 text-white">
						{lists.map((list) => (
							<li className="text-lg" key={list.title}>
								<PreviewLinkCard
									followCursor="x"
									href={`/services/${service.slug}/${list.slug}` as Route}
									src={list.image}
								>
									<PreviewLinkCardTrigger
										className="tracking-tight transition-colors duration-300 ease-out hover:text-brand-secondary"
										delay={100}
									>
										<Badge
											className="bg-card transition-transform hover:scale-102"
											size="lg"
											variant="outline"
										>
											{list.title}
										</Badge>
									</PreviewLinkCardTrigger>
									<PreviewLinkCardPortal>
										<PreviewLinkCardPositioner side="inline-end">
											<PreviewLinkCardPopup
												className="overflow-hidden rounded-lg"
												href={`/services/${service.slug}/${list.slug}` as Route}
											>
												<PreviewLinkCardImage alt="Preview link card content" />
											</PreviewLinkCardPopup>
										</PreviewLinkCardPositioner>
									</PreviewLinkCardPortal>
								</PreviewLinkCard>
							</li>
						))}
					</ul>
				</div>

				<div className="relative aspect-4/3 overflow-hidden rounded-xl transition-transform group-hover:scale-110">
					<Noise />
					<Image alt={title} className="object-cover" fill src={image} />
				</div>
				{/* <div className="absolute inset-x-0 top-0 z-10 h-1/2 bg-linear-to-b from-foreground" /> */}
			</motion.div>
		</div>
	);
};

const ServicesStickyCards = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	return (
		<div
			className="relative flex w-full flex-col items-center justify-center pb-[35vh]"
			ref={container}
		>
			<div className="absolute top-0 left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
				<span className="absolute top-full left-1/2 h-16 w-px bg-linear-to-b from-background to-foreground/25" />
			</div>
			{SERVICES.map((service, i) => {
				const targetScale = Math.max(0.5, 1 - (SERVICES.length - i - 1) * 0.1);
				return (
					<StickyCard
						i={i}
						key={`p_${i + 1}`}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						service={service}
						targetScale={targetScale}
					/>
				);
			})}
		</div>
	);
};

export { ServicesStickyCards, StickyCard };
