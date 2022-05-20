import styles from "./CaseStudiesTemplate.module.scss";
import Header from "../Header";
export default function CaseStudiesTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<p>Case studies {data.edition}</p>
			<p dangerouslySetInnerHTML={{ __html: data.caseStudiesTextHtml }}/>
		</>
	);
}
