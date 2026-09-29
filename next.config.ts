import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				pathname: "/dr5jpj9qs/image/upload/**",
			},
		],
	},
	async headers() {
		return [
			...[
				"/courses/:path*",
				"/hero/:path*",
				"/avatars/:path*",
				"/women.svg",
				"/features/:path*",
				"/testimonials/:path*",
			].map((source) => ({
				source,
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=86400, stale-while-revalidate=604800",
					},
				],
			})),
			{
				source: "/partners/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
