"use client";

import * as React from "react";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

import { IndustryHubItem } from "../views/industry-hub-page-view";
import { IndustryIcon } from "./industry-icon";

export const IndustriesHeroCarousel = ({
	industries,
	activeIndex,
}: {
	industries: IndustryHubItem[];
	activeIndex?: number;
}) => {
	const [emblaApi, setEmblaApi] = React.useState<CarouselApi | undefined>(
		undefined
	);

	React.useEffect(() => {
		if (typeof activeIndex !== "number" || !emblaApi) return;
		emblaApi.scrollTo(activeIndex);
	}, [activeIndex, emblaApi]);

	return (
		<section className="dashed dashed-t relative pb-8">
			<Carousel
				className="relative z-10 w-full"
				opts={{
					align: "center",
					loop: true,
				}}
				setApi={setEmblaApi}
			>
				<CarouselContent>
					{industries.map((item) => (
						<CarouselItem
							className="py-6 md:py-9 lg:basis-auto"
							key={item.slug}
						>
							<div
								className={cn(
									activeIndex !== undefined &&
										activeIndex === industries.indexOf(item)
										? "scale-105"
										: "scale-95",
									"relative flex aspect-4/3 w-124 items-end justify-center overflow-hidden rounded-xl bg-red-500 p-6 transition-[translate_box-shadow] ease-out hover:-translate-y-4 hover:shadow-lg"
								)}
							>
								<div className="relative z-20 flex items-center gap-2 p-3 text-card md:p-4">
									<IndustryIcon
										className="size-7 text-primary"
										name={item.icon}
									/>
									<h2 className="font-medium tracking-wide sm:text-xl">
										{item.title}
									</h2>
								</div>
								{/* <Image
									alt={`${item.title} featured work by Ziron pro`}
									className="object-cover"
									fill
									loading="eager"
									sizes="(max-width: 1024px) 50vw, 17vw"
									src={item.image}
								/> */}
								{/* <div className="absolute inset-x-0 top-0 z-10 h-1/2 bg-linear-to-b from-white" /> */}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-0 from-white" />
		</section>
	);
};
