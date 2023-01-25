import styles from "./Tag.module.scss";
export default function Tag({ children }) {
	return <div className={styles.tag}>{children}</div>;
}
