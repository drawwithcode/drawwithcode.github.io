import Link from "next/link";

export default function Timeline({ data }) {
	return (
		<p>
			<Link href={"/" + data["previous-year"] + "/syllabus"}>
				{data["previous-year"]}
			</Link>{" "}
			– Timeline {data["this-year"]} –{" "}
			<Link href={"/" + data["next-year"] + "/syllabus"}>
				{data["next-year"]}
			</Link>
		</p>
	);
}
