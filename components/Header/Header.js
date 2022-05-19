import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Header() {
  return <Container fluid>
    <Row>
      <Col className="text-center">
        <div className="d-flex justify-content-around">
          <Link href="/">Syllabus</Link>
          <Link href="/">Assignments</Link>
          <Link href="/">Case Studies</Link>
          <Link href="/">Team Project</Link>
        </div>
      </Col>
    </Row>
  </Container>
}