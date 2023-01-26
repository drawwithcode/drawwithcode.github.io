import styles from "./MainPageTemplate.module.scss";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Footer from "../Footer";
import classNames from "classnames";
import Link from "next/link";
import p5Logo from "./p5.svg";
import vscodeLogo from "./VSCode.svg";
import p5VSCode from "./p5VSCode.svg";
import prettierLogo from "./Prettier.svg";
import liveServerLogo from "./LiveServer.svg";
import { Card } from "react-bootstrap";

export default function MainPageTemplate({ editions }) {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        sticky="top"
        className={classNames("position-fixed", "vw-100")}
      >
        <Container fluid>
          <Navbar.Brand href="/">Creative Coding</Navbar.Brand>
        </Container>
      </Navbar>
      <Container
        fluid
        className={classNames("min-vh-100", "mb-5")}
        style={{ backgroundColor: "#DFDFE2" }}
      >
        <Container>
          <Row>
            <Col className="w-100 vh-100 d-flex flex-column justify-content-center">
              <h1 className="mb-5">
                Coding made fun<span className="fst-italic">!</span> Learn to
                design interactive and unexpected experiences for screens of all
                sizes in this elective course at{" "}
                <a href="https://www.design.polimi.it/en/">
                  Politecnico di Milano, Design School
                </a>
                . The course is open to all Communication Design students, both
                enrolled in a bachelor and in a master program, see the{" "}
                <Link href={"/" + editions[0]["directory"] + "/syllabus"}>
                  current edition
                </Link>
                .
              </h1>
              <h1>
                The website collects results from all editions of the course,
                held by{" "}
                <a
                  href="https://dipartimentodesign.polimi.it/en/staff/show/187232"
                  target="_blank"
                  rel="noreferrer"
                >
                  Michele Mauri
                </a>
                ,{" "}
                <a
                  href="https://www.iosonosempreio.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tommaso Elli
                </a>{" "}
                and{" "}
                <a
                  href="https://www.bndndr.it/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Andrea Benedetti
                </a>
                .
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-5">Course Structure and Tools</h2>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-3 mb-5">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/800x800/840ce9/FFF"
              />
              <Card.Body>
                <Card.Title>
                  Assignments <span className="bit">✋</span>
                </Card.Title>
                <Card.Text>
                  Sed facilisis eu urna vel condimentum. Ut molestie id velit
                  eget iaculis. Morbi semper, felis rhoncus suscipit facilisis,
                  risus dolor dapibus quam, vel sollicitudin ante ipsum at
                  turpis. Nunc pulvinar tortor dui, feugiat efficitur magna
                  laoreet quis. Phasellus sed massa ornare, mattis elit id,
                  vulputate mauris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/800x800/840ce9/FFF"
              />
              <Card.Body>
                <Card.Title>
                  Research <span className="bit">🔍</span>
                </Card.Title>
                <Card.Text>
                  Sed facilisis eu urna vel condimentum. Ut molestie id velit
                  eget iaculis. Morbi semper, felis rhoncus suscipit facilisis,
                  risus dolor dapibus quam, vel sollicitudin ante ipsum at
                  turpis. Nunc pulvinar tortor dui, feugiat efficitur magna
                  laoreet quis. Phasellus sed massa ornare, mattis elit id,
                  vulputate mauris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://dummyimage.com/800x800/840ce9/FFF"
              />
              <Card.Body>
                <Card.Title>
                  Group Projects <span className="bit">★</span>
                </Card.Title>
                <Card.Text>
                  Sed facilisis eu urna vel condimentum. Ut molestie id velit
                  eget iaculis. Morbi semper, felis rhoncus suscipit facilisis,
                  risus dolor dapibus quam, vel sollicitudin ante ipsum at
                  turpis. Nunc pulvinar tortor dui, feugiat efficitur magna
                  laoreet quis. Phasellus sed massa ornare, mattis elit id,
                  vulputate mauris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className="mb-0">
              During the course we are going to use some tools, libraries and
              plug- ins. To draw and animate stuff in the web canvas we are
              going to use{" "}
              <a href="https://p5js.org/" target="_blank" rel="noreferrer">
                P5.js
              </a>{" "}
              <img src={p5Logo.src} /> a well-known javascript library. To write
              the code we are going to use{" "}
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visual Studio Code
              </a>{" "}
              <img src={vscodeLogo.src} /> a text editor from Microsoft with
              some plug-ins to make our life easier:{" "}
              <a href="https://p5js.org/" target="_blank" rel="noreferrer">
                P5.VScode
              </a>{" "}
              <img src={p5VSCode.src} /> to autocoplete p5 syntax and{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode"
                target="_blank"
                rel="noreferrer"
              >
                Prettier
              </a>{" "}
              <img src={prettierLogo.src} /> to keep our code clean and readable
              and{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                target="_blank"
                rel="noreferrer"
              >
                Live server
              </a>{" "}
              <img src={liveServerLogo.src} /> to run p5 sketches on our local
              machines.
            </h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h3 className="mb-3">Editions</h3>
            </Col>
          </Row>
        </Container>
      </Container>
      {editions.map((d, i) => (
        <Container
          key={i}
          fluid
          style={{
            backgroundColor: i % 2 === 0 ? "#D4DCFF" : "#C0BDA5",
            height: 100,
          }}
        >
          <Container>
            <Row>
              <Col>
                <p>
                  <Link href={"/" + d["directory"] + "/syllabus"}>
                    {d["info"]["academic-year"]}
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      ))}

      <Container>
        <Row className={classNames("my-5")}>
          <Col>
            <h3>Publications</h3>
            <p>
              Benedetti, A., Elli, T., &amp; Mauri, M. (2020). “DRAWING WITH
              CODE”: THE EXPERIENCE OF TEACHING CREATIVE CODING AS A SKILL FOR
              COMMUNICATION DESIGNERS. 12th International Conference on
              Education and New Learning Technologies, 3478–3488.{" "}
            </p>
            <p>
              <a href="https://www.researchgate.net/publication/343418771_DRAWING_WITH_CODE_THE_EXPERIENCE_OF_TEACHING_CREATIVE_CODING_AS_A_SKILL_FOR_COMMUNICATION_DESIGNERS">
                External Link
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
