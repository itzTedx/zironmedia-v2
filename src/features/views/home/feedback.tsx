"use client";

import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";

import { Noise } from "@/components/shared/noise";
import { Card, CardContent } from "@/components/ui/card";
import { MotionCarousel } from "@/components/ui/custom-carousel";

export const Feedback = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 6;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<section className="dashed dashed-t relative py-6 md:py-10">
			<MotionCarousel options={OPTIONS} slides={SLIDES}>
				<div className="p-2 md:p-4">
					<Card className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
						<CardContent>
							<div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface md:aspect-7/4">
								<Noise className="opacity-20" />
								<Image
									alt="Maxline global feedback about ziron media"
									className="absolute top-14 left-1/2 z-20 -translate-x-[15%] rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[12%] group-hover/card:rotate-3 group-hover/card:scale-115"
									height={200}
									src="/images/feedback/maxline-1.webp"
									width={170}
								/>
								<Image
									alt="Maxline global feedback about ziron media"
									className="absolute top-12 left-1/2 z-10 -translate-x-[85%] -rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[88%] group-hover/card:-translate-y-2 group-hover/card:-rotate-3 group-hover/card:scale-115"
									height={200}
									src="/images/feedback/maxline-2.webp"
									width={170}
								/>
								<Image
									alt="Background sky blue gradient"
									className="object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
									fill
									src="/images/gradient.jpg"
								/>
							</div>
							<div className="space-y-3 p-2 md:p-2.5">
								<div className="max-w-sm space-y-1 rounded-2xl rounded-bl-none bg-surface p-2.5 md:space-y-2 md:p-3">
									<p className="text-xs leading-snug md:text-sm">
										Ziron Media has completely transformed our social media
										presence! Their striking posters and engaging motion reels
										have noticeably boosted our reach and engagement.
									</p>
									<span className="text-muted text-xs">Arjun</span>
								</div>
								<div className="flex items-end justify-end">
									<div className="max-w-sm space-y-1 rounded-2xl rounded-br-none bg-surface p-2.5 text-right transition-colors duration-500 group-hover/card:bg-primary group-hover/card:text-white md:space-y-2 md:p-3">
										<p className="text-xs leading-snug md:text-sm">
											We’ll love to work with you
										</p>
										<span className="text-muted text-xs">Ziron Media</span>
									</div>
								</div>
							</div>
							<div className="-m-1 mt-0 flex items-center gap-2 bg-background p-2 md:p-3">
								<div>
									<div className="size-10 rounded-full bg-muted md:size-12" />
								</div>
								<div>
									<p className="font-medium text-muted-foreground text-xs tracking-tight md:text-sm">
										Arjun Unnikrishnan
									</p>
									<span className="text-[10px] text-muted tracking-tight md:text-xs">
										It Support in Maxline Global
									</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</MotionCarousel>

			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-white" />
		</section>
	);
};
