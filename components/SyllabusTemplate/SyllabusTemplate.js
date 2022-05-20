import Footer from "../Footer";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SyllabusTemplate.module.scss";
import ArrowLink from "../ArrowLink";
// import P5Effect from "../P5Effect";
import Timeline from "../Timeline";
import Lesson from "../Lesson";
import ReactMarkdown from "react-markdown";

export default function SyllabusTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<Container>
				<Row>
					<Col>
						<ReactMarkdown>{data["syllabus-text"]}</ReactMarkdown>
					</Col>
				</Row>
				<Row>
					<Col>
						<Timeline data={data.calendar} />
					</Col>
				</Row>
				<Row>
					<Col>
						<ArrowLink url={data["channel"]}>Telegram</ArrowLink>
						<ArrowLink url={data["github"]}>Github</ArrowLink>
						<ArrowLink url={data["studies-manifest"]}>
							Manifesto degli studi
						</ArrowLink>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Lessons</h3>
						{data.calendar.lessons.map((lesson, i) => (
							<Lesson key={i} data={{i,...lesson}} />
						))}
						{/* <P5Effect /> */}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
