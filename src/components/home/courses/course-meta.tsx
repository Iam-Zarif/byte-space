import { BiBarChart } from "react-icons/bi";
import type { Course } from "@/types/content";
import { StudentStack } from "./student-stack";
export function CourseMeta({ course }: { course: Course }) {
	return (
		<div className="mt-4 flex items-center gap-3">
			<span className="flex h-8 items-center gap-1.5 rounded-full bg-gray-50 px-3 text-gray-700 text-xs">
				<BiBarChart size={18} aria-hidden="true" />
				{course.level}
			</span>
			<StudentStack students={course.students} extra={course.extraStudents} />
		</div>
	);
}
