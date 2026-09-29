import { AuthFormCard } from "@/components/auth/auth-form-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { registerMetadata } from "../metadata";

export const metadata = registerMetadata;

export default function RegisterPage() {
	return (
		<AuthShell
			eyebrow="Sign up and come in"
			description="The registration process is straightforward, uncomplicated, and efficient, allowing you to sign up quickly, easily, and at no cost."
		>
			<AuthFormCard
				mode="register"
				eyebrow="Create an Account"
				title={
					<>
						Welcome to
						<br /> ByteSpace
					</>
				}
				buttonLabel="Continue"
				footerText="Already have an account?"
				footerLinkLabel="Login"
				footerHref="/login"
			/>
		</AuthShell>
	);
}
