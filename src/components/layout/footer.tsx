import Link from "next/link";

import { LogoMono, Wordmark } from "@/assets/logo";

import { Noise } from "../shared/noise";
import { FOOTER_META, SOCIALS } from "./constants";

// Static copyright year to avoid re-computation
const currentYear = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="pt-12">
			<section className="mx-auto grid max-w-7xl grid-cols-[1fr_2fr] gap-4">
				<div className="relative isolate flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-linear-[180deg,#B362FF_-8.23%,#401CD8_44.8%,#1A1162_100%] p-12 shadow-sm">
					<Noise className="opacity-50" />
					<LogoMono className="text-white" />
					<div className="space-y-8">
						<h4 className="text-balance font-display font-medium text-2xl text-background leading-snug">
							We Build Digital Experiences That{" "}
							<span className="text-brand-200">Convert Better, Faster.</span>
						</h4>
						<div>
							<p className="font-medium text-brand-200">Stay Connected</p>
							<ul className="flex items-center gap-4">
								{SOCIALS.map((social) => {
									const Icon = social.icon;
									return (
										<li key={social.label}>
											<Link
												className="flex size-12 items-center justify-center rounded-lg bg-gray-1300 text-white shadow-dark"
												href={social.href}
											>
												<Icon />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>

				<div className="rounded-2xl bg-card p-12 shadow-sm">
					<ul>
						<li>
							Email.{" "}
							<Link href="mailto:info@zironmedia.com">info@zironmedia.com</Link>
						</li>
					</ul>
				</div>
			</section>
			<section className="dashed dashed-y mt-12">
				<div className="dashed dashed-x mx-auto max-w-7xl p-px">
					<div className="flex items-center justify-between gap-4 bg-surface px-6 py-9">
						<p className="w-full">
							© {currentYear} Ziron Media. All rights reserved.
						</p>

						<Wordmark className="shrink-0 text-foreground" isMono />

						<ul className="flex w-full items-center justify-end gap-7">
							{FOOTER_META.map((meta) => (
								<li key={meta.label}>
									<Link href={meta.href}>{meta.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<div className="dashed dashed-x mx-auto h-12 max-w-7xl" />
		</footer>
	);
};
