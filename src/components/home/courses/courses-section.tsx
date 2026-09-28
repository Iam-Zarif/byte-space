import { CourseExplorer } from "./course-explorer";
export function CoursesSection() {
	return (
		<section
			id="courses"
			aria-labelledby="courses-heading"
			className="bg-white px-5 py-20 sm:px-6"
		>
			<div className="mx-auto max-w-[1200px]">
				<h2
					id="courses-heading"
					className="text-center font-bold text-3xl text-[#080c20] leading-[1.15] tracking-[-1px] sm:text-[44px]"
				>
					Discover Your Passion,
					<br />
					Build Your Skills
				</h2>
				<p className="mx-auto mt-5 mb-11 max-w-[920px] text-center text-base text-gray-400 leading-7">
					At Bytespace Courses, we bring you closer to life-changing knowledge.
					Explore a variety of courses across different fields, from technology
					to the arts, and make a difference in your career and life.
				</p>
				<CourseExplorer />
			</div>
		</section>
	);
}
