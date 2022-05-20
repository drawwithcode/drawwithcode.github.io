import styles from "./TeamProjectsTemplate.module.scss";
import Header from "../Header";
import ReactMarkdown from "react-markdown";
export default function TeamProjectsTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<p>Team projects template {data.edition}</p>
			<ReactMarkdown>{data["team-projects-text"]}</ReactMarkdown>
		</>
	);
}
