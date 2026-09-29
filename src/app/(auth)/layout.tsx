export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <div data-auth-page>{children}</div>;
}
