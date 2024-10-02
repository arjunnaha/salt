import { Header } from "@/components/Header";
import { useGSAP } from "@gsap/react";
import { useResponsiveProp } from "@salt-ds/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import styles from "./home.module.css";
import { Education } from "./sections/Education";
import { Projects } from "./sections/Projects";
import { Scholarships } from "./sections/Scholarships";
import { Skills } from "./sections/Skills";
import { WorkExperience } from "./sections/WorkExperience";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const isMobile = useResponsiveProp({ xs: true, md: false }, false);

  useGSAP(
    () => {
      if (!isMobile) {
        const allTitles = gsap.utils.toArray("#section-title");
        allTitles.forEach((title, i) => {
          ScrollTrigger.create({
            trigger: title as HTMLHeadingElement,
            start: "top 150px",
            end: "bottom 150px",
            pin: true,
          });
        });
      }
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Header />

      <main className={styles.main}>
        <WorkExperience />
        <Education />
        <Scholarships />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
