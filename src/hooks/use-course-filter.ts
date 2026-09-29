"use client";
import { useState } from "react";
import type { Course } from "@/types/content";
export function useCourseFilter(courses: Course[]) {
	const [category, setCategory] = useState("Featured");
	const [expanded, setExpanded] = useState(false);
	const filteredCourses = courses.filter((course) =>
		category === "Featured" ? course.featured : course.category === category,
	);
	return { category, setCategory, expanded, setExpanded, filteredCourses };
}
