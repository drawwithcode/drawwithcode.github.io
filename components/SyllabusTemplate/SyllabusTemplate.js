import Footer from "../Footer";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SyllabusTemplate.module.scss";
import ArrowLink from "../ArrowLink";
// import P5Effect from "../P5Effect";
import Timeline from "../Timeline";
import Lesson from "../Lesson";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";

export default function SyllabusTemplate({ data }) {
	return (
		<>
			<Header edition={data.edition} academicYear={data["academic-year"]} />
			<Container className="p-0" fluid>
				<Row>
					<Col>
						<div className={classNames(styles.coverBgEffect)}>
							<div className={classNames(styles.info, "p-4")}>
								<span>Creative Coding {data["academic-year"]}</span>
								<span>Background inspired by {data["bg-effect-by"]}</span>
							</div>
							<span className={classNames(styles.scrollDown, "p-4")}>V</span>
						</div>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<Timeline data={data.calendar} />
					</Col>
				</Row>
				<Row>
					<Col>
						<ReactMarkdown>{data["syllabus-text"]}</ReactMarkdown>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<ArrowLink url={data["channel"]}>Telegram Channel</ArrowLink>
						<ArrowLink url={data["github"]}>Github Repository</ArrowLink>
						<ArrowLink url={data["studies-manifest"]}>Manifesto degli studi</ArrowLink>
					</Col>
				</Row>
				<Row>
					<Col>
						<h5 className="mb-4">Calendar</h5>
					</Col>
				</Row>
			</Container>
			{data.calendar.lessons.map((lesson, i) => (
				<Lesson key={i} data={{ i, ...lesson }} />
			))}
			<Footer />
		</>
	);
}
