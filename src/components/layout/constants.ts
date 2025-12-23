import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconNfc } from "@/assets/icons/nfc";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { FooterMeta, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
	{
		label: "Products",
		href: "/",
		submenu: [
			{
				icon: IconNfc,
				title: "Ziron Tap",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				icon: IconNfc,
				title: "Ziron CRM",
				description: "Tap. Scan. Connect.",
				badge: "New • Get Early Access",
				href: "/",
			},
		],
	},
	{
		label: "Services",
		href: "/",
		submenu: [
			{
				icon: IconTarget,
				title: "Brand Strategy",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconDesktopPoint,
				title: "Websites",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Digital Marketing",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Printing & Corporate Gifts",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Motion Design",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
			{
				icon: IconSpeaker,
				title: "Full-stack Marketing",
				description:
					"Crafting visual identities that feel clear, timeless, and true to your brand.",
				href: "/",
			},
		],
	},
	{
		label: "Our works",
		href: "/",
	},
	{
		label: "Company",
		href: "/",
		submenu: [
			{
				icon: IconNfc,
				title: "Ziron Tap",
				description: "Tap. Scan. Connect.",
				href: "/",
			},
			{
				icon: IconNfc,
				title: "Ziron CRM",
				description: "Tap. Scan. Connect.",
				badge: "New • Get Early Access",
				href: "/",
			},
		],
	},
];

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
