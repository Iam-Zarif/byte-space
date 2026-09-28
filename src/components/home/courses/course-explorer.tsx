"use client";
import { courseCategories, courses } from "@/data/courses";
import { useCourseFilter } from "@/hooks/use-course-filter";
import { CourseFilters } from "./course-filters";
import { CourseGrid } from "./course-grid";
export function CourseExplorer() {
	const { category, setCategory, expanded, setExpanded, filteredCourses } =
		useCourseFilter(courses);
	return (
		<>
			<CourseFilters
				categories={courseCategories}
				selected={category}
				expanded={expanded}
				onSelect={setCategory}
				onToggle={() => setExpanded(!expanded)}
			/>
			<div aria-live="polite" className="sr-only">
				{filteredCourses.length} courses in {category}
			</div>
			<CourseGrid courses={filteredCourses} />
		</>
	);
}
