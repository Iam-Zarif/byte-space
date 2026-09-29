import type { CourseGridProps } from "@/types/components";
import { CourseCard } from "./course-card";
export function CourseGrid({ courses }: CourseGridProps) {
	if (!courses.length)
		return (
			<p role="status" className="py-16 text-center text-gray-400">
				No courses in this category yet. Try Featured.
			</p>
		);
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</div>
	);
}
