import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import Head from "next/head";
// import {motion} from "framer-motion"

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initital-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
				<Navbar />

				<Component {...pageProps} />
				<Footer />
				{/* <HireMe /> */}
			</main>
		</>
	);
}
