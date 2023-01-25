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
					<h3>{data.date}</h3>
				</Col>
				<Col>
					<h4>{data.title}</h4>
					<p>{data.description}</p>
					{data.tags.length && (
						<p>
							{data.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</p>
					)}
					{data.recording && <Link href={data.recording}>Recoding</Link>}
					<h5><Link href="/">Recoding</Link></h5>
				</Col>
			</Row>
		</Container>
	);
}
