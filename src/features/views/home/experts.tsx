import { Header } from "@/components/shared/header";

import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconGear } from "@/assets/icons/gear";
import { IconPaint } from "@/assets/icons/paint";
import { IconSparkle } from "@/assets/icons/sparkle";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

const expertRoles = [
	{
		title: "Digital Strategists",
		description:
			"Architecting custom multi-channel growth systems and pipeline conversion strategies.",
		icon: IconTarget,
		color: "text-orange-500",
		bgColor: "bg-orange-100",
		border: "border-orange-100/50 hover:bg-orange-50/20",
	},
	{
		title: "SEO Specialists",
		description:
			"Dominating search engine results pages, building local authority, and optimizing crawl performance.",
		icon: IconDesktopPoint,
		color: "text-green-500",
		bgColor: "bg-green-100",
		border: "border-green-100/50 hover:bg-green-50/20",
	},
	{
		title: "Performance Marketers",
		description:
			"Running ROI-focused paid ads on Google, Meta, TikTok, and LinkedIn to generate predictable leads.",
		icon: IconSpeaker,
		color: "text-fuchsia-500",
		bgColor: "bg-fuchsia-100",
		border: "border-fuchsia-100/50 hover:bg-fuchsia-50/20",
	},
	{
		title: "Developers",
		description:
			"Building fast, high-converting, mobile-first websites using Next.js, React, and modern SEO structures.",
		icon: IconGear,
		color: "text-blue-500",
		bgColor: "bg-blue-100",
		border: "border-blue-100/50 hover:bg-blue-50/20",
	},
	{
		title: "Designers",
		description:
			"Elevating brand perception with premium UI/UX, logos, brand guidelines, and visual storytelling.",
		icon: IconPaint,
		color: "text-amber-500",
		bgColor: "bg-amber-100",
		border: "border-amber-100/50 hover:bg-amber-50/20",
	},
	{
		title: "CRM & Automation Experts",
		description:
			"Deploying automated WhatsApp flows, email nurture sequences, and lead capture systems.",
		icon: IconSparkle,
		color: "text-brand-500",
		bgColor: "bg-brand-100",
		border: "border-brand-100/50 hover:bg-brand-50/20",
	},
];

export const Experts = () => {
	return (
		<section className="dashed dashed-y">
			<Header
				description="We combine creativity with performance intelligence to deliver predictable business growth."
				title="Meet The ZironPro Experts"
			/>

			{/* <div className="dashed-x dashed-b-0 container mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{expertRoles.map((role) => {
						const Icon = role.icon;
						return (
							<div
								className={cn(
									"flex flex-col gap-4 rounded-3xl border p-8 shadow-sm transition duration-300 hover:scale-101 hover:shadow-md",
									role.border
								)}
								key={role.title}
							>
								<div className="flex items-center gap-4">
									<div
										className={cn(
											"squircle flex size-12 items-center justify-center rounded-2xl",
											role.bgColor
										)}
									>
										<Icon className="size-6" />
									</div>
									<h3 className="font-semibold text-foreground text-xl leading-snug">
										{role.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{role.description}
								</p>
							</div>
						);
					})}
				</div>
			</div> */}
		</section>
	);
};
