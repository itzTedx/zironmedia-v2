import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/shared/header";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconNfc } from "@/assets/icons/nfc";
import { IconPaint } from "@/assets/icons/paint";
import { IconPlay } from "@/assets/icons/play";
import { IconPointer } from "@/assets/icons/pointer";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { cn } from "@/lib/utils";

import { IndustriesCarousel } from "./components/industries-carousel";
import { StarsBackground } from "./components/stars-background";

export const Services = () => {
	return (
		<section className="relative">
			{/* <header className="absolute left-1/2 z-10 w-full -translate-x-1/2 px-6 py-12 text-center md:px-0 md:py-20">
				<h2 className="shrink-0 font-bold font-display text-4xl text-primary tracking-tight md:text-6xl">
					With our services
				</h2>
				<p className="mx-auto mt-3 max-w-2xs text-balance text-muted-foreground md:text-xl">
					We help you achieve more at every stage of business growth.
				</p>
			</header> */}
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
				<Link
					className="overflow-hidden rounded-2xl bg-orange-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/full-stack/marketing-and-growth-strategy"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-orange-100">
								<IconTarget className="size-6 text-orange-500" />
							</div>
							<h3 className="font-medium text-xl">
								Digital Marketing Strategy
							</h3>
						</div>
						<p className="text-muted-foreground">
							Customized growth blueprints aligned with your goals, audience
							behavior, and competition in Abu Dhabi & Dubai markets.
						</p>
					</div>
					<Image
						alt="Digital Marketing Strategy service showcase by Ziron pro"
						height={720}
						src="/images/bento/branding.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-green-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/websites/seo"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-green-100">
								<IconDesktopPoint className="size-6 text-green-500" />
							</div>
							<h3 className="font-medium text-xl">
								Search Engine Optimization (SEO)
							</h3>
						</div>
						<p className="text-muted-foreground">
							Technical SEO, local SEO, content optimization, and authority
							building to dominate Google rankings.
						</p>
					</div>
					<Image
						alt="SEO service showcase by Ziron pro"
						height={720}
						src="/images/bento/web-dev-design.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-fuchsia-50 shadow-md transition-[box-shadow_scale] hover:scale-102 hover:shadow-lg"
					href="/services/marketing/paid-ads"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-fuchsia-100">
								<IconSpeaker className="size-6 text-fuchsia-500" />
							</div>
							<h3 className="font-medium text-xl">Paid Media & Performance</h3>
						</div>
						<p className="text-muted-foreground">
							ROI-focused Google Ads, Meta Ads, LinkedIn Ads, and TikTok
							campaigns designed for predictable lead flow.
						</p>
					</div>
					<Image
						alt="Paid Media performance creatives by Ziron pro"
						height={720}
						src="/images/bento/social-media-creatives.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-cyan-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/full-stack/social-media-management"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-cyan-100">
								<IconPlay className="size-6 text-cyan-500" />
							</div>
							<h3 className="font-medium text-xl">Social Media Marketing</h3>
						</div>
						<p className="text-muted-foreground">
							Strategic content, reels, paid promotions, and community
							management to build brand authority.
						</p>
					</div>
					<Image
						alt="Social Media Marketing showcase by Ziron pro"
						height={720}
						src="/images/bento/paid-ads.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-blue-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/websites/website-development"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-blue-100">
								<IconDesktopPoint className="size-6 text-blue-500" />
							</div>
							<h3 className="font-medium text-xl">Website Design & Dev</h3>
						</div>
						<p className="text-muted-foreground">
							High-converting, mobile-first, SEO-optimized websites built for
							performance and user experience.
						</p>
					</div>
					<Image
						alt="Web design and development service showcase by Ziron pro"
						height={720}
						src="/images/bento/web-dev-design.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-purple-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/full-stack"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-purple-100">
								<IconPointer className="size-6 text-purple-500" />
							</div>
							<h3 className="font-medium text-xl">CRM & Sales Automation</h3>
						</div>
						<p className="text-muted-foreground">
							Smart CRM systems, pipeline management, email automation, and
							WhatsApp workflows that convert enquiries automatically.
						</p>
					</div>
					<Image
						alt="CRM Integration service showcase by Ziron pro"
						height={720}
						src="/images/bento/conversion.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-rose-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/printing"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-rose-100">
								<IconNfc className="size-6 text-rose-500" />
							</div>
							<h3 className="font-medium text-xl">NFC Smart Business Cards</h3>
						</div>
						<p className="text-muted-foreground">
							Instant contact sharing, lead capture, and CRM integration,
							perfect for sales teams, events, and UAE networking.
						</p>
					</div>
					<Image
						alt="NFC Smart Business Cards showcase by Ziron pro"
						height={720}
						src="/images/bento/branding.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-indigo-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/full-stack/campaigns"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-indigo-100">
								<IconTarget className="size-6 text-indigo-500" />
							</div>
							<h3 className="font-medium text-xl">Lead Gen & Funnels</h3>
						</div>
						<p className="text-muted-foreground">
							Conversion-driven marketing funnels that attract, nurture, and
							convert high-quality leads into loyal customers.
						</p>
					</div>
					<Image
						alt="Lead Generation & Funnel service showcase by Ziron pro"
						height={720}
						src="/images/bento/conversion.webp"
						width={800}
					/>
				</Link>

				<Link
					className="overflow-hidden rounded-2xl bg-amber-50 shadow-md transition-[box-shadow_translate] hover:scale-102 hover:shadow-lg"
					href="/services/branding"
				>
					<div className="space-y-3 p-9">
						<div className="flex items-center gap-3">
							<div className="squircle flex size-10 items-center justify-center rounded-2xl bg-amber-100">
								<IconPaint className="size-6 text-amber-500" />
							</div>
							<h3 className="font-medium text-xl">Branding & Creative</h3>
						</div>
						<p className="text-muted-foreground">
							Logo design, UI/UX, brand identity, video marketing, and visual
							storytelling that elevate brand perception.
						</p>
					</div>
					<Image
						alt="Branding and creative service showcase by Ziron pro"
						height={720}
						src="/images/bento/branding.webp"
						width={800}
					/>
				</Link>
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
					<Button
						render={<Link className="gap-4" href="/contact" />}
						size="xl"
						variant="secondary"
					>
						Book Your Free 30-Minute Growth Consultation Today{" "}
						<IconArrowRightTag />
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
