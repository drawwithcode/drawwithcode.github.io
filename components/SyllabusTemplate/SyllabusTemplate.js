import Footer from "../Footer";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SyllabusTemplate.module.scss";
import ArrowLink from "../ArrowLink";
import Lection from "../Lection";

export default function SyllabusTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} />
			<Container>
				<Row>
					<Col>
						<h4>{data["academic-year"]}</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>{data["syllabus-text"]}</p>
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
							<p key={i}>{lesson.title}</p>
						))}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
