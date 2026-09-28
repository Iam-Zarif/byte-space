import Image from "next/image";

type OrnamentProps = {
	src: string;
	width: number;
	height: number;
	className: string;
};

export function Ornament({ src, width, height, className }: OrnamentProps) {
	return (
		<Image
			src={src}
			alt=""
			width={width}
			height={height}
			aria-hidden="true"
			className={`pointer-events-none absolute select-none ${className}`}
		/>
	);
}
