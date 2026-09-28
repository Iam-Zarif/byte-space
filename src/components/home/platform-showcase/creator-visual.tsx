import Image from "next/image";
import { RevenueCard } from "./revenue-card";
import { ShowcaseOrnament } from "./showcase-ornament";
import { ShowcaseStudents } from "./showcase-students";
export function CreatorVisual() {
	return (
		<div
			className="relative mx-auto aspect-square w-full max-w-[580px]"
			aria-hidden="true"
		>
			<div className="absolute top-[3%] left-0 w-[46%]">
				<RevenueCard
					title="Total Revenue"
					period="July 1–28"
					amount="$120.29"
				/>
			</div>
			<div className="absolute top-[29%] left-0 w-[27%]">
				<RevenueCard
					title="Year to Date"
					period="2023"
					amount="$1,200.38"
					compact
				/>
			</div>
			<Image
				src="/women.svg"
				alt=""
				width={579}
				height={719}
				sizes="(max-width: 767px) 90vw, 470px"
				className="absolute -top-[2%] left-[1%] h-auto w-[88%]"
			/>
			<ShowcaseOrnament className="top-[18%] right-[17%]" />
			<div className="absolute right-[5%] bottom-[13%]">
				<ShowcaseStudents />
			</div>
		</div>
	);
}
