import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["500", "600"],
	variable: "--font-poppins",
	display: "swap",
});

export const satoshi = localFont({
	src: [
		{
			path: "./fonts/Satoshi-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Black.otf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

export const clashDisplay = localFont({
	src: [
		{
			path: "./fonts/ClashDisplay-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/ClashDisplay-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/ClashDisplay-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/ClashDisplay-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/ClashDisplay-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-clash-display",
	display: "swap",
});
