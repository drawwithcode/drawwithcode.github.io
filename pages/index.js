import MainPageTemplate from "../components/MainPageTemplate";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { getAllEditionsData } from "../lib/load-editions";

export async function getStaticProps() {
	const editions = await getAllEditionsData();
	return {
		props: {
			editions,
		},
	};
}

export default function Home({ editions }) {
	return (
		<div>
			<Head>
				<title>Draw with Code</title>
				<meta name="description" content="Creative coding course at PoliMi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainPageTemplate editions={editions} />
		</div>
	);
}
