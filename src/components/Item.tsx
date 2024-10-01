import { Avatar, H2, H3, H4 } from "@salt-ds/core";
import styles from "./Item.module.css";

type ItemProps = {
  logo: string;
  company: string;
  position: string;
  date: string;
  location: string;
  children: React.ReactNode;
};

export function Item(props: ItemProps) {
  const { logo, company, position, date, location, children } = props;

  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        <div className={styles.itemHeaderCompany}>
          <Avatar src={logo} name={company} className={styles.itemHeaderLogo} />
          <div>
            <H3 className={styles.itemHeaderCompanyName}>{company}</H3>
            <div>{location}</div>
          </div>
        </div>

        <div>
          <div>
            <em>{date}</em>
          </div>
        </div>
      </div>

      <div className={styles.itemContent}>
        <H3 className={styles.position}>{position}</H3>
        <div>{children}</div>
      </div>
    </div>
  );
}
