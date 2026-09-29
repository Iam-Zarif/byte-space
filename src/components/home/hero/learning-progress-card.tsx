export function LearningProgressCard() {
	return (
		<div className="absolute top-[651px] left-1/2 z-30 hidden h-[131px] w-[232px] translate-x-[122px] rounded-xl bg-white p-4 shadow-sm md:block">
			<p className="font-body font-medium text-gray-950 text-sm">
				Learning Progress
			</p>

			<p className="mt-1 font-heading font-medium text-[48px] text-gray-950 leading-none tracking-[-1px]">
				55%
			</p>

			<div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-50">
				<div className="h-full w-[55%] rounded-full bg-lime" />
			</div>
		</div>
	);
}
