import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Header({edition}) {
  return <Container fluid>
    <Row>
      <Col className="text-center">
        <div className="d-flex justify-content-around">
          <Link href={"/"+edition}>Syllabus</Link>
          <Link href={"/"+edition+"/assignments"}>Assignments</Link>
          <Link href={"/"+edition+"/case-studies"}>Case Studies</Link>
          <Link href={"/"+edition+"/team-projects"}>Team Project</Link>
        </div>
      </Col>
    </Row>
  </Container>
}