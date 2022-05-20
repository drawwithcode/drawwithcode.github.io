import { getAllEditionsId, getEditionData } from "../../lib/load-editions";
import AssignmentsTemplate from "../../components/AssignmentsTemplate";

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllEditionsId();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.edition
	const postData = getEditionData(params.edition);
	return {
		props: {
			postData,
		},
	};
}

export default function Assignments({ postData }) {
	return <AssignmentsTemplate data={postData}/>;
}
