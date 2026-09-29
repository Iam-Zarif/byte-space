"use client";

import Image from "next/image";
import { useImageLoad } from "@/hooks/use-image-load";
import type { TestimonialAvatarProps } from "@/types/components";

export function TestimonialAvatar({ src, name }: TestimonialAvatarProps) {
	const { status, onLoad, onError } = useImageLoad();
	return (
		<div
			className="relative size-20 shrink-0 overflow-hidden rounded-full bg-gray-100"
			aria-busy={status === "loading"}
		>
			{status === "error" ? (
				<span
					className="grid size-full place-items-center bg-lime font-bold text-2xl text-gray-950"
					role="img"
					aria-label={name}
				>
					{name
						.split(" ")
						.map((part) => part[0])
						.join("")}
				</span>
			) : (
				<>
					{status === "loading" && (
						<span className="absolute inset-0 bg-gray-100 motion-safe:animate-pulse" />
					)}
					<Image
						src={src}
						alt={name}
						width={80}
						height={80}
						sizes="80px"
						onLoad={onLoad}
						onError={onError}
						className={`size-20 object-cover transition-opacity ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
					/>
				</>
			)}
		</div>
	);
}
