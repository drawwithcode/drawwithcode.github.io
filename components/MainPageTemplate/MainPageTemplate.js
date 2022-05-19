import styles from "./MainPageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import classNames from "classnames";
import Link from "next/link";

export default function MainPageTemplate({ editions }) {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col>
						<h1>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
							nunc quam, viverra egestas imperdiet non, volutpat ut ex.
							Suspendisse potenti. Aliquam erat volutpat. Quisque semper
							molestie lacus sed facilisis. Nunc auctor elit sit amet odio
							feugiat feugiat. In hac habitasse platea dictumst.
						</h1>
					</Col>
				</Row>
				<Row className={classNames("my-5")}>
					<Col>
						<h3>Editions</h3>
						{ editions.map((d,i)=><Link key={i} href={d["directory"]}>{d["info"]["academic-year"]}</Link>) }
						<p>
							example page year<Link href="/year">[year]</Link>
						</p>
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
			</Container>
			<Footer />
		</>
	);
}
