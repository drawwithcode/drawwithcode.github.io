import styles from "./TeamProjectsTemplate.module.scss";
import Header from "../Header";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Footer from "../Footer";
export default function TeamProjectsTemplate({ data }) {
  console.log(data);
  return (
    <>
      <Header edition={data.edition} />
      <Container>
        <Row>
          <Col>
            <ReactMarkdown>{data["team-projects-text"]}</ReactMarkdown>
          </Col>
        </Row>
        <Row xs={1} md={2} className="g-2">
          {data.groupProjects.map((d) => (
            <Col>
              <Card>
                <Card.Img></Card.Img>
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.students}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
