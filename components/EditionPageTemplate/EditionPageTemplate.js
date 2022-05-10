import styles from "./EditionPageTemplate.module.scss";
import Footer from "../Footer";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import ArrowLink from "../ArrowLink";
import Lection from "../Lection";

export default function EditionPageTemplate() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col><h4>[Page menu] [Program] [Assignments] [Case studies] [Projects]</h4></Col>
				</Row>
				<Row>
					<Col>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
							nunc quam, viverra egestas imperdiet non, volutpat ut ex.
							Suspendisse potenti. Aliquam erat volutpat. Quisque semper
							molestie lacus sed facilisis. Nunc auctor elit sit amet odio
							feugiat feugiat. In hac habitasse platea dictumst. Aliquam erat
							volutpat. Etiam sodales lectus nec ipsum sollicitudin ultrices.
							Sed dictum rutrum euismod. Donec pretium leo sit amet turpis
							euismod, vel elementum risus iaculis.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<ArrowLink url="https://getbootstrap.com/">Telegram</ArrowLink>
						<ArrowLink url="https://getbootstrap.com/">Github</ArrowLink>
						<ArrowLink url="https://getbootstrap.com/">
							Manifesto degli studi
						</ArrowLink>
					</Col>
				</Row>
				<Row>
					<h4>Program</h4>
					<Lection />
				</Row>
				<Row>
					<h4>Assignments</h4>
					<p>The Assignments</p>
				</Row>
				<Row>
					<h4>Case studies research</h4>
					<p>The case studies</p>
				</Row>
				<Row>
					<h4>Team projects</h4>
					<p>The Projects</p>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
