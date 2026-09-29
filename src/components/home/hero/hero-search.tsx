import { FiSearch } from "react-icons/fi";

export function HeroSearch() {
	return (
		<search>
			<form
				action="#courses"
				className="mx-auto mt-10 flex w-full max-w-145.25 flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:mt-14.5"
			>
				<label htmlFor="hero-search" className="sr-only">
					Search courses, topics, or creators
				</label>

				<div className="flex min-h-13 w-full min-w-0 items-center rounded-full bg-white px-6 sm:h-13 sm:flex-1">
					<FiSearch
						aria-hidden="true"
						size={20}
						className="mr-2 shrink-0 text-gray-400"
					/>

					<input
						id="hero-search"
						name="q"
						type="search"
						placeholder="Course, topic, creator"
						autoComplete="off"
						className="h-full min-w-0 flex-1 bg-transparent font-body text-base text-gray-950 outline-none placeholder:text-gray-400"
					/>
				</div>

				<button
					type="submit"
					className="h-11.5 w-full shrink-0 rounded-full bg-lime px-6 font-body font-medium text-base text-black transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98] sm:w-auto"
				>
					Search
				</button>
			</form>
		</search>
	);
}
