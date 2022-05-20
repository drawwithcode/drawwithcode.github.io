import styles from "./TeamProjectsTemplate.module.scss";
import Header from "../Header";
export default function TeamProjectsTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<p>Team projects template {data.edition}</p>
			<p dangerouslySetInnerHTML={{ __html: data.teamProjectsTextHtml }}/>
		</>
	);
}
