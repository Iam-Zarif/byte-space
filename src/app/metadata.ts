import type { Metadata } from "next";

const deploymentHost =
	process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ??
	(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");
const title = "ByteSpace | Learn, Build, and Grow";
const description =
	"Explore expert-led courses, build practical skills, and grow with the ByteSpace learning community.";
const previewImage =
	"https://res.cloudinary.com/dr5jpj9qs/image/upload/v1790665729/byte-space_qwukgo.png";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: title,
		template: "%s | ByteSpace",
	},
	description,
	applicationName: "ByteSpace",
	keywords: [
		"online learning",
		"professional courses",
		"skill development",
		"course creators",
		"ByteSpace",
	],
	authors: [{ name: "ByteSpace" }],
	creator: "ByteSpace",
	publisher: "ByteSpace",
	category: "education",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		siteName: "ByteSpace",
		title,
		description,
		images: [
			{
				url: previewImage,
				alt: "ByteSpace online learning platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [previewImage],
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/brand/favicon.svg",
		shortcut: "/brand/favicon.svg",
	},
};
