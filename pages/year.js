import EditionPageTemplate from "../components/EditionPageTemplate";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Draw with Code</title>
				<meta name="description" content="Creative coding course at PoliMi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<EditionPageTemplate/>
		</div>
	);
}