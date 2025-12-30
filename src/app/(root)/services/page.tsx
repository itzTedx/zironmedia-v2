import Image from "next/image";
import Link from "next/link";

import {
	PreviewLinkCard,
	PreviewLinkCardImage,
	PreviewLinkCardPopup,
	PreviewLinkCardPortal,
	PreviewLinkCardPositioner,
	PreviewLinkCardTrigger,
} from "@/components/primitives/preview-link-card";
import { Noise } from "@/components/shared/noise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { SERVICES } from "@/data/constant";

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
}

export default function ServicesPage() {
	return (
		<main>
			<section className="dashed dashed-b relative">
				<header className="dashed dashed-x relative z-10 mx-auto max-w-7xl py-12 md:py-16">
					<div className="container space-y-4">
						<h1 className="max-w-5xl font-bold font-display text-4xl text-primary uppercase md:text-6xl lg:text-8xl">
							Delivering results is really all that matters.
						</h1>
						<p className="max-w-5xl text-balance text-2xl text-muted-foreground leading-relaxed tracking-tight *:text-foreground">
							100% of what we do is focused on turning your{" "}
							<span>brand into a revenue engine</span> through{" "}
							<span>integrated, performance-driven strategy.</span>
						</p>
					</div>
				</header>
			</section>
			<section className="bg-card py-24">
				<div className="container grid grid-cols-12 gap-6">
					<div className="col-span-5">
						<Badge>
							<div className="size-1.5 rounded-full bg-brand-secondary" /> What
							we do
						</Badge>
						<h2 className="font-medium text-5xl leading-snug tracking-tight">
							We turn first impressions into lasting engagement
						</h2>
					</div>
					<div className="col-span-7 space-y-3">
						<h3>
							Your brand isn’t experienced in pieces — it’s experienced as a
							whole.
						</h3>
						<div className="grid grid-cols-2 gap-6">
							<p>
								Our process blends strategy, user psychology, creative
								execution, technology, and production to create experiences that
								feel clear, consistent, and intentional - online and offline.
							</p>
							<p>
								Every service we offer is designed to work together, ensuring
								clarity, consistency, and performance across digital and
								physical touchpoints.
							</p>
							<p>
								We start with goals, structure, and behaviour - then design
								everything to support them.
							</p>
							<p>
								Because when every element works together, your brand doesn’t
								just look better - it performs better.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="dashed dashed-t relative">
				<ul className="relative z-10">
					{SERVICES.map((service) => (
						<li
							className="group border-t px-6 py-10 transition-all hover:bg-card hover:pb-14 md:px-0"
							key={service.id}
						>
							<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
								<div className="relative h-fit overflow-hidden">
									<div className="transition-transform md:group-hover:-translate-y-full">
										<span className="text-2xl text-muted">
											0{service.id}
											<span className="font-bold text-primary">.</span>
										</span>
										<Link href={`/services/${slugify(service.title)}`}>
											<h2 className="font-medium text-2xl transition-colors hover:text-primary md:text-3xl">
												{service.title}
											</h2>
										</Link>
										<p className="hidden opacity-0 md:block">
											{service.description}
										</p>
									</div>
									<div className="absolute top-0 hidden translate-y-[150%] transition-transform md:block md:group-hover:translate-y-0">
										<Link href={`/services/${slugify(service.title)}`}>
											<h2 className="font-medium text-3xl transition-colors hover:text-primary">
												{service.title}
											</h2>
										</Link>
										<p>{service.description}</p>
									</div>
									<p className="mt-2 text-muted-foreground md:hidden">
										{service.description}
									</p>
								</div>

								<ul className="space-y-3">
									{service.lists.map((list) => (
										<li className="text-lg" key={list.title}>
											<PreviewLinkCard
												followCursor="x"
												href={list.href}
												src={service.image}
											>
												<PreviewLinkCardTrigger delay={100}>
													{list.title}
												</PreviewLinkCardTrigger>
												<PreviewLinkCardPortal>
													<PreviewLinkCardPositioner>
														<PreviewLinkCardPopup href={list.href}>
															<PreviewLinkCardImage alt="Preview link card content" />
														</PreviewLinkCardPopup>
													</PreviewLinkCardPositioner>
												</PreviewLinkCardPortal>
											</PreviewLinkCard>
										</li>
									))}
								</ul>

								<div className="relative aspect-5/3 overflow-hidden rounded-xl transition-transform group-hover:scale-110">
									<Noise />
									<Image
										alt={service.title}
										className="object-cover"
										fill
										src={service.image}
									/>
								</div>
							</div>
						</li>
					))}
				</ul>

				<div className="dashed dashed-t-0 flex items-center justify-center py-12">
					<Button className="text-muted-foreground" variant="secondary">
						Build your vision with us <IconArrowRightTag />
					</Button>
				</div>
				<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
				<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
			</section>
		</main>
	);
}
