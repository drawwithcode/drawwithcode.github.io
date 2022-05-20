import Link from "next/link";

export default function Timeline({ data }) {
	return (
		<p>
			Timeline {data["this-year"]}
		</p>
	);
}
