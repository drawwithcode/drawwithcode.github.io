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
              <Card.Img variant="top" src="https://holder.js/100px100px" />
              <Card.Body>
                <Card.Title>{d["github-username"]}</Card.Title>
                <Card.Link
                  href={`https://github.com/drawwithcode/${d["github-username"]}`}
                >
                  Repository
                </Card.Link>
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
