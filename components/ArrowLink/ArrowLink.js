import styles from "./ArrowLink.module.scss";
export default function ArrowLink({ url, children }) {
	return <a href={url} className={styles.arrowLink}>{children}</a>;
}
