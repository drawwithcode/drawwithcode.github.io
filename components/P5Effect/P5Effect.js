import styles from "./P5Effect.module.scss";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ReactP5Wrapper = dynamic(
	() => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
	{ ssr: false }
);

export default function P5Effect() {

	function sketch(p5) {
		p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

		p5.draw = () => {
			p5.background(250);
			p5.normalMaterial();
			p5.push();
			p5.rotateZ(p5.frameCount * 0.01);
			p5.rotateX(p5.frameCount * 0.01);
			p5.rotateY(p5.frameCount * 0.01);
			p5.plane(100);
			p5.pop();
		};
	}
	return (
		<>
			<p>SKETCH</p>
			<ReactP5Wrapper sketch={sketch} />
		</>
	);
}
