import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
	return <Container fluid>
    <Row>
      <Col>
        [Loghi]
      </Col>
      <Col className="text-center">
        [Draw with Code: Creative Coding]
      </Col>
      <Col className="text-end">
        [Socials]
      </Col>
    </Row>
  </Container>;
}
