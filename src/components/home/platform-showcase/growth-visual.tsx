import Image from "next/image";
import { courses } from "@/data/courses";
import { CourseCard } from "../courses/course-card";
import { ProgressCard } from "./progress-card";
import { ShowcaseOrnament } from "./showcase-ornament";
export function GrowthVisual() {
	return (
		<div
			className="relative mx-auto aspect-square w-full max-w-[580px]"
			aria-hidden="true"
		>
			<div className="absolute top-[2%] left-[3%] w-[64%]">
				<CourseCard course={courses[0]} />
			</div>
			<Image
				src="/hero/hero-person.svg"
				alt=""
				width={722}
				height={515}
				sizes="(max-width: 767px) 95vw, 620px"
				className="absolute top-[5%] -left-[11%] h-auto w-[131%] max-w-none drop-shadow-2xl"
			/>
			<div className="absolute top-[38%] right-0 w-[39%]">
				<ProgressCard />
			</div>
			<ShowcaseOrnament className="top-[14%] right-0 z-10" />
		</div>
	);
}
