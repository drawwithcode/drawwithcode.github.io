import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Header() {
  return <Container fluid>
    <Row>
      <Col>
        [Prev]
      </Col>
      <Col className="text-center">
        <Link href="/">[Creative coding]</Link>
      </Col>
      <Col className="text-end">
        [Next]
      </Col>
    </Row>
  </Container>
}