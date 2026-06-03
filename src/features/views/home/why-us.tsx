"use client";

import { Header } from "@/components/shared/header";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { IconCheck } from "@/assets/icons/check";
import { IconHeart } from "@/assets/icons/heart";
import { IconShapes } from "@/assets/icons/shapes";
import { IconSparkle } from "@/assets/icons/sparkle";
import { IconTarget } from "@/assets/icons/target";
import { IconX } from "@/assets/icons/x";
import { Logo } from "@/assets/logo";

import { cn } from "@/lib/utils";

const whyCards = [
	{
		title: "Results-First Approach",
		description:
			"Every campaign is built around ROI, lead generation, and revenue growth not vanity metrics.",
		icon: IconTarget,
		color: "text-orange-500",
		bgColor: "bg-orange-100",
		cardBg: "bg-orange-50/50 border-orange-100/50",
	},
	{
		title: "AI-Driven Marketing & Automation",
		description:
			"We integrate AI tools, CRM systems, WhatsApp automation, and smart funnels to ensure your marketing works 24/7.",
		icon: IconSparkle,
		color: "text-brand-500",
		bgColor: "bg-brand-100",
		cardBg: "bg-brand-50/50 border-brand-100/50",
	},
	{
		title: "Industry-Specific Expertise",
		description:
			"From Real Estate and Healthcare to SaaS, Ecommerce, and B2B, our strategies are tailored to your industry dynamics.",
		icon: IconShapes,
		color: "text-blue-500",
		bgColor: "bg-blue-100",
		cardBg: "bg-blue-50/50 border-blue-100/50",
	},
	{
		title: "True Client Partnership",
		description:
			"Transparent reporting, clear KPIs, and a team that works as an extension of your business.",
		icon: IconHeart,
		color: "text-rose-500",
		bgColor: "bg-rose-100",
		cardBg: "bg-rose-50/50 border-rose-100/50",
	},
];

const checklist = [
	"Focus on business outcomes, not just marketing tasks",
	"AI & automation integrated into every strategy",
	"Full-funnel approach: Awareness → Leads → Sales → Retention",
	"Clear dashboards, reporting, and transparency",
	"Services available across Abu Dhabi and Dubai",
];

const features = [
	{
		feature: "Cost",
		us: "$ (Fixed monthly pricing)",
		team: "$$$$",
		other: "$$$",
		teamLevel: "error",
		otherLevel: "warn",
	},
	{
		feature: "Skill Coverage",
		us: "Design, Developer, Marketing & Print",
		team: "Limited to hires",
		other: "Depends on agency",
		teamLevel: "error",
		otherLevel: "error",
	},
	{
		feature: "Senior-Level Expertise",
		us: "Guaranteed",
		team: "Hopefully",
		other: "Maybe",
		teamLevel: "warn",
		otherLevel: "warn",
	},
	{
		feature: "Turnaround Time",
		us: "48 hours for most requests",
		team: "Can take  weeks due to other tasks",
		other: "Weeks, depending on workload",
		teamLevel: "error",
		otherLevel: "error",
	},
	{
		feature: "Start Time",
		us: "Same day",
		team: "Weeks to onboard and train",
		other: "Days to set up agreements",
		teamLevel: "error",
		otherLevel: "error",
	},
	{
		feature: "Client Portal",
		us: "Yes, track progress easily",
		team: "Internal systems may vary, often less accessible",
		other: "No consistent system",
		teamLevel: "warn",
		otherLevel: "error",
	},
	{
		feature: "Scalability",
		us: "Scale up or down with ease.",
		team: "Possible",
		other: "Limited by freelancer's capacity",
		teamLevel: "success",
		otherLevel: "error",
	},
	{
		feature: "Flexibility",
		us: "Pause or adjust your subscription anytime",
		team: "Locked into salaries and benefits",
		other: "Contract-locked",
		teamLevel: "error",
		otherLevel: "error",
	},
];

