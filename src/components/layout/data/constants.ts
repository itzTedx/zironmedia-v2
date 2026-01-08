import { Route } from "next";

import { IconNfc } from "@/assets/icons/nfc";
import {
	IconSocialFacebook,
	IconSocialInstagram,
	IconSocialLinkedIn,
	IconSocialWhatsapp,
} from "@/assets/icons/socials";

import { SERVICES } from "@/features/services/constant";

import { FooterMeta, NavLink, Social, Submenu } from "./types";

export const PRODUCTS: Submenu[] = [
	{
		id: "tap",
		icon: IconNfc,
		title: "Ziron Tap",
		description: "Tap. Scan. Connect.",
		href: "/",
	},
	{
		id: "crm",
		icon: IconNfc,
		title: "Ziron CRM",
		description: "Tap. Scan. Connect.",
		badge: "New • Get Early Access",
		href: "/",
	},
];

export const NAV_LINKS: NavLink[] = [
	{
		label: "Products",
		href: "/",
		submenu: PRODUCTS,
	},
	{
		label: "Services",
		href: "/services",
		submenu: SERVICES.flatMap((ser) => ({
			id: ser.id.toString(),
			description: ser.description,
			href: `/services/${ser.slug}` as Route,
			title: ser.title,
			image: ser.image,
			icon: ser.icon,
		})),
	},
	{
		label: "Our works",
		href: "/our-works",
	},

	{
		label: "Company",
		submenu: [
			{
				id: "1",
				title: "About us",
				description: "Tap. Scan. Connect.",
				href: "/about",
			},
			{
				id: "2",
				title: "FAQs",
				description: "Tap. Scan. Connect.",
				href: "/faqs",
			},
			{
				id: "3",
				title: "Blogs",
				description: "Tap. Scan. Connect.",
				href: "/blogs",
			},
		],
	},
	{
		label: "Contact",
		href: "/contact",
	},
] as const;

export const CONTACT = [
	{
		label: "Email",
		href: "mailto:info@zironmedia.com",
		value: "info@zironmedia.com",
	},
	{
		label: "Phone",
		href: "tel:+971 56 789 5432",
		value: "+971 56 789 5432",
	},
] as const;

export const FOOTER_LINKS = [
	{
		section: "LINKS",
		links: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "About",
				href: "/",
			},
			{
				label: "Products",
				href: "/",
			},
			{
				label: "Services",
				href: "/services",
			},
			{
				label: "Contact",
				href: "/contact",
			},
		],
	},
	{
		section: "SERVICES",
		links: [
			{
				label: "Brand Strategy",
				href: "/services/branding",
			},
			{
				label: "Websites",
				href: "/services/websites",
			},
			{
				label: "Digital Marketing",
				href: "/services/marketing",
			},
			{
				label: "Printing & Corporate Gifts",
				href: "/services/printing",
			},
			{
				label: "Motion Design",
				href: "/services/motion",
			},
			{
				label: "Full-stack marketing",
				href: "/services/full-stack",
			},
		],
	},
	{
		section: "RESOURCES",
		links: [
			{
				label: "Our works",
				href: "/",
			},
			{
				label: "Blogs",
				href: "/",
			},
			{
				label: "Enquiry",
				href: "/",
			},
		],
	},
] as const;

export const PARTNERS = [
	{
		title: "Google Partner",
		src: "/images/partner/google.svg",
	},
	{
		title: "Meta Partner",
		src: "/images/partner/meta.svg",
	},
	{
		title: "Tiktok Partner",
		src: "/images/partner/tiktok.svg",
	},
] as const;

export const SOCIALS: Social[] = [
	{
		label: "Linkedin",
		href: "https://www.linkedin.com/company/ziron-media",
		icon: IconSocialLinkedIn,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/ziron_media/",
		icon: IconSocialInstagram,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/zironmedia",
		icon: IconSocialFacebook,
	},
	{
		label: "Whatsapp",
		href: "https://wa.me/971581711486",
		icon: IconSocialWhatsapp,
	},
] as const;

export const FOOTER_META: FooterMeta[] = [
	{
		label: "Enquiry",
		href: "/",
	},
	{
		label: "Privacy Policy",
		href: "/privacy-policy",
	},
	{
		label: "Terms of service",
		href: "/terms-of-service",
	},
	{
		label: "Sitemap",
		href: "/sitemap.xml" as Route,
	},
];
