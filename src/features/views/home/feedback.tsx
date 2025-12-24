import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";

import { Noise } from "@/components/shared/noise";
import { Card, CardContent } from "@/components/ui/card";
import { MotionCarousel } from "@/components/ui/custom-carousel";
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from "@/components/ui/carousel";

export const Feedback = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 6;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<section className="dashed dashed-t relative py-10">
			{/* <Carousel
				className="relative z-10"
				opts={{
					align: "center",
					loop: true,
				}}
			>
				<CarouselContent>
					{Array.from({ length: 6 }).map((_, i) => (
						<CarouselItem
							className="md:basis-1/2 lg:basis-1/3"
							key={`carousel-${i + 1}`}
						>
							<div className="p-2">
								<Card>
									<CardContent className="space-y-3">
										<div className="relative aspect-7/4 overflow-hidden rounded-2xl bg-surface">
											<Noise className="opacity-20" />
											<Image
												alt="Maxline global feedback about ziron media"
												className="absolute top-14 left-1/2 z-20 -translate-x-[15%] rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[12%] group-hover/card:rotate-3 group-hover/card:scale-110"
												height={240}
												src="/images/feedback/maxline-1.webp"
												width={200}
											/>
											<Image
												alt="Maxline global feedback about ziron media"
												className="absolute top-12 left-1/2 z-10 -translate-x-[85%] -rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[88%] group-hover/card:-rotate-3 group-hover/card:scale-110"
												height={240}
												src="/images/feedback/maxline-2.webp"
												width={200}
											/>
											<Image
												alt="Background sky blue gradient"
												className="object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
												fill
												src="/images/gradient.jpg"
											/>
										</div>
										<div className="max-w-sm space-y-2 rounded-2xl rounded-bl-none bg-surface p-3">
											<p>
												Ziron Media has completely transformed our social media
												presence! Their striking posters and engaging motion
												reels have noticeably boosted our reach and engagement.
											</p>
											<span className="text-muted text-xs">Arjun</span>
										</div>
										<div className="flex items-end justify-end">
											<div className="max-w-sm space-y-2 rounded-2xl rounded-br-none bg-surface p-3 text-right transition-colors duration-500 group-hover/card:bg-primary group-hover/card:text-white">
												<p>We’ll love to work with you</p>
												<span className="text-muted text-xs">Ziron Media</span>
											</div>
										</div>
									</CardContent>
									<CardFooter>
										<div>
											<p className="font-medium tracking-tight">
												Arjun Unnikrishnan
											</p>
											<span className="text-muted text-xs">
												It Support in Maxline Global
											</span>
										</div>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel> */}

			<MotionCarousel options={OPTIONS} slides={SLIDES}>
				<div className="p-4">
					<Card className="relative z-50">
						<CardContent className="space-y-3">
							<div className="relative aspect-7/4 overflow-hidden rounded-2xl bg-surface">
								<Noise className="opacity-20" />
								<Image
									alt="Maxline global feedback about ziron media"
									className="absolute top-14 left-1/2 z-20 -translate-x-[15%] rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[12%] group-hover/card:rotate-3 group-hover/card:scale-110"
									height={240}
									src="/images/feedback/maxline-1.webp"
									width={200}
								/>
								<Image
									alt="Maxline global feedback about ziron media"
									className="absolute top-12 left-1/2 z-10 -translate-x-[85%] -rotate-9 rounded-xl transition-[rotate,scale,translate] duration-500 group-hover/card:-translate-x-[88%] group-hover/card:-rotate-3 group-hover/card:scale-110"
									height={240}
									src="/images/feedback/maxline-2.webp"
									width={200}
								/>
								<Image
									alt="Background sky blue gradient"
									className="object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
									fill
									src="/images/gradient.jpg"
								/>
							</div>
							<div className="max-w-sm space-y-2 rounded-2xl rounded-bl-none bg-surface p-3">
								<p>
									Ziron Media has completely transformed our social media
									presence! Their striking posters and engaging motion reels
									have noticeably boosted our reach and engagement.
								</p>
								<span className="text-muted text-xs">Arjun</span>
							</div>
							<div className="flex items-end justify-end">
								<div className="max-w-sm space-y-2 rounded-2xl rounded-br-none bg-surface p-3 text-right transition-colors duration-500 group-hover/card:bg-primary group-hover/card:text-white">
									<p>We’ll love to work with you</p>
									<span className="text-muted text-xs">Ziron Media</span>
								</div>
							</div>
						</CardContent>
						{/* <CardFooter>
							<div>
								<p className="font-medium tracking-tight">Arjun Unnikrishnan</p>
								<span className="text-muted text-xs">
									It Support in Maxline Global
								</span>
							</div>
						</CardFooter> */}
					</Card>
				</div>
			</MotionCarousel>

			<div className="pointer-events-none absolute inset-0 bg-linear-0 from-white" />
		</section>
	);
};
