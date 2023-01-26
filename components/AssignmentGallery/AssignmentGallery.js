import styles from "./AssignmentGallery.module.scss";
import { Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { Card } from "react-bootstrap";

export default function AssignmentGallery({ assignment, students }) {
  return (
    <div className={classNames(styles.gallery)}>
      <Row xs={1} md={4} className="g-4">
        {students.map((d, i) => (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src="holder.js/100x100" />
              <Card.Body>
                <Card.Title>{d["github-username"]}</Card.Title>
                <span className={classNames(styles.bit, "me-1")}>📄</span> 
                <Card.Link
                  href={`https://github.com/drawwithcode/${d["github-username"]}`}
                >
                Repository
                </Card.Link>
                <span className={classNames(styles.bit, "ms-2","me-1")}>📄</span> 
                <Card.Link
                  href={`https://drawwithcode.github.io/${assignment.prefix}-${d["github-username"]}`}
                >
                  GH Page
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
