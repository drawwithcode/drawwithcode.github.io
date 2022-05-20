import styles from "./CaseStudiesTemplate.module.scss";
import Header from "../Header";
import ReactMarkdown from "react-markdown";
export default function CaseStudiesTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<p>Case studies {data.edition}</p>
			<ReactMarkdown>{data["case-studies-text"]}</ReactMarkdown>
		</>
	);
}
