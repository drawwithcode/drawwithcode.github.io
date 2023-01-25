import Link from "next/link";
import styles from "./Timeline.module.scss";
import classNames from "classnames";

export default function Timeline({ data }) {
	return <div className={classNames(styles.timeline)}>Timeline {data["current-year"]}</div>;
}
