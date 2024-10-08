import { Header } from "@/components/Header";
import { useGSAP } from "@gsap/react";
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

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(min-width: 959px)", () => {
        const allTitles = gsap.utils.toArray("#section-title");
        allTitles.forEach((title, i) => {
          ScrollTrigger.create({
            trigger: title as HTMLHeadingElement,
            start: "top 150px",
            end: "bottom 150px",
            pin: true,
          });
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
        <Scholarships />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
