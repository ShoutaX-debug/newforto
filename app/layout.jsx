import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Sigitardis | Portofolio",

    description:
		"Halo, saya Sigit Ardis, seorang pengembang web dan teknologi dengan ketertarikan dalam Programmer dan Cyber security. Saya senang mengeksplorasi solusi inovatif dan menghadirkan pengalaman digital yang berkualitas. Selamat datang di portofolio saya!.",

    author: "Sigitardis",
    siteUrl: "https://sigitardis.my.id",
    applicationName: "Sigit",

    openGraph: {
		type: "website",
		url: "sigitardis.my.id",
		title: "Sigitardis | Portofolio",
		site_name: "Sigitardis | Portofolio",
		description: "My name is Sigit, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Sigit Portofolio",
			},
		],
		site_name: "Sigitardis | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
