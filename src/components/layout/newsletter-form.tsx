export function NewsletterForm() {
	return (
		<form
			action="#"
			className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
		>
			<label htmlFor="footer-email" className="sr-only">
				Enter your email
			</label>

			<input
				id="footer-email"
				name="email"
				type="email"
				placeholder="Enter your email"
				autoComplete="email"
				className="h-13 w-full rounded-full border border-gray-200 bg-white px-6 font-body text-base text-gray-950 outline-none placeholder:text-gray-700 focus:border-primary sm:w-94"
			/>

			<button
				type="submit"
				className="h-12 w-26 shrink-0 rounded-full bg-lime font-body font-medium text-base text-gray-950 transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3"
			>
				Search
			</button>
		</form>
	);
}
