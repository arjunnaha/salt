import { Header } from "@/components/Header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import styles from "./home.module.css";
import { Education } from "./sections/Education";
import { WorkExperience } from "./sections/WorkExperience";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const allTitles = gsap.utils.toArray("#section-title");
      allTitles.forEach((title, i) => {
        ScrollTrigger.create({
          trigger: title as HTMLHeadingElement,
          start: "top 150px",
          end: "bottom 150px",
          pin: true,
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Header />

      <main className={styles.main}>
        <WorkExperience />
        <Education />
      </main>
    </div>
  );
}
