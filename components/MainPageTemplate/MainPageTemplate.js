import styles from "./MainPageTemplate.module.scss";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Footer from "../Footer";
import classNames from "classnames";
import Link from "next/link";

export default function MainPageTemplate({ editions }) {
	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top">
				<Container fluid>
					<Navbar.Brand href="#home">Creative Coding</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>
				<Row>
					<Col>
						<h1>
							Coding made fun! Learn to design interactive and unexpected
							experiences for screens of all sizes in this elective course at
							Politecnico di Milano, Design School. The course is open to all
							Communication Design students, both enrolled in a bachelor and in
							a master program.
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Assignments</h3>
						<p>
							Sed facilisis eu urna vel condimentum. Ut molestie id velit eget
							iaculis. Morbi semper, felis rhoncus suscipit facilisis, risus
							dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc
							pulvinar tortor dui, feugiat efficitur magna laoreet quis.
							Phasellus sed massa ornare, mattis elit id, vulputate mauris.
						</p>
					</Col>
					<Col>
						<h3>Research</h3>
						<p>
							Sed facilisis eu urna vel condimentum. Ut molestie id velit eget
							iaculis. Morbi semper, felis rhoncus suscipit facilisis, risus
							dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc
							pulvinar tortor dui, feugiat efficitur magna laoreet quis.
							Phasellus sed massa ornare, mattis elit id, vulputate mauris.
						</p>
					</Col>
					<Col>
						<h3>Team project</h3>
						<p>
							Sed facilisis eu urna vel condimentum. Ut molestie id velit eget
							iaculis. Morbi semper, felis rhoncus suscipit facilisis, risus
							dolor dapibus quam, vel sollicitudin ante ipsum at turpis. Nunc
							pulvinar tortor dui, feugiat efficitur magna laoreet quis.
							Phasellus sed massa ornare, mattis elit id, vulputate mauris.
						</p>
					</Col>
				</Row>
				<Row className={classNames("my-5")}>
					<Col>
						<h3>Editions</h3>
						{editions.map((d, i) => (
							<p key={i}>
								<Link href={"/" + d["directory"]}>
									{d["info"]["academic-year"]}
								</Link>
							</p>
						))}
					</Col>
				</Row>
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
