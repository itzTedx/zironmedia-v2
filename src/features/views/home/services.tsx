import Image from "next/image";

import {
	PreviewLinkCard,
	PreviewLinkCardImage,
	PreviewLinkCardPopup,
	PreviewLinkCardPortal,
	PreviewLinkCardPositioner,
	PreviewLinkCardTrigger,
} from "@/components/primitives/preview-link-card";
import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { SERVICES } from "@/data/constant";

export const Services = () => {
	return (
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
										<PreviewLinkCard
											followCursor="x"
											href="https://animate-ui.com/docs"
											src="/images/services/branding.jpg"
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
	);
};
