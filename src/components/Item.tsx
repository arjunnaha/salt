import { Avatar, H2, H3, H4 } from "@salt-ds/core";
import styles from "./Item.module.css";

type ItemProps = {
  logo: string;
  company: string;
  position?: string;
  date: string;
  location: string;
  children: React.ReactNode;
};

export function Item(props: ItemProps) {
  const { logo, company, position, date, location, children } = props;

  return (
    <div>
      <div className={styles.itemHeader}>
        <div className={styles.itemHeaderCompany}>
          <Avatar src={logo} name={company} className={styles.itemHeaderLogo} />
          <div>
            <H3 className={styles.itemHeaderCompanyName}>{company}</H3>
            <div>{location}</div>
          </div>
        </div>

        <div className={styles.right}>
          <em>{date}</em>
        </div>
      </div>

      <div className={styles.itemContent}>
        {position ? <H3 className={styles.position}>{position}</H3> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
