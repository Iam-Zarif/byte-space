import "./globals.css";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import { clashDisplay, poppins, satoshi } from "./fonts";

export { metadata } from "./metadata";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
		>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
