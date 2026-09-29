import Image from "next/image";

const ornaments = [
	{
		src: "/hero/ornament-lime-left.svg",
		width: 267,
		height: 387,
		className: "left-0 -top-[217px] w-[267px]",
	},
	{
		src: "/hero/ornament-white-small.svg",
		width: 389,
		height: 387,
		className: "left-[14%] top-4 w-[150px]",
	},
	{
		src: "/hero/ornament-triangle.svg",
		width: 189,
		height: 189,
		className: "-left-[65px] top-[230px] w-[189px] -rotate-[25deg]",
	},
	{
		src: "/hero/ornament-ring.svg",
		width: 346,
		height: 343,
		className: "bottom-[-155px] left-[2%] w-[342px]",
		lime: true,
	},
	{
		src: "/hero/ornament-triangle.svg",
		width: 189,
		height: 189,
		className: "right-[13%] top-0 w-[189px]",
		lime: true,
	},
	{
		src: "/hero/ornament-lime-right.svg",
		width: 213,
		height: 372,
		className: "-right-3 top-2 w-[213px]",
		white: true,
	},
	{
		src: "/hero/ornament-white-right.svg",
		width: 389,
		height: 387,
		className: "-bottom-[130px] right-[3%] w-[275px]",
		lime: true,
	},
];

export function CtaDecorations() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 hidden select-none lg:block"
		>
			{ornaments.map((ornament) => (
				<Image
					key={ornament.className}
					src={ornament.src}
					alt=""
					width={ornament.width}
					height={ornament.height}
					sizes={`${ornament.width}px`}
					className={`absolute h-auto ${ornament.className}`}
					style={{
						filter: ornament.lime
							? "brightness(0) saturate(100%) invert(91%) sepia(99%) saturate(1451%) hue-rotate(14deg) brightness(109%) contrast(104%)"
							: ornament.white
								? "brightness(0) invert(1)"
								: undefined,
					}}
				/>
			))}
		</div>
	);
}
