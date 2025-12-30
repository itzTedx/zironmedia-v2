import { Route } from "next";
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

import { SERVICES } from "@/features/services/constant";

export const ServiceList = ({
	service,
}: {
	service: (typeof SERVICES)[number];
}) => {
	return (
		<div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
			<Link
				className="absolute inset-0 z-10"
				href={`/services/${service.slug}` as Route}
				title={service.title}
			/>
			<div className="relative h-fit overflow-hidden">
				<div className="transition-transform duration-300 ease-out md:group-hover:-translate-y-full">
					<span className="text-2xl text-muted">
						0{service.id}
						<span className="font-bold text-primary">.</span>
					</span>
					<h3 className="font-medium text-2xl md:text-3xl">{service.title}</h3>
					<p className="hidden opacity-0 md:block">{service.description}</p>
				</div>
				<div className="absolute top-0 hidden translate-y-[150%] transition-transform duration-300 ease-out md:block md:group-hover:translate-y-0">
					<h3 className="font-medium text-3xl">{service.title}</h3>
					<p>{service.description}</p>
				</div>
				<p className="mt-2 text-muted-foreground md:hidden">
					{service.description}
				</p>
			</div>

			<ul className="relative isolate z-10 h-fit space-y-3">
				{service.lists.map((list) => (
					<li className="text-lg" key={list.title}>
						<PreviewLinkCard
							followCursor="x"
							href={`/services/${service.slug}/${list.slug}` as Route}
							src={list.image}
						>
							<PreviewLinkCardTrigger
								className="transition-colors duration-300 ease-out hover:text-brand-secondary"
								delay={100}
							>
								{list.title}
							</PreviewLinkCardTrigger>
							<PreviewLinkCardPortal>
								<PreviewLinkCardPositioner side="inline-end">
									<PreviewLinkCardPopup
										className="overflow-hidden rounded-lg"
										href={`/services/${service.slug}/${list.slug}` as Route}
									>
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
				<Image alt="" className="object-cover" fill src={service.image} />
			</div>
		</div>
	);
};

export const ServicesLists = () => {
	return (
		<ul className="relative z-10">
			{SERVICES.map((service) => (
				<li
					className="group relative border-t px-6 py-10 transition-all hover:bg-card hover:pb-14 md:px-0"
					key={service.id}
				>
					<ServiceList service={service} />
				</li>
			))}
		</ul>
	);
};
