import { CONTACT, SOCIALS } from "@/components/layout/data/constants";
import { Noise } from "@/components/shared/noise";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ContactForm } from "@/features/contact/components/contact-form";

export default function ContactPage() {
	return (
		<main>
			{/* Hero Section */}
			<section className="dashed dashed-x relative mx-auto max-w-7xl">
				<Noise className="opacity-50" />
				<div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 md:px-0 md:py-16">
					<h1 className="text-center font-bold font-display text-4xl text-primary uppercase md:text-6xl lg:text-8xl">
						Get in Touch
					</h1>
					<p className="text-balance text-center text-lg text-muted-foreground leading-relaxed md:text-xl">
						Have a project in mind? We'd love to hear from you. Send us a
						message and we'll respond as soon as possible.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className="dashed relative mx-auto max-w-7xl py-9 md:py-14">
				<div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_1.2fr] md:px-0 lg:gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div>
							<h2 className="mb-4 font-display font-semibold text-3xl tracking-tight md:text-4xl">
								Let's Connect
							</h2>
							<p className="text-balance text-lg text-muted-foreground leading-relaxed">
								Whether you're looking to start a new project or just want to
								learn more about our services, we're here to help.
							</p>
						</div>

						<div className="space-y-6">
							{CONTACT.map((contact) => (
								<div className="space-y-2" key={contact.label}>
									<span className="font-mono text-muted-foreground text-xs uppercase leading-none tracking-tight">
										{contact.label}
										<span className="font-bold text-brand-secondary">.</span>
									</span>
									<a
										className="block font-medium text-xl leading-none transition-colors hover:text-primary"
										href={contact.href}
									>
										{contact.value}
									</a>
								</div>
							))}
						</div>

						<div className="space-y-4">
							<p className="font-medium text-muted-foreground">Follow Us</p>
							<ul className="flex items-center gap-4">
								{SOCIALS.map((social) => {
									const Icon = social.icon;
									return (
										<li key={social.label}>
											<a
												aria-label={social.label}
												className="flex size-12 items-center justify-center rounded-lg bg-muted/20 text-foreground transition-colors hover:bg-primary hover:text-white"
												href={social.href}
											>
												<Icon />
											</a>
										</li>
									);
								})}
							</ul>
						</div>

						<div className="rounded-2xl bg-card p-6 shadow-sm">
							<h3 className="mb-2 font-medium text-xl">Office Hours</h3>
							<p className="text-muted-foreground">
								Monday - Friday: 9:00 AM - 6:00 PM GST
							</p>
							<p className="mt-2 text-muted-foreground">
								Saturday: 10:00 AM - 4:00 PM GST
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<Card className="shadow-sm">
						<CardHeader className="p-6 pb-0">
							<CardTitle>Send us a Message</CardTitle>
						</CardHeader>
						<CardContent className="p-6">
							<ContactForm />
						</CardContent>
					</Card>
				</div>
			</section>
		</main>
	);
}
