import { Item } from "@/components/Item";
import { ItemsList } from "@/components/ItemsList";
import { Section } from "@/components/Section";

export function Scholarships() {
  return (
    <Section name="Scholarships" id="scholarships">
      <ItemsList>
        <Item
          logo="/images/apple.png"
          company="Apple"
          position="Worldwide Developer Conference (WWDC) Scholarship"
          location="San Jose, California, US"
        >
          <p>
            Selected as one of 350 from over 10,000 global applicants to attend Apple's prestigious developer conference
          </p>
        </Item>

        <Item
          logo="/images/wellington.png"
          company="Wellington College"
          position="Academic Computer Science Scholarship"
          location="Crowthorne, Berkshire, UK"
        >
          <p>Recognised for exceptional aptitude in Computer Science, the first that Wellington has ever awarded</p>
        </Item>

        <Item
          logo="/images/uk-space-agency.png"
          company="UK Space Agency"
          position="‘Space for All’ Grant Award"
          location="Oxfordshire, UK"
        >
          <p>
            Awarded competitive grant for independently engineering and deploying a weather balloon full of sensors into
            the stratosphere
          </p>
        </Item>
      </ItemsList>
    </Section>
  );
}
