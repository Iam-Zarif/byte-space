import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async headers() {
		return ["/hero/:path*", "/avatars/:path*"].map((source) => ({
			source,
			headers: [
				{
					key: "Cache-Control",
					value: "public, max-age=86400, stale-while-revalidate=604800",
				},
			],
		}));
	},
};

export default nextConfig;
