export const BASE_URL =
	process.env.BASE_URL ?? ("http://localhost:3000" as const);

export const siteConfig = {
	title: "Ziron Media: Dubai Digital Marketing Agency for Growth",
	shortName: "Ziron Media",
	description:
		"Dubai-based digital marketing agency for SEO, Digital & Offset Printing, Web design and development, and social media that drive leads and revenue. Book a free strategy call today.",
	keywords:
		"digital marketing agency Dubai, SEO services Dubai, PPC management, web design Dubai, social media marketing, web development, website, digital printing, nfc card",

	url: BASE_URL,
	logo: "/favicon.svg",
	ogImage: "/images/og.jpg",
	links: {
		// twitter: "https://x.com/itzTedx_",
		linkedin: "https://www.linkedin.com/company/ziron-media",
		instagram: "https://www.instagram.com/ziron_media/",
		facebook: "https://www.facebook.com/zironmedia",
	},
	contact: "+971 58 171 1486",
} as const;
