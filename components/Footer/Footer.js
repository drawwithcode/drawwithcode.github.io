import styles from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import polimiLogo from "./politecnico-scuola-del-design.svg";
import densityLogo from "./densitydesign.svg";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import CCLogo from "../CCLogo";

export default function Footer() {
	return (
		<Container className="pb-5 mt-5" fluid>
			<Row>
				<Col>
					<div className={styles.logo}>
						<img alt="logo of Design School at Politecnico di Milano" src={polimiLogo.src} />
					</div>
					<div className={styles.logo}>
						<img alt="logo of DensityDesign Research Lab" src={densityLogo.src} />
					</div>
				</Col>
				<Col className="d-flex justify-content-center">
					<CCLogo />
				</Col>
				<Col className="text-end">
					<a href="https://github.com/drawwithcode/" target="_blank" rel="noreferrer">
						<BsGithub className={styles.logo} />
					</a>
					<a href="https://www.instagram.com/densitydesign/" target="_blank" rel="noreferrer">
						<BsInstagram className={styles.logo} />
					</a>
					<a href="https://twitter.com/densitydesign" target="_blank" rel="noreferrer">
						<BsTwitter className={styles.logo} />
					</a>
				</Col>
			</Row>
		</Container>
	);
}
