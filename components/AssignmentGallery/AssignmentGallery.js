import styles from "./AssignmentGallery.module.scss";
import { Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
export default function AssignmentGallery({ assignment, students }) {
	return (
		<div className={classNames(styles.gallery)}>
			<Row>
				<Col>+</Col>
				<Col>
					<ReactMarkdown>{assignment.title}</ReactMarkdown>
				</Col>
				<Col>
					<ReactMarkdown>{assignment.description}</ReactMarkdown>
				</Col>
			</Row>
			<Row>
				<Col>
					{students
						.map(
							(d) =>
								"https://drawwithcode.github.io/" +
								assignment.prefix +
								"-" +
								d["github-username"]
						)
						.toString()}
				</Col>
			</Row>
		</div>
	);
}
