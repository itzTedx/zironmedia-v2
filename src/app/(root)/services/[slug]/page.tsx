import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

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
import { siteConfig } from "@/data/site-config";
import { findServiceBySlug } from "@/features/services/actions/query";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return SERVICES.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const service = findServiceBySlug(slug);

	if (!service) {
		return {
			title: "Service Not Found",
		};
	}

	const title = `${service.title} | ${siteConfig.name}`;
	const description = service.description;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [service.image],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [service.image],
		},
	};
}

export default async function ServiceCategoryPage({ params }: PageProps) {
	const { slug } = await params;
	const service = findServiceBySlug(slug);

	if (!service) {
		notFound();
	}

	return (
		<main>
			<section className="dashed dashed-b relative">
				<header className="dashed dashed-x relative z-10 mx-auto max-w-7xl py-12 md:py-16">
					<div className="container grid grid-cols-2 gap-6">
						<div>
							<Badge>
								<div className="size-1.5 rounded-full bg-brand-secondary" />
								Service Category
							</Badge>
							<h1 className="max-w-5xl font-bold font-display text-4xl text-primary uppercase md:text-6xl lg:text-8xl">
								{service.title}
							</h1>
							<p className="max-w-5xl text-balance text-2xl text-muted-foreground leading-relaxed tracking-tight">
								{service.description}
							</p>
						</div>
						<div className="relative aspect-5/3 overflow-hidden rounded-xl">
							<Noise />
							<Image
								alt={service.title}
								className="object-cover"
								fill
								src={service.image}
							/>
						</div>
					</div>
				</header>
			</section>

			<section className="bg-card py-24">
				<div className="container">
					<div className="mx-auto max-w-4xl space-y-12">
						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="font-medium text-3xl md:text-4xl">
									What we offer
								</h2>
								<p className="text-lg text-muted-foreground">
									Explore our comprehensive range of{" "}
									{service.title.toLowerCase()} solutions designed to elevate
									your brand and drive results.
								</p>
							</div>

							<ul className="space-y-4">
								{service.lists.map((list, index) => (
									<li
										className="group border-border border-b pb-4 transition-colors last:border-0 hover:border-primary"
										key={list.title}
									>
										<PreviewLinkCard
											followCursor="x"
											href={list.href}
											src={service.image}
										>
											<div className="flex items-center justify-between gap-4">
												<div className="flex items-center gap-4">
													<span className="font-bold text-2xl text-muted-foreground">
														{String(index + 1).padStart(2, "0")}
													</span>
													<PreviewLinkCardTrigger delay={100}>
														<h3 className="font-medium text-xl transition-colors group-hover:text-primary md:text-2xl">
															{list.title}
														</h3>
													</PreviewLinkCardTrigger>
												</div>
												<IconArrowRightTag className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
											</div>
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
						</div>
					</div>
				</div>
			</section>

			<section className="dashed dashed-t relative bg-background py-24">
				<div className="container">
					<div className="mx-auto max-w-2xl space-y-8 text-center">
						<h2 className="font-medium text-3xl md:text-4xl">
							Ready to get started?
						</h2>
						<p className="text-lg text-muted-foreground">
							Let's discuss how our {service.title.toLowerCase()} services can
							help transform your brand and drive meaningful results.
						</p>
						<Button className="text-muted-foreground" variant="secondary">
							Get in touch <IconArrowRightTag />
						</Button>
					</div>
				</div>
				<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
				<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
			</section>
		</main>
	);
}
