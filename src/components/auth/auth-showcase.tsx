import Image from "next/image";
import { FaChartSimple, FaStar } from "react-icons/fa6";

const students = [1, 2, 3, 4, 5] as const;

function MiniCourseCard({
	className,
	featured = false,
}: {
	className: string;
	featured?: boolean;
}) {
	return (
		<article
			className={`absolute rounded-[25px] bg-white p-4 text-black shadow-[0_18px_45px_rgb(0_0_0/0.16)] ${className}`}
		>
			<div className="relative overflow-hidden rounded-[14px]">
				<Image
					src={featured ? "/courses/Frame (2).svg" : "/courses/Frame (1).svg"}
					alt=""
					width={340}
					height={190}
					priority
					className="h-44 w-full object-cover"
				/>
				<div className="absolute inset-x-3 bottom-3 flex justify-between gap-2 text-[10px] text-gray-700">
					{["17 Lessons", "2 hours 16 mins", "59 Comments"].map((item) => (
						<span
							key={item}
							className="rounded-full bg-white/80 px-3 py-2 backdrop-blur-sm"
						>
							{item}
						</span>
					))}
				</div>
			</div>
			<div className="mt-4 flex items-start justify-between gap-3">
				<div>
					<h3 className="font-heading font-semibold text-[19px]">
						{featured ? "the Power of Big Data" : "Build Digital Asset"}
					</h3>
					<p className="mt-1 text-[11px] text-gray-400">
						by <span className="text-primary">purepearl studio</span>
					</p>
				</div>
				<p className="flex items-center gap-1 text-gray-700">
					4.5 <FaStar className="text-lime" />
				</p>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<span className="rounded-full bg-gray-50 px-3 py-2 text-gray-700 text-xs">
					<FaChartSimple className="mr-1 inline" /> Beginner
				</span>
				<div className="flex">
					{students.slice(0, 4).map((student) => (
						<Image
							key={student}
							src={`/avatars/student-(${student}).svg`}
							alt=""
							width={31}
							height={31}
							className="-ml-2 size-8 rounded-full border-2 border-white first:ml-0"
						/>
					))}
					<span className="-ml-2 grid size-8 place-items-center rounded-full border-2 border-white bg-black text-[10px] text-white">
						26+
					</span>
				</div>
			</div>
			<p className="mt-4 text-gray-400 text-xs">
				<strong className="text-[20px] text-primary">$25</strong>/lifetime
			</p>
		</article>
	);
}

export function AuthShowcase() {
	return (
		<div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-155">
			<MiniCourseCard className="top-45 left-0 z-10 w-92.5 opacity-95" />
			<MiniCourseCard
				featured
				className="top-22.5 left-28 z-20 w-93.75"
			/>
			<Image
				src="/hero/ornament-ring.svg"
				alt=""
				width={103}
				height={103}
				className="absolute top-32 left-12.5 z-30 size-25.75"
			/>
			<Image
				src="/hero/ornament-triangle.svg"
				alt=""
				width={125}
				height={137}
				style={{ width: "auto" }}
				className="absolute bottom-2 left-2.5 z-30 h-34.25 w-auto"
			/>
			<Image
				src="/hero/ornament-white-right.svg"
				alt=""
				width={105}
				height={110}
				style={{ width: "auto" }}
				className="absolute right-12 bottom-22 z-30 h-27.5 w-auto"
			/>
			<div className="absolute right-0 bottom-0 z-40 w-64.5 rounded-2xl bg-lime p-4 text-black shadow-lg">
				<p className="font-medium">Happy Students</p>
				<p className="text-xs">
					4.5 (240) <FaStar className="inline text-primary" />
				</p>
				<div className="mt-2 flex">
					{students.map((student) => (
						<Image
							key={student}
							src={`/avatars/student-(${student}).svg`}
							alt=""
							width={42}
							height={42}
							className="-ml-3 size-10 rounded-full border-2 border-white first:ml-0"
						/>
					))}
					<span className="-ml-3 grid size-10 place-items-center rounded-full border-2 border-white bg-gray-950 text-white text-xs">
						2K+
					</span>
				</div>
			</div>
		</div>
	);
}
