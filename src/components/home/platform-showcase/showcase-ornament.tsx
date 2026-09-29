import Image from "next/image";
export function ShowcaseOrnament({ className }: { className: string }) {
	return (
		<Image
			src="/hero/ornament-white-small.svg"
			alt=""
			width={389}
			height={387}
			sizes="(max-width: 767px) 24vw, 140px"
			style={{
				height: "auto",
				filter:
					"brightness(0) saturate(100%) invert(91%) sepia(99%) saturate(1451%) hue-rotate(14deg) brightness(109%) contrast(104%)",
			}}
			className={`pointer-events-none absolute h-auto w-[24%] -rotate-[12deg] ${className}`}
		/>
	);
}
