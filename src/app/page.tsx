import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { Hero } from "@/features/views/home/hero";

export default function Home() {
	return (
		<main>
			<Hero />

			<section className="dashed dashed-t py-10">
				<Carousel
					opts={{
						align: "center",
					}}
				>
					<CarouselContent>
						{Array.from({ length: 6 }).map((_, i) => (
							<CarouselItem
								className="md:basis-1/2 lg:basis-1/3"
								key={`carousel-${i + 1}`}
							>
								<div className="p-1">
									<Card>
										<div className="relative aspect-7/4 overflow-hidden rounded-2xl bg-surface">
											<Image
												alt="Maxline global feedback about ziron media"
												className="absolute top-14 left-1/2 z-10 -translate-x-[15%] rotate-9 rounded-xl"
												height={270}
												src="/images/feedback/maxline-1.webp"
												width={220}
											/>
											<Image
												alt="Maxline global feedback about ziron media"
												className="absolute top-14 left-1/2 -translate-x-[85%] -rotate-9 rounded-xl"
												height={270}
												src="/images/feedback/maxline-2.webp"
												width={220}
											/>
										</div>
										<CardContent className="space-y-3">
											<div className="max-w-sm space-y-2 rounded-2xl rounded-bl-none bg-background p-4">
												<p>
													Ziron Media has completely transformed our social
													media presence! Their striking posters and engaging
													motion reels have noticeably boosted our reach and
													engagement.
												</p>
												<span className="text-muted text-xs">Arjun</span>
											</div>
											<div className="flex items-end justify-end">
												<div className="max-w-sm space-y-2 rounded-2xl rounded-br-none bg-background p-4 text-right transition-colors group-hover/card:bg-primary group-hover/card:text-white">
													<p>We’ll love to work with you</p>
													<span className="text-muted text-xs">
														Ziron Media
													</span>
												</div>
											</div>
										</CardContent>
										<CardFooter>
											<div>
												<p>Arjun Unnikrishnan</p>
											</div>
										</CardFooter>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
		</main>
	);
}
