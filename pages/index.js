import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Draw with Code</title>
				<meta name="description" content="Creative coding course at PoliMi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Draw with code</h1>
		</div>
	);
}
