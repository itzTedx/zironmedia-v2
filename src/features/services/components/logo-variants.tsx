import Link from "next/link";

import { Noise } from "@/components/shared/noise";
import { Frame, FramePanel } from "@/components/ui/frame";

import { Formats } from "../assets/formats";
import { IconLogo, PrimaryLogo, SecondaryLogo } from "../assets/logo";

export const LogoVariants = () => {
	return (
		<div className="not-prose grid grid-cols-3 gap-4">
			<Frame className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
				<FramePanel>
					<div className="relative flex aspect-8/9 items-center justify-center">
						<Noise className="opacity-25" />
						<PrimaryLogo />
					</div>
				</FramePanel>

				<p className="text-center font-medium text-base">Primary logo design</p>
			</Frame>
			<div className="grid gap-4">
				<Frame className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
					<FramePanel className="relative flex h-full items-center justify-center">
						<Noise className="opacity-25" />
						<SecondaryLogo />
					</FramePanel>

					<p className="text-center font-medium text-base">
						Alternate / secondary logo versions
					</p>
				</Frame>
				<Frame className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
					<FramePanel className="relative flex h-full gap-1 p-1">
						<Noise className="opacity-25" />
						<div className="flex size-full items-center justify-center rounded-lg bg-surface">
							<IconLogo />
						</div>
						<div className="flex size-full items-center justify-center rounded-lg bg-gray-1200">
							<IconLogo className="text-card" isMono />
						</div>
					</FramePanel>

					<p className="text-center font-medium text-base">
						Color, black & white versions
					</p>
				</Frame>
			</div>
			<div className="grid-row-2 grid gap-4">
				<Frame className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
					<FramePanel className="relative flex items-center justify-center">
						<Noise className="opacity-25" />
						<IconLogo className="h-auto w-28" />
					</FramePanel>

					<p className="text-center font-medium text-base">
						Icon or symbol variation
					</p>
				</Frame>
				<Frame className="relative z-50 rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
					<FramePanel className="relative flex items-center justify-center">
						<Noise className="opacity-25" />

						<Formats />
					</FramePanel>

					<p className="text-center font-medium text-base">
						Web & print-ready formats
					</p>
				</Frame>
			</div>
			<Frame className="relative z-50 col-span-full rounded-[calc(var(--radius-2xl)+calc(var(--spacing)*1))]">
				<FramePanel className="relative grid grid-cols-[.5fr_1fr] items-center">
					<Noise className="opacity-25" />

					<h3 className="text-balance font-bold text-3xl text-brand-secondary uppercase tracking-tight">
						Brand guidelines and logo animations
					</h3>
					<p className="text-lg text-muted-foreground">
						Comprehensive{" "}
						<Link
							className="text-primary hover:underline"
							href="/services/branding/brand-guidelines"
						>
							brand guidelines
						</Link>{" "}
						and high-quality{" "}
						<Link
							className="text-primary hover:underline"
							href="/services/motion/motion-graphics"
						>
							logo animations
						</Link>{" "}
						are available as add-ons, ensuring consistent branding and a
						polished visual presence across all platforms.
					</p>
				</FramePanel>
			</Frame>
		</div>
	);
};
