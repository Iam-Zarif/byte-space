export function RevenueCard({
	title,
	period,
	amount,
	compact = false,
}: {
	title: string;
	period: string;
	amount: string;
	compact?: boolean;
}) {
	return (
		<div className="rounded-2xl bg-primary p-4 text-white">
			<p className="text-sm">{title}</p>
			<p className="text-[10px] opacity-80">{period}</p>
			<p className="my-2 font-bold text-xl">{amount}</p>
			{compact ? (
				<span className="rounded-full bg-lime px-2 py-1 text-[10px] text-black">
					+12%
				</span>
			) : (
				<div className="h-1.5 rounded-full bg-white/30">
					<div className="h-full w-[55%] rounded-full bg-lime" />
				</div>
			)}
		</div>
	);
}
