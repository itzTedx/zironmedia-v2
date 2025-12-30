"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { Textarea } from "@/components/ui/textarea";

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
								Full Name <span className="text-destructive">*</span>
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
								Email Address<span className="text-destructive">*</span>
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
								Subject <span className="text-destructive">*</span>
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
								Message <span className="text-destructive">*</span>
							</FieldLabel>
							<Textarea
								{...field}
								aria-invalid={fieldState.invalid}
								className="min-h-[120px]"
								disabled={isPending}
								id="contact-form-message"
								placeholder="Tell us about your project or inquiry..."
							/>
							<FieldDescription>
								Please provide details about your project or inquiry. Minimum 10
								characters.
							</FieldDescription>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Field className="pt-2" orientation="horizontal">
					<Button disabled={isPending} form="contact-form" type="submit">
						<LoadingSwap isLoading={isPending}>Send Message</LoadingSwap>
					</Button>
				</Field>
			</FieldGroup>
		</form>
	);
}
