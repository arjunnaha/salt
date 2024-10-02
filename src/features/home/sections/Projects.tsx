import { Item } from "@/components/Item";
import { ItemsList } from "@/components/ItemsList";
import { Section } from "@/components/Section";

export function Projects() {
  return (
    <Section name="Projects" id="projects">
      <ItemsList>
        <Item company="HYPED, Edinburgh Hyperloop" date="Sep 2021 – Present" location="Embedded hardware and software">
          <ul>
            <li>
              Leading the telemetry team developing real-time control systems for our pod prototype, competing in
              European Hyperloop Week
            </li>
            <li>
              Engineering fault-tolerant communication system using MQTT, integrating NASA's OpenMCT for visualisation
              and pod control
            </li>
          </ul>
        </Item>

        <Item company="myWelly" date="Sep 2018 – Jul 2022" location="Full-stack web and native mobile">
          <ul>
            <li>
              Directed a cross-functional team of 5 developers in creating a central educational portal, scaling to
              2,000+ active users
            </li>
            <li>
              Finalist in national education awards, recognising the project's innovation in educational technology
            </li>
            <li>
              Architected full-stack solution using TypeScript, React/React Native, Express, MongoDB, OAuth, and CI/CD
              on AWS
            </li>
          </ul>
        </Item>
      </ItemsList>
    </Section>
  );
}
