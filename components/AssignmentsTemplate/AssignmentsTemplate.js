import styles from "./Assignments.module.scss";
import Header from "../Header";
export default function AssignmentsTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<p>Assignments {data.edition}</p>
			<p dangerouslySetInnerHTML={{ __html: data.assignmentsTextHtml }}/>
		</>
	);
}