export const WhyUs = () => {
	return (
		<section className="dashed dashed-b-0 mx-auto max-w-7xl p-px">
			{/* Part 1: Why ZironPro? Section */}
			<div className="dashed dashed-b pb-12 md:pb-16 lg:pb-20">
				<Header
					description="We combine performance intelligence with strategy and automation to deliver predictable business growth."
					title="Why ZironPro?"
				/>
				<div className="mx-auto max-w-6xl px-6 md:px-0">
					<Carousel
						autoplayOptions={{
							delay: 4000,
							stopOnMouseEnter: true,
						}}
						className="w-full"
						opts={{
							align: "start",
							loop: true,
						}}
					>
						<CarouselContent className="-ml-4">
							{whyCards.map((card) => (
								<CarouselItem
									className="basis-full py-4 pl-4 sm:basis-1/2 lg:basis-1/3"
									key={card.title}
								>
									<Card
										className={cn(
											"flex h-full flex-col gap-4 border p-8 shadow-sm transition duration-300 hover:scale-101 hover:shadow-md",
											card.cardBg
										)}
									>
										<div className="flex items-center gap-4">
											<div
												className={cn(
													"squircle flex size-12 items-center justify-center rounded-2xl",
													card.bgColor
												)}
											>
												<card.icon className={cn("size-6", card.color)} />
											</div>
											<h3 className="font-semibold text-2xl text-foreground leading-tight">
												{card.title}
											</h3>
										</div>
										<p className="text-base text-muted-foreground leading-relaxed md:text-lg">
											{card.description}
										</p>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="mt-8 flex items-center justify-center gap-4">
							<CarouselPrevious
								className="relative left-0 translate-y-0 bg-card"
								size="icon-lg"
							/>
							<CarouselNext
								className="relative right-0 translate-y-0 bg-card"
								size="icon-lg"
							/>
						</div>
					</Carousel>
				</div>
			</div>

			{/* Part 2: What Makes ZironPro Different? Section */}
			<div className="pt-12 md:pt-16 lg:pt-20">
				<Header
					description="We focus on business outcomes, not just marketing tasks. AI & automation integrated into every strategy for a full-funnel approach: Awareness → Leads → Sales → Retention."
					title="What Makes ZironPro Different?"
				/>

				{/* Checklist layout */}
				<div className="mx-auto max-w-3xl px-4 pb-12 md:px-0">
					<div className="flex flex-col gap-4 rounded-2xl border border-muted/50 bg-muted/20 p-6 md:p-8">
						<h3 className="mb-2 text-center font-medium text-primary text-xl">
							Our Framework for Predictable Growth
						</h3>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							{checklist.map((item) => (
								<div className="flex items-start gap-3" key={item}>
									<div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
										<IconCheck className="size-4" />
									</div>
									<span className="font-medium text-foreground text-sm leading-snug sm:text-base">
										{item}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-6xl px-4 py-9 md:px-0 md:py-14">
					<div className="sr-only mb-3 grid grid-cols-4 gap-6 md:not-sr-only">
						<div />
						<div>
							<Logo className="h-5 w-auto" />
						</div>
						<p className="text-muted-foreground text-xs sm:text-base">
							In-House Team
						</p>
						<p className="text-muted-foreground text-xs sm:text-base">
							Other Agencies
						</p>
					</div>

					<div className="mt-3 rounded-2xl bg-muted/20 p-3">
						<Table>
							<TableHeader className="md:sr-only">
								<TableRow className="pb-6">
									<TableHead className="w-[280px] opacity-0">Feature</TableHead>
									<TableHead className="flex w-[180px] items-center justify-center">
										<Logo className="h-4 w-auto" />
									</TableHead>
									<TableHead className="w-[190px]">In-House Team</TableHead>
									<TableHead className="w-[190px]">Other Agencies</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody className="overflow-hidden rounded-2xl! border bg-card shadow-md">
								{features.map((feature) => (
									<TableRow key={feature.feature}>
										<TableCell className="whitespace-nowrap bg-background/50 font-medium text-xs md:text-lg">
											{feature.feature}
										</TableCell>
										<TableCell className="w-[300px] leading-snug">
											<div className="flex items-center gap-2">
												<IconCheck className="size-4 shrink-0 text-success" />
												{feature.us}
											</div>
										</TableCell>
										<TableCell className="w-[300px] leading-snug">
											<div className="flex items-center gap-2 text-muted-foreground">
												{feature.teamLevel === "success" ? (
													<IconCheck className="size-4 shrink-0 text-success" />
												) : (
													<IconX
														className={cn(
															"size-4 shrink-0",
															feature.teamLevel === "warn"
																? "text-warning"
																: "text-destructive"
														)}
													/>
												)}
												{feature.team}
											</div>
										</TableCell>
										<TableCell className="w-[300px] leading-snug">
											<div className="flex items-center gap-2 text-muted-foreground">
												{feature.otherLevel === "success" ? (
													<IconCheck className="size-4 shrink-0 text-success" />
												) : (
													<IconX
														className={cn(
															"size-4 shrink-0",
															feature.otherLevel === "warn"
																? "text-warning"
																: "text-destructive"
														)}
													/>
												)}
												{feature.other}
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</section>
	);
};
