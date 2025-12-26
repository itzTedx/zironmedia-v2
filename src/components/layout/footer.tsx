import Image from "next/image";
import Link from "next/link";

import { LogoMono, Wordmark } from "@/assets/logo";

import { Noise } from "../shared/noise";
import {
	CONTACT,
	FOOTER_LINKS,
	FOOTER_META,
	PARTNERS,
	SOCIALS,
} from "./constants";

// Static copyright year to avoid re-computation
const currentYear = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="pt-12">
			<section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:px-0 lg:grid-cols-[1fr_2fr]">
				<div className="relative isolate flex flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-linear-[180deg,#B362FF_-8.23%,#401CD8_44.8%,#1A1162_100%] p-12 shadow-sm">
					<Noise className="opacity-50" />
					<Link href="/">
						<LogoMono className="h-10 w-fit text-white" />
					</Link>
					<div className="space-y-8">
						<h4 className="text-balance font-display font-medium text-2xl text-background leading-snug">
							We Build Digital Experiences That{" "}
							<span className="text-brand-200">Convert Better, Faster.</span>
						</h4>
						<div className="space-y-3">
							<p className="font-medium text-brand-200">Stay Connected</p>
							<ul className="flex items-center gap-4">
								{SOCIALS.map((social) => {
									const Icon = social.icon;
									return (
										<li key={social.label}>
											<Link
												className="flex size-12 items-center justify-center rounded-lg bg-gray-1300 text-white shadow-dark transition-[filter] hover:brightness-125"
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

				<div className="space-y-12 rounded-2xl bg-card p-6 shadow-sm md:space-y-20 md:p-12">
					<div className="flex flex-col justify-between gap-12 md:flex-row md:gap-4">
						<ul className="space-y-6">
							{CONTACT.map((contact) => (
								<li className="flex items-center gap-3" key={contact.label}>
									<span className="w-12 font-mono text-muted-foreground text-xs uppercase leading-none tracking-tight">
										{contact.label}
										<span className="font-bold text-brand-secondary">.</span>
									</span>
									<Link
										className="font-medium text-xl leading-none"
										href={contact.href}
									>
										{contact.value}
									</Link>
								</li>
							))}
						</ul>

						<div className="flex gap-12">
							{FOOTER_LINKS.map((l) => (
								<ul key={l.section}>
									<li className="space-y-5">
										<h5 className="font-mono text-muted-foreground text-xs tracking-tight">
											{l.section}
											<span className="font-bold text-brand-secondary">.</span>
										</h5>
										<ul className="space-y-4 font-medium">
											{l.links.map((link) => (
												<li key={link.label}>
													<Link className="" href={link.href}>
														{link.label}
													</Link>
												</li>
											))}
										</ul>
									</li>
								</ul>
							))}
						</div>
					</div>

					<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-4">
						<h5 className="max-w-xs text-balance font-medium text-primary text-xl tracking-tight md:text-2xl">
							A friendly digital marketing company in Dubai
						</h5>
						<ul className="flex flex-wrap items-center gap-6">
							{PARTNERS.map((partner) => (
								<li key={partner.title}>
									<Image
										alt={partner.title}
										height={30}
										src={partner.src}
										width={80}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<section className="dashed dashed-y mt-12">
				<div className="dashed dashed-x mx-auto max-w-7xl p-px">
					<div className="flex flex-col items-center justify-between gap-8 bg-surface px-6 py-9 text-center md:flex-row md:text-left">
						<p className="w-full">
							© {currentYear} Ziron Media. All rights reserved.
						</p>
						<Link href="/">
							<Wordmark className="shrink-0 text-foreground" isMono />
						</Link>

						<ul className="flex w-full flex-wrap items-center justify-center gap-x-7 gap-y-2 md:justify-end">
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
