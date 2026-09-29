import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-6">
			<div className="max-w-xl text-center">
				<p className="font-body font-medium text-primary text-sm uppercase tracking-[0.2em]">
					404 Error
				</p>

				<h1 className="mt-4 font-heading font-semibold text-4xl text-gray-950 tracking-[-1px] sm:text-5xl">
					Page not found
				</h1>

				<p className="mx-auto mt-4 max-w-md font-body text-base text-gray-400 leading-7">
					The page you&apos;re looking for doesn&apos;t exist or may have been
					moved.
				</p>

				<Link
					href="/"
					className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 font-body font-medium text-sm text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
				>
					Back to Home
				</Link>
			</div>
		</main>
	);
}
