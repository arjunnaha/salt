import { Header } from "@/components/Header";
import styles from "./home.module.css";
import { WorkExperience } from "./sections/WorkExperience";
export function HomePage() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <WorkExperience />
      </main>
    </div>
  );
}
