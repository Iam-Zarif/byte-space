"use client";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import { useImageLoad } from "@/hooks/use-image-load";
import type { CourseImageProps } from "@/types/components";
export function CourseImage({ src, title }: CourseImageProps) {
	const { status, onLoad, onError } = useImageLoad();
	return (
		<div
			className="relative aspect-[342/196] overflow-hidden rounded-xl bg-gray-50"
			aria-busy={status === "loading"}
		>
			{status === "loading" && (
				<div
					role="status"
					className="absolute inset-0 bg-gray-100 motion-safe:animate-pulse"
				>
					<span className="sr-only">Loading {title} image</span>
				</div>
			)}
			{status === "error" ? (
				<div className="absolute inset-0 flex items-center justify-center gap-2 text-gray-400 text-sm">
					<FiImage aria-hidden="true" />
					Image unavailable
				</div>
			) : (
				<Image
					src={src}
					alt={title}
					fill
					sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 342px"
					onLoad={onLoad}
					onError={onError}
					className={`object-cover transition-opacity ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
				/>
			)}
		</div>
	);
}
