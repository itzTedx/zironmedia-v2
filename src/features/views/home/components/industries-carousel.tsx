"use client";

import Image from "next/image";
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
		title: "Real Estate & Property",
		slug: "real-estate-construction",
		icon: IconTarget,
		bg: MEDIA.services.bg.branding,
		description:
			"Attract high-net-worth investors and buyers with conversion-focused SEO, paid campaigns, and lead generation.",
	},
	{
		id: 2,
		title: "Healthcare & Medical",
		slug: "healthcare-clinics",
		icon: IconHeart,
		bg: MEDIA.bg.grad1,
		description:
			"Build patient trust and drive bookings with local SEO, professional branding, and patient nurturing workflows.",
	},
	{
		id: 3,
		title: "Automotive",
		slug: "manufacturing-industrial",
		icon: IconGear,
		bg: MEDIA.services.bg.websites,
		description:
			"Generate consistent test drives, service bookings, and vehicle sales through performance marketing and automated CRM funnels.",
	},
	{
		id: 4,
		title: "Logistics",
		slug: "logistics-transport",
		icon: IconSignal,
		bg: MEDIA.bg.grad2,
		description:
			"Reach B2B shippers, optimize supply chain leads, and showcase global logistics capabilities.",
	},
	{
		id: 5,
		title: "Education & Training",
		slug: "education-training",
		icon: IconShapes,
		bg: MEDIA.services.bg.marketing,
		description:
			"Boost student enrollments for courses, schools, and training centers with targeted campaigns and digital branding.",
	},
	{
		id: 6,
		title: "SaaS & Technology",
		slug: "startups-saas",
		icon: IconDesktopPoint,
		bg: MEDIA.bg.grad3,
		description:
			"Scale software user acquisition, reduce churn, and drive product-led growth through full-funnel digital marketing.",
	},
	{
		id: 7,
		title: "Ecommerce",
		slug: "retail-ecommerce",
		icon: IconPointer,
		bg: MEDIA.services.bg.printing,
		description:
			"Maximize online sales, lower acquisition costs, and build customer loyalty with high-converting ads and email marketing.",
	},
	{
		id: 8,
		title: "Hospitality",
		slug: "food-restaurants",
		icon: IconStarBox,
		bg: MEDIA.services.bg.motion,
		description:
			"Drive direct restaurant and hotel bookings with visual storytelling, social media, and local discovery campaigns.",
	},
	{
		id: 9,
		title: "B2B & Corporate Services",
		slug: "finance-accounting",
		icon: IconTarget,
		bg: MEDIA.services.bg.fullStack,
		description:
			"Attract enterprise accounts and high-quality leads with LinkedIn campaigns, content authority, and CRM systems.",
	},
	{
		id: 10,
		title: "Luxury Brands",
		slug: "beauty-wellness",
		icon: IconPaint,
		bg: MEDIA.bg.grad2,
		description:
			"Preserve brand exclusivity while attracting high-value customers through premium design, creative branding, and targeted ads.",
	},
	{
		id: 11,
		title: "Startups & SMEs",
		slug: "startups-saas",
		icon: IconSparkle,
		bg: MEDIA.bg.grad1,
		description:
			"Launch quickly and scale efficiently with affordable digital marketing packages, SEO, and sales automations.",
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
									"relative flex aspect-square items-center justify-center overflow-hidden rounded-xl"
								)}
							>
								<Image
									alt={`${industry.title} industry visual by Ziron pro`}
									className="object-cover transition-transform duration-500 ease-out group-hover:scale-125"
									fill
									sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
									src={industry.bg}
								/>
								<Noise />
								<industry.icon className="relative z-10 size-16 text-card/90" />
							</div>
							<h3 className="mt-4 mb-2 line-clamp-1 font-medium text-xl">
								{industry.title}
							</h3>
							<p className="line-clamp-2 text-muted-foreground text-sm">
								{industry.description}
							</p>
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
