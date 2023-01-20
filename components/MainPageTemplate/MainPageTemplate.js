import styles from "./MainPageTemplate.module.scss";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Footer from "../Footer";
import classNames from "classnames";
import Link from "next/link";

export default function MainPageTemplate({ editions }) {
	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top" className={classNames("position-fixed","vw-100")}>
				<Container fluid>
					<Navbar.Brand href="/">Creative Coding</Navbar.Brand>
				</Container>
			</Navbar>
			<Container fluid className={classNames("min-vh-100", "mb-5")} style={{ backgroundColor: "#DFDFE2" }}>
				<Container>
					<Row>
						<Col className="w-100 vh-100 d-flex flex-column justify-content-center">
							<h1>
								Coding made fun<span className="fst-italic">!</span> Learn to design interactive and unexpected
								experiences for screens of all sizes in this elective course at{" "}
								<a href="https://www.design.polimi.it/en/">Politecnico di Milano, Design School</a>. The course is open
								to all Communication Design students, both enrolled in a bachelor and in a master program, see the{" "}
								<Link href={"/" + editions[0]["directory"] + "/syllabus"}>current edition</Link>.
							</h1>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container className="mt-5">
				<Row>
					<Col>
						<h3 className="mb-5">Course Structure and Tools</h3>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<div className="border border-dark p-3">
							<h3>Assignments</h3>
							<p className="mb-0">
								Sed facilisis eu urna vel condimentum. Ut molestie id velit eget iaculis. Morbi semper, felis rhoncus
								suscipit facilisis, risus dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc pulvinar
								tortor dui, feugiat efficitur magna laoreet quis. Phasellus sed massa ornare, mattis elit id, vulputate
								mauris.
							</p>
						</div>
					</Col>
					<Col>
						<div className="border border-dark p-3">
							<h3>Research</h3>
							<p className="mb-0">
								Sed facilisis eu urna vel condimentum. Ut molestie id velit eget iaculis. Morbi semper, felis rhoncus
								suscipit facilisis, risus dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc pulvinar
								tortor dui, feugiat efficitur magna laoreet quis. Phasellus sed massa ornare, mattis elit id, vulputate
								mauris.
							</p>
						</div>
					</Col>
					<Col>
						<div className="border border-dark p-3">
							<h3>Team Project</h3>
							<p className="mb-0">
								Sed facilisis eu urna vel condimentum. Ut molestie id velit eget iaculis. Morbi semper, felis rhoncus
								suscipit facilisis, risus dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc pulvinar
								tortor dui, feugiat efficitur magna laoreet quis. Phasellus sed massa ornare, mattis elit id, vulputate
								mauris.
							</p>
						</div>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col>
						<p className="mb-0">
							During the course we are going to use some tools, libraries and plug- ins. To draw and animate stuff in
							the web canvas we are going to use P5.js, p5 a well-known javascript library. To write the code we are
							going to use Visual Studio Code, * a text editor from Microsoft with some plug-ins to make our life
							easier: P5. VScode * to autocoplete p5 syntax, Prettier to keep our code clean and readable and Live
							server () to run p5 sketches on our local machines.
						</p>
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
				<Container key={i} fluid style={{ backgroundColor: i % 2 === 0 ? "#D4DCFF" : "#C0BDA5", height: 100 }}>
					<Container>
						<Row>
							<Col>
								<p>
									<Link href={"/" + d["directory"] + "/syllabus"}>{d["info"]["academic-year"]}</Link>
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
							Benedetti, A., Elli, T., &amp; Mauri, M. (2020). “DRAWING WITH CODE”: THE EXPERIENCE OF TEACHING CREATIVE
							CODING AS A SKILL FOR COMMUNICATION DESIGNERS. 12th International Conference on Education and New Learning
							Technologies, 3478–3488.{" "}
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
