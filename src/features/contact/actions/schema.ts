import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters.")
		.max(50, "Name must be at most 50 characters."),
	email: z.email("Please enter a valid email address."),
	phone: z
		.string()
		.regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number.")
		.optional()
		.or(z.literal("")),
	subject: z
		.string()
		.min(3, "Subject must be at least 3 characters.")
		.max(100, "Subject must be at most 100 characters."),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters.")
		.max(1000, "Message must be at most 1000 characters."),
});

export type ContactType = z.infer<typeof contactFormSchema>;
