import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Frame,
	FrameFooter,
	FrameHeader,
	FramePanel,
	FrameTitle,
} from "@/components/ui/frame";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

import { IconArrowRightTag } from "@/assets/icons/arrow";
import { IconShapes } from "@/assets/icons/shapes";

import { SERVICES } from "@/features/services/constant";

export default function WorksPage() {
	return (
		<main>
			<header className="dashed dashed-x container mx-auto grid max-w-7xl grid-cols-2 gap-12 py-12">
				<h1 className="font-semibold text-7xl text-primary">
					A closer look at our recent work.
				</h1>
				<div className="space-y-3">
					<p className="text-muted-foreground text-xl">
						Here’s a look at what we’ve been building with our clients. Every
						project is different, but what stays the same is the craft, speed,
						and thinking process behind it.
					</p>
					<Button
						asChild
						className="group w-full flex-1 justify-between gap-2 md:w-60"
						size="lg"
					>
						<Link href="/services">
							<span>
								Get started{" "}
								<span className="hidden font-normal text-primary-secondary md:inline">
									- it’s free
								</span>
							</span>
							<IconArrowRightTag className="size-5 transition-transform duration-300 ease-in group-hover:translate-x-1" />
						</Link>
					</Button>
				</div>
			</header>
			<section className="dashed dashed-t">
				<Tabs
					className="dashed dashed-x container max-w-7xl py-12"
					defaultValue="all"
				>
					<TabsList className="w-full">
						<TabsTab value="all">
							<IconShapes /> All Works
						</TabsTab>
						{SERVICES.map((service) => (
							<TabsTab key={service.id} value={service.slug}>
								<service.icon />
								{service.title}
							</TabsTab>
						))}
					</TabsList>
					<TabsPanel value="all">
						<Frame>
							<FrameHeader className="flex-row items-center justify-between px-1.5 py-2">
								<FrameTitle className="text-xl">
									Engineering a Smarter Digital Presence for Enterprise Growth.
								</FrameTitle>
								<div className="flex items-center gap-2">
									<Badge
										className="transition-colors duration-300"
										render={<Link href="/services/websites" />}
										variant="ghost"
									>
										Website Design & Dev
									</Badge>
									<Button variant="secondary">See Case Study</Button>
								</div>
							</FrameHeader>

							<FramePanel>
								<div className="relative aspect-video w-full overflow-hidden rounded-xl">
									<Image alt="" fill src="/images/works/direct-ls.webp" />
								</div>
							</FramePanel>
							<FrameFooter>
								<p>
									"Ziron Media delivered a modern, fast, and professional
									website that perfectly reflects our brand. Their attention to
									detail and technical expertise made the entire process smooth
									and efficient."
								</p>
							</FrameFooter>
						</Frame>
					</TabsPanel>
					<TabsPanel value="branding">
						<p className="p-4 text-center text-muted-foreground text-xs">
							Tab 2 content
						</p>
					</TabsPanel>
					<TabsPanel value="websites">
						<p className="p-4 text-center text-muted-foreground text-xs">
							Tab 3 content
						</p>
					</TabsPanel>
				</Tabs>
			</section>
		</main>
	);
}
