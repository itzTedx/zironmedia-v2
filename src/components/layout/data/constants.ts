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
			href: `/${ser.slug}` as Route,
			title: ser.title,
			icon: ser.icon,
		})),
	},
	{
		label: "Our works",
		href: "/",
	},
	{
		label: "Company",
		submenu: [
			{
				id: "1",
				title: "About us",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				id: "2",
				title: "FAQs",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				id: "3",
				title: "Blogs",
				description: "Tap. Scan. Connect.",
				href: "/blogs",
			},
			{
				id: "4",
				title: "Contact",
				description: "Tap. Scan. Connect.",
				href: "/contact",
			},
		],
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
		href: "/",
		icon: IconSocialLinkedIn,
	},
	{
		label: "Facebook",
		href: "/",
		icon: IconSocialFacebook,
	},
	{
		label: "Instagram",
		href: "/",
		icon: IconSocialInstagram,
	},
	{
		label: "Whatsapp",
		href: "/",
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
		href: "/",
	},
	{
		label: "Sitemap",
		href: "/",
	},
];
