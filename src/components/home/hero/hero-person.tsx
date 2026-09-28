import Image from "next/image";

export function HeroPerson() {
	return (
		<Image
			src="/hero/hero-person.svg"
			alt=""
			width={722}
			height={515}
			priority
			sizes="(max-width: 639px) 390px, (max-width: 1023px) 500px, 722px"
			className="absolute top-[580px] left-[calc(50%+16px)] z-20 h-auto w-[390px] -translate-x-1/2 object-contain sm:w-[500px] lg:top-[512px] lg:left-[calc(50%+40px)] lg:w-[722px]"
		/>
	);
}
