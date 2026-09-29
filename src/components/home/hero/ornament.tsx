import Image from "next/image";
import type { OrnamentProps } from "@/types/components";

export function Ornament({ src, width, height, className }: OrnamentProps) {
	return (
		<Image
			src={src}
			alt=""
			width={width}
			height={height}
			style={{ width: "auto", height: "auto" }}
			aria-hidden="true"
			className={`pointer-events-none absolute select-none ${className}`}
		/>
	);
}
