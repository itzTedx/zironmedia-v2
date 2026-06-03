import { Header } from "@/components/shared/header";

import { IconCheck } from "@/assets/icons/check";

const steps = [
	{
		number: "01",
		title: "Market & competitor research",
		description:
			"In-depth competitor analysis, keyword research, and target audience mapping to find high-value opportunities.",
	},
	{
		number: "02",
		title: "Custom digital roadmap creation",
		description:
			"Designing a tailor-made blueprint aligned with your unique business goals, budget, and KPIs.",
	},
	{
		number: "03",
		title: "Multi-channel campaign execution",
		description:
			"Launching conversion-focused ads, optimized landing pages, and smart lead nurturing sequences.",
	},
	{
		number: "04",
		title: "Continuous optimization & reporting",
		description:
			"A/B testing, user journey analysis, and data-driven tweaks to maximize ROI and lower customer acquisition costs.",
	},
	{
		number: "05",
		title: "Scaling what works for long-term growth",
		description:
			"Expanding successful campaigns, automated funnels, and SEO content for compound business growth.",
	},
];

export const Process = () => {
	return (
		<section className="dashed dashed-y">
			<Header
				description="We don’t believe in random posting or guesswork. We build integrated growth ecosystems that generate consistent revenue."
				title="Our Process: From Strategy to Scale"
			/>

			<div className="dashed-x dashed container mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-20">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-5">
					{steps.map((step, idx) => {
						return (
							<div
								className="group relative flex flex-col gap-4 rounded-2xl border border-muted/40 bg-card p-6 shadow-sm transition duration-300 hover:scale-103 hover:shadow-md"
								key={step.number}
							>
								<div className="flex items-center justify-between">
									<span className="font-bold font-display text-4xl text-brand-500/20 transition duration-300 group-hover:text-brand-500">
										{step.number}
									</span>
									<div className="flex size-6 items-center justify-center rounded-full bg-brand-50 text-brand-600">
										<IconCheck className="size-3.5" />
									</div>
								</div>

								<h3 className="font-bold text-foreground text-lg leading-tight">
									{step.title}
								</h3>

								<p className="text-muted-foreground text-sm leading-relaxed">
									{step.description}
								</p>

								{idx < 4 ? (
									<div className="absolute top-1/2 -right-4 z-10 hidden h-0.5 w-8 bg-linear-to-r from-brand-200 to-transparent md:block" />
								) : null}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
