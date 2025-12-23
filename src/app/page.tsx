import Image from "next/image";

import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Frame } from "@/components/ui/frame";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconCaretRight } from "@/assets/icons/caret";
import { IconChevronRight } from "@/assets/icons/chevrons";
import { LogoMono, Wordmark } from "@/assets/logo";

import { SERVICES } from "@/data/constant";
import { Hero } from "@/features/views/home/hero";

export default function Home() {
	return (
		<main>
			<Hero />

			<section className="dashed dashed-t relative py-10">
				<Carousel
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
											<div className="max-w-sm space-y-2 rounded-2xl rounded-bl-none bg-surface p-3">
												<p>
													Ziron Media has completely transformed our social
													media presence! Their striking posters and engaging
													motion reels have noticeably boosted our reach and
													engagement.
												</p>
												<span className="text-muted text-xs">Arjun</span>
											</div>
											<div className="flex items-end justify-end">
												<div className="max-w-sm space-y-2 rounded-2xl rounded-br-none bg-surface p-3 text-right transition-colors group-hover/card:bg-primary group-hover/card:text-white">
													<p>We’ll love to work with you</p>
													<span className="text-muted text-xs">
														Ziron Media
													</span>
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
				</Carousel>

				<div className="absolute inset-0 bg-linear-0 from-white" />
			</section>
			<section className="dashed dashed-y">
				<header className="dashed dashed-t-0 mx-auto max-w-7xl p-14 text-center">
					<h2 className="font-display font-semibold text-6xl tracking-tight">
						Our Achievement
					</h2>
					<p className="text-">
						Curious about what we've accomplished? Let our track record speak
						for itself.
					</p>
				</header>
				<div className="dashed dashed-t-0 mx-auto grid max-w-7xl grid-cols-3 gap-4 p-14">
					{Array.from({ length: 3 }).map((_, i) => (
						<Card key={`card-${i + 1}`}>
							<CardContent>
								<div className="aspect-4/3 bg-linear-0 from-gray-300 to-gray-100">
									Business Card
								</div>
								<CardHeader>
									<CardTitle>50+ Brands Served</CardTitle>
									<CardDescription>
										Helping businesses across various industries achieve their
										goals
									</CardDescription>
								</CardHeader>
							</CardContent>
						</Card>
					))}
				</div>
				<div className="dashed dashed-t-0 mx-auto max-w-7xl p-9" />
			</section>

			<section className="relative">
				<header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-16">
					<h2 className="shrink-0 font-display font-semibold text-8xl uppercase tracking-tight">
						With our services
					</h2>
					<p className="max-w-2xs text-balance text-right text-muted-foreground">
						We help you achieve more at every stage of business growth.
					</p>
				</header>

				<ul className="relative z-10">
					{SERVICES.map((service) => (
						<li
							className="group border-t py-10 transition-all hover:bg-card hover:pb-14"
							key={service.id}
						>
							<div className="mx-auto grid max-w-7xl grid-cols-3 gap-6">
								<div className="relative h-fit overflow-hidden">
									<div className="transition-transform group-hover:-translate-y-full">
										<span className="text-2xl text-muted">
											0{service.id}
											<span className="font-bold text-primary">.</span>
										</span>
										<h3 className="font-medium text-3xl">{service.title}</h3>
										<p className="opacity-0">{service.description}</p>
									</div>
									<div className="absolute top-0 translate-y-[150%] transition-transform group-hover:translate-y-0">
										<h3 className="font-medium text-3xl">{service.title}</h3>
										<p>{service.description}</p>
									</div>
								</div>

								<ul className="space-y-3">
									{service.lists.map((list) => (
										<li className="text-lg" key={list.title}>
											{list.title}
										</li>
									))}
								</ul>

								<div className="relative aspect-5/3 overflow-hidden rounded-xl transition-transform group-hover:scale-110">
									<Noise />
									<Image
										alt=""
										className="object-cover"
										fill
										src={service.image}
									/>
								</div>
							</div>
						</li>
					))}
				</ul>

				<div className="flex items-center justify-center py-12">
					<Button className="text-muted-foreground" variant="secondary">
						Build your vision with us <IconArrowRightTag />
					</Button>
				</div>
				<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
				<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
			</section>

			<section className="dashed dashed-t">
				<div className="dashed dashed-x mx-auto flex max-w-7xl items-center justify-center p-20">
					<div className="relative max-w-5xl overflow-hidden rounded-3xl shadow-lg">
						<Noise />
						<Image alt="" height={576} src="/images/reel.png" width={1024} />
						<div className="absolute top-0 z-10 flex size-full flex-col justify-between p-12">
							<LogoMono className="text-white" />

							<div className="max-w-sm space-y-8">
								<h3 className="text-balance font-medium text-3xl text-background">
									Why every modern Business needs a strong digital presence?
								</h3>
								<div className="flex items-center gap-3">
									<Button
										className="border-white/60 text-white backdrop-blur-lg"
										variant="outline"
									>
										Watch video <IconCaretRight />
									</Button>
									<Button className="text-white" variant="ghost">
										<div className="flex size-6 items-center justify-center rounded-md bg-white/20">
											<IconChevronRight />
										</div>
										Read case study
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="dashed dashed-b-0 mx-auto max-w-7xl">
				<header className="dashed dashed-b space-y-3 p-14 text-center">
					<h2 className="font-display font-semibold text-6xl tracking-tight">
						Why choose us
					</h2>
					<p className="mx-auto max-w-md text-balance">
						Check out what Ziron Media offers vs employees and other agencies.
						It’s quite a lot!
					</p>
				</header>
				<div className="mx-auto max-w-6xl py-14">
					<div className="grid grid-cols-4 gap-4 pb-3">
						<div />
						<div>
							<Wordmark />
						</div>
						<p>In-House Team</p>
						<p>Other Agencies</p>
					</div>

					<Frame>
						<div className="rounded-3xl bg-background shadow-sm">Cost</div>
					</Frame>
				</div>
				<div className="dashed dashed-t mx-auto max-w-7xl p-9" />
			</section>
			<section className="dashed dashed-y relative py-14">
				<header className="mx-auto mb-14 flex max-w-7xl items-center justify-between">
					<h2 className="font-display font-semibold text-5xl tracking-tight">
						Learn and Get Inspired
					</h2>
					<Button className="w-40 justify-between bg-foreground shadow-button-neutral">
						More articles <IconArrowRightTag className="size-5" />
					</Button>
				</header>

				<div className="mx-auto grid max-w-7xl grid-cols-3 gap-4">
					<div>
						<div className="relative aspect-5/4 overflow-hidden rounded-2xl">
							<Image
								alt=""
								className="object-cover"
								fill
								src="/images/blogs/blog-1.jpeg"
							/>
						</div>
						<h3 className="p-3 font-medium text-2xl">
							How a Strong Digital Presence Helps Businesses Grow in 2025
						</h3>
					</div>
					<div>
						<div className="relative aspect-4/5 overflow-hidden rounded-2xl">
							<Image
								alt=""
								className="object-cover"
								fill
								src="/images/blogs/blog-2.jpg"
							/>
						</div>
						<h3 className="p-3 font-medium text-2xl">
							How Ziron Media Helps Brands Scale Digitally
						</h3>
					</div>
					<div>
						<div className="relative aspect-5/4 overflow-hidden rounded-2xl">
							<Image
								alt=""
								className="object-cover"
								fill
								src="/images/blogs/blog-3.jpeg"
							/>
						</div>
						<h3 className="p-3 font-medium text-2xl">
							How to Boost your Business with Social media?
						</h3>
					</div>
				</div>

				<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
				<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
			</section>
		</main>
	);
}
