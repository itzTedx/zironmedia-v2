import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconPlay } from "@/assets/icons/play";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { cn } from "@/lib/utils";

import { IndustriesCarousel } from "./components/industries-carousel";
import { StarsBackground } from "./components/stars-background";

export const Services = () => {
	const services = [
		{
			href: "/services/full-stack/marketing-and-growth-strategy",
			linkClass:
				"overflow-hidden rounded-2xl bg-orange-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-orange-100",
			icon: IconTarget,
			iconColor: "text-orange-500",
			title: "Branding, Creative & Video Production",
			desc: "Logo design, UI/UX, brand identity, video marketing, and visual storytelling that elevate brand perception.",
			img: {
				src: "/images/bento/branding.webp",
				alt: "Branding, Creative & Video Production service showcase by Ziron pro",
			},
		},
		{
			href: "/services/websites/seo",
			linkClass:
				"overflow-hidden rounded-2xl bg-green-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-green-100",
			icon: IconDesktopPoint,
			iconColor: "text-green-500",
			title: "Search Engine Optimization (SEO)",
			desc: "Technical SEO, local SEO, content optimization, and authority building to dominate Google rankings.",
			img: {
				src: "/images/bento/web-dev-design.webp",
				alt: "SEO service showcase by Ziron pro",
			},
		},
		{
			href: "/services/marketing/paid-ads",
			linkClass:
				"overflow-hidden rounded-2xl bg-fuchsia-50 shadow-md transition-[box-shadow_scale] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-fuchsia-100",
			icon: IconSpeaker,
			iconColor: "text-fuchsia-500",
			title: "Paid Media & Performance Marketing",
			desc: "ROI-focused Google Ads, Meta Ads, LinkedIn Ads, and TikTok campaigns designed for predictable lead flow.",
			img: {
				src: "/images/bento/social-media-creatives.webp",
				alt: "Paid Media performance creatives by Ziron pro",
			},
		},
		{
			href: "/services/full-stack/social-media-management",
			linkClass:
				"overflow-hidden rounded-2xl bg-cyan-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-cyan-100",
			icon: IconPlay,
			iconColor: "text-cyan-500",
			title: "Social Media Marketing",
			desc: "Strategic content, reels, paid promotions, and community management to build brand authority.",
			img: {
				src: "/images/bento/paid-ads.webp",
				alt: "Social Media Marketing showcase by Ziron pro",
			},
		},
		{
			href: "/services/websites/website-development",
			linkClass:
				"overflow-hidden rounded-2xl bg-blue-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-blue-100",
			icon: IconDesktopPoint,
			iconColor: "text-blue-500",
			title: "Website Design & Development",
			desc: "High-converting, mobile-first, SEO-optimized websites built for performance and user experience.",
			img: {
				src: "/images/bento/web-dev-design.webp",
				alt: "Web design and development service showcase by Ziron pro",
			},
		},
		// {
		// 	href: "/services/full-stack",
		// 	linkClass:
		// 		"overflow-hidden rounded-2xl bg-purple-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
		// 	iconboxColor: "bg-purple-100",
		// 	icon: IconPointer,
		// 	iconColor: "text-purple-500",
		// 	title: "CRM Integration & Sales Automation Abu Dhabi, Dubai",
		// 	desc: "We implement smart CRM systems, lead tracking, pipeline management, email automation, and WhatsApp workflows that convert enquiries into customers automatically.",
		// 	img: {
		// 		src: "/images/bento/conversion.webp",
		// 		alt: "CRM Integration service showcase by Ziron pro",
		// 	},
		// },
		// {
		// 	href: "/services/printing",
		// 	linkClass:
		// 		"overflow-hidden rounded-2xl bg-rose-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
		// 	iconboxColor: "bg-rose-100",
		// 	icon: IconNfc,
		// 	iconColor: "text-rose-500",
		// 	title: "NFC Smart Business Cards Abu Dhabi, Dubai",
		// 	desc: "ZironPro provides NFC digital business cards that allow instant contact sharing, lead capture, and CRM integration, perfect for sales teams, events, exhibitions, and corporate networking in the UAE.",
		// 	img: {
		// 		src: "/images/bento/branding.webp",
		// 		alt: "NFC Smart Business Cards showcase by Ziron pro",
		// 	},
		// },
		{
			href: "/services/full-stack/campaigns",
			linkClass:
				"overflow-hidden rounded-2xl bg-indigo-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
			iconboxColor: "bg-indigo-100",
			icon: IconTarget,
			iconColor: "text-indigo-500",
			title: "Lead Generation & Funnel Optimization",
			desc: "Conversion-driven funnels that attract, nurture, and convert high-quality leads.",
			img: {
				src: "/images/bento/conversion.webp",
				alt: "Lead Generation & Funnel service showcase by Ziron pro",
			},
		},
		// {
		// 	href: "/services/branding",
		// 	linkClass:
		// 		"overflow-hidden rounded-2xl bg-amber-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg",
		// 	iconboxColor: "bg-amber-100",
		// 	icon: IconPaint,
		// 	iconColor: "text-amber-500",
		// 	title: "Branding, Creative & Video Production",
		// 	desc: "Logo design, UI/UX, brand identity, video marketing, and visual storytelling that elevate brand perception.",
		// 	img: {
		// 		src: "/images/bento/branding.webp",
		// 		alt: "Branding and creative service showcase by Ziron pro",
		// 	},
		// },
	] as const;

	return (
		<section className="relative">
			<Header
				description="Best Digital Marketing & CRM Company in Abu Dhabi, Dubai. From strategy to scale we engineer integrated growth ecosystems that generate consistent revenue."
				title="What We Do"
			>
				<div className="flex items-center gap-4 sm:justify-center">
					<Button
						render={
							<Link
								data-label="Home - Work with us"
								data-location="home_services"
								data-track="cta_click"
								href="/contact"
							/>
						}
						variant="secondary"
					>
						Work with us <IconArrowRightTag />
					</Button>
					<Button
						render={
							<Link
								data-label="Home - Explore our services"
								data-location="home_services"
								data-track="cta_click"
								href="/services"
							/>
						}
						variant="ghost"
					>
						Explore our services
					</Button>
				</div>
			</Header>

			<div className="dashed-b-0 dashed container grid max-w-7xl gap-4 py-12 md:grid-cols-3 md:py-16 lg:py-20">
				{services.map((s) => {
					const Icon = s.icon;
					return (
						<Link className={s.linkClass} href={s.href} key={s.href}>
							<div className="space-y-3 p-5 sm:p-7 md:p-9">
								<div className="flex items-center gap-3">
									<div
										className={cn(
											s.iconboxColor,
											"squircle flex size-10 shrink-0 items-center justify-center rounded-2xl"
										)}
									>
										<Icon className={cn(s.iconColor, "size-6")} />
									</div>
									<h3 className="font-medium text-base md:text-xl">
										{s.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm sm:text-base">
									{s.desc}
								</p>
							</div>
							<Image alt={s.img.alt} height={720} src={s.img.src} width={800} />
						</Link>
					);
				})}
			</div>

			<div className="dashed pb-12 md:pb-16 lg:pb-20">
				<Header
					description="From real estate to startups, we deliver performance-driven growth solutions tailored to your industry dynamics across Abu Dhabi, Dubai, and the UAE."
					title="Industries We Serve"
				/>

				<div className="container max-w-7xl px-6 md:px-0">
					<IndustriesCarousel />
				</div>
			</div>

			<div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,var(--color-brand-950)_0%,#000_100%)]">
				<div className="dashed dashed-b-0 container relative z-10 flex max-w-7xl flex-col items-center justify-center gap-6 py-12 md:flex-row">
					<h4 className="text-center font-medium text-3xl text-muted">
						Ready to Grow Your Business Online?
					</h4>
					<Button render={<Link className="gap-4" href="/contact" />} size="xl">
						Book Consultation Today <IconArrowRightTag />
					</Button>
				</div>
				<StarsBackground
					className={cn("absolute inset-0 flex items-center justify-center")}
				/>
			</div>
			<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-linear-0 from-white" />
		</section>
	);
};
