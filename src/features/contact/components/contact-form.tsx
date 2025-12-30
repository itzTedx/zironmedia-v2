"use client";

import { useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldAsterisk,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { Textarea } from "@/components/ui/textarea";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { submitContactForm } from "../actions";
import { ContactType, contactFormSchema } from "../actions/schema";

export function ContactForm() {
	const [isPending, setIsPending] = useState(false);

	const form = useForm<ContactType>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: ContactType) {
		setIsPending(true);

		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("phone", data.phone || "");
		formData.append("subject", data.subject);
		formData.append("message", data.message);

		await submitContactForm(formData);

		setIsPending(false);
	}

	return (
		<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<Controller
					control={form.control}
					name="name"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="contact-form-name">
								Full Name <FieldAsterisk />
							</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								autoComplete="name"
								disabled={isPending}
								id="contact-form-name"
								placeholder="John Doe"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					control={form.control}
					name="email"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="contact-form-email">
								Email Address
								<FieldAsterisk />
							</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								autoComplete="email"
								disabled={isPending}
								id="contact-form-email"
								placeholder="john@example.com"
								type="email"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					control={form.control}
					name="phone"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="contact-form-phone">Phone Number</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								autoComplete="tel"
								disabled={isPending}
								id="contact-form-phone"
								placeholder="+971 58 171 1486"
								type="tel"
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					control={form.control}
					name="subject"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="contact-form-subject">
								Subject <FieldAsterisk />
							</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								disabled={isPending}
								id="contact-form-subject"
								placeholder="How can we help you?"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					control={form.control}
					name="message"
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="contact-form-message">
								Message <FieldAsterisk />
							</FieldLabel>
							<Textarea
								{...field}
								aria-invalid={fieldState.invalid}
								className="min-h-[120px]"
								disabled={isPending}
								id="contact-form-message"
								placeholder="Tell us about your project or inquiry..."
							/>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<div className="flex items-center gap-12 pt-2">
					<p className="shrink text-balance text-2xs text-muted-foreground">
						By submitting you agree to our
						<br />{" "}
						<Link className="text-primary hover:underline" href="/">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link className="text-primary hover:underline" href="/">
							Privacy Policy.
						</Link>
					</p>
					<Button
						className="w-full flex-1"
						disabled={isPending}
						form="contact-form"
						type="submit"
					>
						<LoadingSwap
							className="flex w-full items-center justify-between"
							isLoading={isPending}
						>
							<span>
								Send Message{" "}
								<span className="hidden font-normal text-primary-secondary md:inline">
									- it’s free
								</span>
							</span>
							<IconArrowRightTag className="size-5" />
						</LoadingSwap>
					</Button>
				</div>
			</FieldGroup>
		</form>
	);
}
