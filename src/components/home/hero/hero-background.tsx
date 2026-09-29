import Image from "next/image";

export function HeroBackground() {
	return (
		<Image
			src="/hero/hero-arc.svg"
			alt=""
			width={1149}
			height={442}
			priority
			sizes="(max-width: 639px) 760px, (max-width: 1023px) 900px, 1149px"
			style={{ height: "auto" }}
			className="pointer-events-none absolute top-[590px] left-1/2 h-auto w-[760px] max-w-none -translate-x-1/2 select-none sm:w-[900px] lg:top-[582px] lg:w-[1149px]"
		/>
	);
}
