import styles from "./Lesson.module.scss";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Tag from "../Tag";
import classNames from "classnames";

export default function Lesson({ data }) {
	return (
		<>
			<Row className={classNames(styles.lesson)}>
				<Col>
					<p>{data.i}</p>
				</Col>
				<Col>
					<p>{data.title}</p>
					<p>{data.description}</p>
					{data.tags.length && (
						<p>
							{data.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</p>
					)}
					{data.recording && <Link href={data.recording}>Recoding</Link>}
				</Col>
				<Col>
					<p>{data.date}</p>
				</Col>
			</Row>
		</>
	);
}
