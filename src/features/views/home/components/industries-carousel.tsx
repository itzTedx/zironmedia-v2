"use client";

import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconGear } from "@/assets/icons/gear";
import { IconHeart } from "@/assets/icons/heart";
import { IconPaint } from "@/assets/icons/paint";
import { IconPointer } from "@/assets/icons/pointer";
import { IconShapes } from "@/assets/icons/shapes";
import { IconSignal } from "@/assets/icons/signal";
import { IconSparkle } from "@/assets/icons/sparkle";
import { IconStarBox } from "@/assets/icons/star";
import { IconTarget } from "@/assets/icons/target";

import { MEDIA } from "@/data/media";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
	{
		id: 1,
		title: "Real Estate",
		slug: "real-estate-construction",
		icon: IconTarget,
	},
	{
		id: 2,
		title: "Healthcare & Medical",
		slug: "healthcare-clinics",
		icon: IconHeart,
		bg: MEDIA.bg.grad1,
	},
	{
		id: 3,
		title: "Automotive",
		slug: "manufacturing-industrial",
		icon: IconGear,
	},
	{
		id: 4,
		title: "Logistics",
		slug: "logistics-transport",
		icon: IconSignal,
	},
	{
		id: 5,
		title: "Education & Training",
		slug: "education-training",
		icon: IconShapes,
	},
	{
		id: 6,
		title: "SaaS & Technology",
		slug: "startups-saas",
		icon: IconDesktopPoint,
	},
	{
		id: 7,
		title: "E-Commerce",
		slug: "retail-ecommerce",
		icon: IconPointer,
	},
	{
		id: 8,
		title: "Hospitality",
		slug: "food-restaurants",
		icon: IconStarBox,
	},
	{
		id: 9,
		title: "B2B & Corporates",
		slug: "finance-accounting",
		icon: IconTarget,
	},
	{
		id: 10,
		title: "Luxury Brands",
		slug: "beauty-wellness",
		icon: IconPaint,
	},
	{
		id: 11,
		title: "Startups & SMEs",
		slug: "startups-saas",
		icon: IconSparkle,
	},
];

export const IndustriesCarousel = () => {
	return (
		<Carousel
			autoplayOptions={{
				delay: 3000,
				stopOnMouseEnter: true,
			}}
			className="w-full"
			opts={{
				align: "start",
			}}
		>
			<CarouselContent>
				{INDUSTRIES.map((industry) => (
					<CarouselItem
						className="basis-1/2 md:basis-1/3 lg:basis-1/5"
						key={industry.id}
					>
						<Link className="group" href={`/industry/${industry.slug}`}>
							<div
								className={cn(
									"relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl bg-card"
								)}
							>
								<Noise />
								<industry.icon className="relative z-10 size-16 text-primary" />
							</div>
							<h4 className="mt-4 text-center font-medium text-lg">
								{industry.title}
							</h4>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="mt-4 flex items-center justify-center gap-4">
				<CarouselPrevious
					className="relative left-0 translate-y-0 bg-card"
					size="icon-lg"
				/>
				<CarouselNext
					className="relative right-0 translate-y-0 bg-card"
					size="icon-lg"
				/>
			</div>
		</Carousel>
	);
};
