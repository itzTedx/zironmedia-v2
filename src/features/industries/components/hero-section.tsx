"use client";

import { useState } from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotatingText, RotatingTextContainer } from "@/components/ui/rotating";

import { IndustryHubItem } from "../views/industry-hub-page-view";
import { IndustriesHeroCarousel } from "./hero-carousel";

export const IndustriesHeroSection = ({
	industries,
}: {
	industries: IndustryHubItem[];
}) => {
	const [activeIndex, setActiveIndex] = useState<number | undefined>(0);
	return (
		<section className="relative bg-[radial-gradient(ellipse_400%_240%_at_50%_100%,#fff,#fff_10%,15%,#c7c5fd_16%,rgba(154,103,250,.6)_17%,21%,#264cab_28%,35%,#00031d_45%,#00031d)]">
			<div className="dashed dashed-x container max-w-7xl py-16 pt-24">
				<Badge>Industries We Serve in UAE</Badge>

				<h1 className="mt-4 max-w-4xl font-bold text-4xl text-primary md:text-5xl">
					Preferred Digital Growth Partner for Leaders in{" "}
					<RotatingTextContainer
						className="inline-flex text-wrap"
						onChange={(index) => setActiveIndex(index as number)}
						text={industries.map((industry) => industry.title)}
					>
						<RotatingText />
					</RotatingTextContainer>
				</h1>

				<div className="relative z-99 mt-4 flex w-full flex-col items-start gap-4 sm:flex-row md:w-auto">
					{/* <Input
							className="max-w-sm bg-card"
							placeholder="Enter your email"
						/> */}
					<Button
						className="group h-auto w-full justify-between gap-4 whitespace-normal py-3 text-left duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 sm:w-auto sm:py-0 sm:text-center"
						data-label="Hero - Book Consultation"
						data-location="hero_primary"
						data-track="cta_click-hero-book_a_call"
						render={<Link href="/contact" />}
						size="xl"
					>
						<span>Consult our Experts</span>
						{/* <IconArrowRightTag className="size-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-3" /> */}
					</Button>

					<Button
						className="group w-full bg-card text-secondary duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:px-6 sm:w-auto"
						data-label="Hero - See us in action"
						data-location="hero_secondary"
						data-track="cta_click-hero-see_us_in_action"
						render={<Link href="/our-works" />}
						size="xl"
						variant="ghost"
					>
						<span>See us in action</span>
					</Button>
				</div>
			</div>

			<IndustriesHeroCarousel
				activeIndex={activeIndex}
				industries={industries}
			/>
		</section>
	);
};
