import Image from "next/image";
import { FaStar } from "react-icons/fa";

export function ShowcaseStudents() {
	return (
		<div className="rounded-2xl bg-white p-4">
			<p className="text-sm">Happy Students</p>
			<p className="mb-2 text-[10px]">
				4.5 (240) <FaStar aria-hidden="true" className="inline text-lime" />
			</p>
			<div className="flex items-center">
				{[1, 2, 3, 4, 5, 6, 7].map((student) => (
					<Image
						key={student}
						src={`/avatars/student-(${student}).svg`}
						alt=""
						width={32}
						height={32}
						className="-mr-2 size-8 rounded-full border border-white object-cover"
					/>
				))}
				<span className="relative grid size-8 place-items-center rounded-full bg-lime text-[10px]">
					2K+
				</span>
			</div>
		</div>
	);
}
