import { Ornament } from "./ornament";

export function HeroOrnaments() {
	return (
		<>
			<Ornament
				src="/hero/ornament-lime-left.svg"
				width={267}
				height={387}
				className="top-55.25 left-0 hidden lg:block"
			/>

			<Ornament
				src="/hero/ornament-white-small.svg"
				width={176}
				height={176}
				className="top-119.25 left-[calc(50%-562px)] hidden lg:block"
			/>

			<Ornament
				src="/hero/ornament-lime-right.svg"
				width={213}
				height={372}
				className="top-55.25 right-0 hidden lg:block"
			/>

			<Ornament
				src="/hero/ornament-triangle.svg"
				width={189}
				height={189}
				className="top-116 right-36.5 hidden lg:block"
			/>

			<Ornament
				src="/hero/ornament-ring.svg"
				width={342}
				height={342}
				className="top-170.5 -left-4.5 hidden lg:block"
			/>

			<Ornament
				src="/hero/ornament-white-small.svg"
				width={330}
				height={330}
				className="top-168 -right-4.25 hidden rotate-180 lg:block"
			/>
		</>
	);
}
