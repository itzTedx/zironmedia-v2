"use server";

import { z } from "zod";

import { contactFormSchema } from "./schema";

export async function submitContactForm(formData: FormData) {
	try {
		const rawData = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			phone: formData.get("phone") as string,
			subject: formData.get("subject") as string,
			message: formData.get("message") as string,
		};

		const validatedData = contactFormSchema.parse(rawData);

		// TODO: Implement actual email sending logic here
		// For now, we'll just simulate success
		console.log("Contact form submission:", validatedData);

		// Simulate API call delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		return {
			success: true,
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				error: "Please fix the errors below.",
				fieldErrors: z.treeifyError(error),
			};
		}

		return {
			error: "Something went wrong. Please try again later.",
		};
	}
}
