import { H1, useResponsiveProp } from "@salt-ds/core";
import styles from "./Section.module.css";

type SectionProps = {
  name: string;
  id: string;
  children: React.ReactNode;
};

export function Section({ name, id, children }: SectionProps) {
  const isMobile = useResponsiveProp({ xs: true, md: false }, false);

  return (
    <section className={styles.section} data-mobile={isMobile} id={id}>
      <H1 className={styles.title} id="section-title">
        {name}
      </H1>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
