import styles from "./Lesson.module.scss";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Tag from "../Tag";
import classNames from "classnames";

export default function Lesson({ data }) {
	return (
		<Container className={classNames("mb-5")}>
			<Row className={classNames(styles.lesson)}>
				<Col xs={3}>
					<h4>{data.date}</h4>
				</Col>
				<Col>
					<h4>
						<span className="bit">📖</span> {data.title}{" "}
						<a href={data.slides} target="_blank" rel="noreferrer">
							<span className="bit">↗</span>
						</a>
					</h4>
					{data.description && <p>{data.description}</p>}
					{data.tags.length && (
						<p>
							{data.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</p>
					)}
					{data.recording && (
						<h5>
							<span className="bit">⏯</span> <Link href={data.recording}>Recoding</Link>
						</h5>
					)}
				</Col>
			</Row>
		</Container>
	);
}
