import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["500", "600"],
	variable: "--font-poppins",
	display: "swap",
});
const satoshi = localFont({
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

export const metadata: Metadata = {
	title: "ByteSpace",
	description:
		"Explore courses, build skills, and grow with the ByteSpace learning community.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
