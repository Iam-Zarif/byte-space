import Image from "next/image";
export function StudentStack({
	students,
	extra,
}: {
	students: string[];
	extra: number;
}) {
	return (
		<div className="flex items-center" title={`${extra} more students`}>
			{students.map((src, index) => (
				<Image
					key={src}
					src={src}
					alt=""
					width={32}
					height={32}
					className={`size-8 rounded-full border border-white object-cover ${index ? "-ml-2" : ""}`}
				/>
			))}
			<span className="-ml-2 grid size-8 place-items-center rounded-full bg-lime text-black text-xs">
				{extra}+
			</span>
		</div>
	);
}
