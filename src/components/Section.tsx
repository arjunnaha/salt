import { H1, H2, useResponsiveProp } from "@salt-ds/core";
import styles from "./Section.module.css";

type SectionProps = {
  name: string;
  children: React.ReactNode;
};

export function Section({ name, children }: SectionProps) {
  const isMobile = useResponsiveProp({ xs: true, md: false }, false);

  return (
    <div className={styles.section} data-mobile={isMobile}>
      <H1 className={styles.title}>{name}</H1>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
