import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

export const youth = localFont({
	variable: "--font-body",
	display: "swap",
	preload: true,
	src: [
		{
			weight: "100",
			path: "./youth/Youth-Thin.otf",
		},
		{
			weight: "300",
			path: "./youth/Youth-Light.otf",
		},
		{
			weight: "400",
			path: "./youth/Youth-Regular.otf",
		},
		{
			weight: "500",
			path: "./youth/Youth-Medium.otf",
		},
		{
			weight: "700",
			path: "./youth/Youth-Bold.otf",
		},
		{
			weight: "900",
			path: "./youth/Youth-Black.otf",
		},
	],
	fallback: [
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"Oxygen",
		"Ubuntu",
		"Cantarell",
		"Helvetica Neue",
		"Arial",
		"sans-serif",
	],
});

export const mono = Chivo_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: "500",
	fallback: [
		"SFMono-Regular",
		"Menlo",
		"Monaco",
		"Consolas",
		"Liberation Mono",
		"Courier New",
		"monospace",
	],
});
