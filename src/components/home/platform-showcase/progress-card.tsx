export function ProgressCard() {
	return (
		<div className="rounded-2xl bg-white p-4 shadow-sm">
			<p className="text-xs">Learning Progress</p>
			<p className="my-2 font-bold text-[48px] leading-none">55%</p>
			<div className="h-2 rounded-full bg-gray-50">
				<div className="h-full w-[55%] rounded-full bg-lime" />
			</div>
		</div>
	);
}
