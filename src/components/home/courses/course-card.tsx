import { FaStar } from "react-icons/fa";
import type { Course } from "@/types/content";
import { CourseImage } from "./course-image";
import { CourseMeta } from "./course-meta";
export function CourseCard({ course }: { course: Course }) {
	return (
		<article className="min-w-0 rounded-[24px] border border-gray-200 bg-white p-[15px] text-black">
			<CourseImage key={course.image} src={course.image} title={course.title} />
			<div className="mt-5 flex items-center gap-3">
				<h3
					title={course.title}
					className="min-w-0 flex-1 truncate font-bold text-xl leading-7 tracking-[-0.5px]"
				>
					{course.title}
				</h3>
				<span
					className="flex shrink-0 items-center gap-1 text-gray-700 text-lg"
					title={`${course.rating} out of 5 stars`}
				>
					{course.rating}
					<FaStar className="text-gray-200" size={17} aria-hidden="true" />
				</span>
			</div>
			<p className="text-gray-700 text-xs">
				by <span className="text-primary">{course.creator}</span>
			</p>
			<CourseMeta course={course} />
			<p className="mt-4 mb-1 text-gray-700 text-xs">
				<span className="font-bold text-primary text-xl">${course.price}</span>/
				{course.billingLabel}
			</p>
		</article>
	);
}
