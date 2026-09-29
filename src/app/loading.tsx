export default function Loading() {
	return (
		<main
			className="flex min-h-screen items-center justify-center bg-white"
			aria-busy="true"
			aria-label="Loading page"
		>
			<div className="flex flex-col items-center gap-4">
				<div className="relative size-12">
					<div className="absolute inset-0 rounded-full border-4 border-gray-100" />

					<div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary" />
				</div>

				<p className="font-body text-gray-400 text-sm">Loading ByteSpace...</p>
			</div>
		</main>
	);
}
