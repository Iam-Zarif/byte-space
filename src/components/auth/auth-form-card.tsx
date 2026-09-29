import Link from "next/link";
import type { ReactNode } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthField } from "./auth-field";

type AuthFormCardProps = {
	mode: "login" | "register";
	eyebrow: string;
	title: ReactNode;
	buttonLabel: string;
	footerText: string;
	footerLinkLabel: string;
	footerHref: string;
};

export function AuthFormCard({
	mode,
	eyebrow,
	title,
	buttonLabel,
	footerText,
	footerLinkLabel,
	footerHref,
}: AuthFormCardProps) {
	const isLogin = mode === "login";

	return (
		<div className="flex min-h-[680px] w-full max-w-[580px] flex-col rounded-[28px] bg-white px-7 py-10 text-gray-950 shadow-[0_24px_70px_rgb(0_0_0/0.12)] sm:px-14 sm:py-16 lg:min-h-[784px] lg:px-16">
			<p className="font-body text-[18px] text-primary">{eyebrow}</p>
			<h2 className="mt-1 font-heading font-semibold text-[42px] leading-[1.2] tracking-[-1.8px] sm:text-[46px]">
				{title}
			</h2>

			<form className="mt-11" action="#" method="post">
				<div className="space-y-6">
					{!isLogin && (
						<AuthField
							id="fullName"
							label="Full Name"
							placeholder="Jamie Davis"
							autoComplete="name"
						/>
					)}
					<AuthField
						id="email"
						label="Email"
						type="email"
						placeholder="designer@example.com"
						autoComplete="email"
					/>
					<AuthField
						id="password"
						label="Password"
						type="password"
						placeholder="********"
						autoComplete={isLogin ? "current-password" : "new-password"}
					/>
				</div>

				<div className="mt-6 flex justify-end">
					<button
						type="submit"
						className="min-w-[104px] rounded-full bg-lime px-7 py-3 font-body font-medium text-[18px] text-black transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
					>
						{buttonLabel}
					</button>
				</div>
			</form>

			{isLogin && (
				<div className="mt-20">
					<div className="flex items-center gap-3 text-gray-400">
						<span className="h-px flex-1 bg-gray-200" />
						<span>or</span>
						<span className="h-px flex-1 bg-gray-200" />
					</div>
					<div className="mt-11 flex justify-center gap-4">
						<button
							type="button"
							aria-label="Continue with Facebook"
							className="grid size-[72px] place-items-center rounded-[22px] border border-gray-200 text-black hover:bg-gray-50"
						>
							<FaFacebook size={36} aria-hidden="true" />
						</button>
						<button
							type="button"
							aria-label="Continue with Google"
							className="grid size-[72px] place-items-center rounded-[22px] border border-gray-200 text-black hover:bg-gray-50"
						>
							<FaGoogle size={31} aria-hidden="true" />
						</button>
					</div>
				</div>
			)}

			<p className="mt-auto pt-10 text-center font-body text-[15px] text-gray-400">
				{footerText}{" "}
				<Link href={footerHref} className="text-primary hover:underline">
					{footerLinkLabel}
				</Link>
			</p>
		</div>
	);
}
