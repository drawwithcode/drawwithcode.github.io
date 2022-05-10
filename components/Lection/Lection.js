import { Col, Container, Row } from "react-bootstrap";
import styles from "./Lection.module.scss";
export default function Lection() {
  // I know that Lection is an unorthodox spelling.
	return (
		<Container className={styles.lection}>
			<Row>
				<Col>
					<p>[Lesson Title]</p>
					<p>[Date]</p>
				</Col>
				<Col>
					<p>[description]</p>
					<p>[tag][tag][tag][tag]</p>
				</Col>
			</Row>
		</Container>
	);
}
