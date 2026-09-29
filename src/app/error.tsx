"use client";

import { FiRefreshCw } from "react-icons/fi";
import type { ErrorPageProps } from "@/types/components";

export default function ErrorPage({ reset }: ErrorPageProps) {
	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-5">
			<div className="mx-auto flex max-w-md flex-col items-center text-center">
				<div className="grid size-14 place-items-center rounded-full bg-gray-50">
					<span className="font-heading font-semibold text-2xl text-primary">
						!
					</span>
				</div>

				<h1 className="mt-6 font-heading font-semibold text-3xl text-gray-950 tracking-[-0.5px]">
					Something went wrong
				</h1>

				<p className="mt-3 font-body text-gray-400 text-sm leading-6">
					We couldn&apos;t load this page. Please try refreshing the content.
				</p>

				<button
					type="button"
					onClick={reset}
					className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-body font-medium text-sm text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
				>
					<FiRefreshCw aria-hidden="true" className="size-4" />
					Try again
				</button>
			</div>
		</main>
	);
}
