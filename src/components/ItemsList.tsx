import styles from "./ItemsList.module.css";

export function ItemsList({ children }: { children: React.ReactNode }) {
  return <div className={styles.itemsList}>{children}</div>;
}
