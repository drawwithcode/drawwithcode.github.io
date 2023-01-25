import Header from "../Header";
import Footer from "../Footer";
import { Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap";
import AssignmentGallery from "../AssignmentGallery";
import ReactMarkdown from "react-markdown";
import { Col, Container, Row } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import classNames from "classnames";

import styles from "./Assignments.module.scss";

export default function AssignmentsTemplate({ data }) {
  return (
    <>
      <Header edition={data.edition} />
      <Container>
        <Row>
          <Col>
            <p>Assignments {data.edition}</p>
            <ReactMarkdown>{data["assignments-text"]}</ReactMarkdown>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0" variant="custom">
          {data.calendar.assignments.map((assignment, i) => (
            <Accordion.Item eventKey={i} key={i}>
              <CustomToggle
                eventKey={i}
                title={assignment.title}
                description={assignment.description}
              />
              <Accordion.Body>
                <AssignmentGallery
                  assignment={assignment}
                  students={data.students}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}

function CustomToggle({ title, description, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      className={classNames(styles.customToggle, "w-100")}
    >
      <Container fluid>
        <Row>
          <Col xs={1}>
            <h1><BsPlus /></h1>
          </Col>
          <Col xs={5}><h1>{title}</h1></Col>
          <Col xs={6}><p>{description}</p></Col>
        </Row>
      </Container>
    </button>
  );
}
