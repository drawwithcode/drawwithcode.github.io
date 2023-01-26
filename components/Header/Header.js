import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function Header({ edition, academicYear }) {
	return (
		<Navbar bg="transparent" expand="md" sticky="top">
			<Container fluid>
				<Navbar.Brand href="/">Creative Coding {academicYear}</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link href={"/" + edition + "/syllabus"}>
							<a className="nav-link" tabIndex={0} role="button">Syllabus <span className="bit">🗓</span></a> 
						</Link>
						<Link href={"/" + edition + "/assignments"}>
							<a className="nav-link" tabIndex={0} role="button">Assignments <span className="bit">✋</span></a>
						</Link>
						<Link href={"/" + edition + "/case-studies"}>
							<a className="nav-link" tabIndex={0} role="button">Case Studies <span className="bit">🔍</span></a>
						</Link>
						<Link href={"/" + edition + "/team-projects"}>
							<a className="nav-link" tabIndex={0} role="button">Team Project <span className="bit">★</span></a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
