import styles from "./Assignments.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import AssignmentGallery from "../AssignmentGallery";
import ReactMarkdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";
export default function AssignmentsTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<Container>
				<Row>
					<Col>
						<p>Assignments {data.edition}</p>
						<ReactMarkdown>{data["assignments-text"]}</ReactMarkdown>
					</Col>
				</Row>
				{data.calendar.assignments.map((assignment, i) => (
					<Row key={i}>
						<Col>
							<AssignmentGallery assignment={assignment} />
						</Col>
					</Row>
				))}
			</Container>
			<Footer />
		</>
	);
}
