import { Route } from "next";

import { IconNfc } from "@/assets/icons/nfc";

export type NavLink = {
	label: string;
	href: Route;
	submenu?: Submenu[];
};

export type Submenu = {
	icon: typeof IconNfc;
	title: string;
	description: string;
	href: Route;
	badge?: string;
};

export type FooterMeta = {
	label: string;
	href: Route;
};
