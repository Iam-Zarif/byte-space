import { AuthFormCard } from "@/components/auth/auth-form-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { loginMetadata } from "../metadata";

export const metadata = loginMetadata;

export default function LoginPage() {
	return (
		<AuthShell
			eyebrow="Sign in with ease"
			description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
		>
			<AuthFormCard
				mode="login"
				eyebrow="Sign In"
				title="Welcome Back"
				buttonLabel="Sign In"
				footerText="New user?"
				footerLinkLabel="Create an account"
				footerHref="/register"
			/>
		</AuthShell>
	);
}
