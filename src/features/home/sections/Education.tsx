import { Item } from "@/components/Item";
import { ItemsList } from "@/components/ItemsList";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section name="Education" id="education">
      <ItemsList>
        <Item
          logo="/images/edinburgh.png"
          company={"University of Edinburgh\n(with exchange year at the University of Maryland)"}
          position="Computer Science BEng (Hons)"
          date="Sep 2021 – May 2025 (Expected)"
          location="Edinburgh, UK / Maryland, US"
        >
          <ul>
            <li>
              Courses: Linear Algebra, Software Engineering, Data Science, Human-Computer Interaction, Software Testing,
              Systems
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/wellington.png"
          company="Wellington College"
          position="A-Levels"
          date="Sep 2018 – Jun 2020"
          location="Crowthorne, Berkshire, UK"
        >
          <ul>
            <li>A-Levels in Mathematics, Further Mathematics, and Computer Science</li>
          </ul>
        </Item>
      </ItemsList>
    </Section>
  );
}
