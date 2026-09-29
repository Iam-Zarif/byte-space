export function CourseInfoCard() {
	return (
		<div className="absolute top-[639px] left-1/2 z-30 hidden h-[70px] w-[208px] -translate-x-[316px] rounded-xl bg-white p-4 shadow-sm md:block">
			<p className="font-body font-medium text-gray-950 text-sm leading-[1.2]">
				UI/UX Design
			</p>

			<div className="mt-1 flex items-center gap-2 font-body text-gray-400 text-xs">
				<span>200 Courses</span>
				<span aria-hidden="true">•</span>
				<span>1000+ Students</span>
			</div>
		</div>
	);
}
