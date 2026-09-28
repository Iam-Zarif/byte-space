import Image from "next/image";
import { FiStar } from "react-icons/fi";

const STUDENTS = [
	"/avatars/student-(1).svg",
	"/avatars/student-(2).svg",
	"/avatars/student-(3).svg",
	"/avatars/student-(4).svg",
	"/avatars/student-(5).svg",
	"/avatars/student-(6).svg",
	"/avatars/student-(7).svg",
] as const;

export function HappyStudentsCard() {
	return (
		<div className="absolute top-[837px] left-1/2 z-30 hidden h-[121px] w-[258px] -translate-x-[392px] rounded-xl bg-white p-4 shadow-sm md:block">
			<p className="font-body font-medium text-gray-950 text-sm leading-[1.2]">
				Happy Students
			</p>

			<p className="mt-0.5 font-body text-gray-700 text-xs">
				4.5 (240){" "}
				<FiStar aria-hidden="true" className="inline fill-current text-lime" />
			</p>

			<div className="mt-2 flex items-center">
				{STUDENTS.map((student, index) => (
					<Image
						key={student}
						src={student}
						alt=""
						width={43}
						height={43}
						className={`size-[43px] rounded-full border-2 border-white object-cover ${
							index === 0 ? "" : "-ml-4"
						}`}
					/>
				))}

				<span className="-ml-4 grid size-[43px] place-items-center rounded-full border-2 border-white bg-lime px-2 font-body font-medium text-black text-xs">
					2K+
				</span>
			</div>
		</div>
	);
}
