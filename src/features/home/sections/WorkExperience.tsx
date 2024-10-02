import { Item } from "@/components/Item";
import { ItemsList } from "@/components/ItemsList";
import { Section } from "@/components/Section";
import { Text } from "@salt-ds/core";

export function WorkExperience() {
  return (
    <Section name="Work Experience" id="work">
      <ItemsList>
        <Item
          logo="/images/naha-digital.png"
          company="Naha Digital"
          position="Owner & Developer"
          date="Feb 2015 – Present"
          location="Remote, UK"
        >
          <ul>
            <li>
              Architecting and delivering high-performance websites, boosting client conversion rates to an average of
              30%
            </li>
            <li>
              Implementing full-stack solutions using Next.js, React, and Payload CMS, enabling real-time site changes
              by clients
            </li>
            <li>
              Cultivated client relationships through exceptional project management, consistently meeting and exceeding
              delivery deadlines
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/waitrose.png"
          company="Waitrose"
          position="Payment Supervisor"
          date="Sep 2022 – Dec 2023"
          location="Edinburgh, UK"
        >
          <ul>
            <li>
              Led and supervised a team of over 20 cashiers, elevating the store’s performance to top 5% regionally for
              customer experience
            </li>
            <li>
              Collaborated on the development of a customer order fulfilment app with a Vue frontend and NestJS backend,
              which optimised £100k+ revenue across three stores whilst ensuring GDPR compliance with customer data
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/codeparrot.png"
          company="CodeParrot"
          position="Co-Founder & CTO"
          date="Aug 2020 – Jul 2024"
          location="Remote, UK"
        >
          <ul>
            <li>
              Directed the development of an innovative education-tech platform teaching coding to children through
              immersive games
            </li>
            <li>Engineered extensible full-stack system using TypeScript, Node and React in an agile team of three</li>
            <li>
              Orchestrated AWS infrastructure using the CDK (Infrastructure as Code) reducing deployment times by 40%
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/accenture.png"
          company="Vodafone UK (via Accenture)"
          position="Mid Frontend Developer"
          date="Jun 2022 – Aug 2022"
          location="Newbury, Berkshire, UK"
        >
          <ul>
            <li>
              Promoted to a mid-level developer to spearhead the development of key features on critical enterprise
              projects
            </li>
            <li>
              Orchestrated migration of legacy JavaScript codebase to TypeScript across Vodafone Business Portal,
              resulting over 90% of new pull requests using TypeScript within the 3 months and an overall reduction in
              runtime errors
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/vodafone.png"
          company="Vodafone UK"
          position="Frontend Developer"
          date="Oct 2020 – Aug 2021"
          location="Newbury, Berkshire, UK"
        >
          <ul>
            <li>
              Developed, tested, and delivered high-quality enterprise React and Node applications, and monitored them
              using Datadog
            </li>
            <li>
              Played a significant role in the recruitment process by conducting technical interviews and reforming
              online coding assessments
            </li>
            <li>
              Led coding workshops for secondary school girls in STEM, reaching over 100 participants and supporting DEI
              initiatives
            </li>
            <li>
              Received award for exceptional contributions and recognised as a Top Performer within Vodafone Technology
            </li>
          </ul>
        </Item>

        <Item
          logo="/images/deloitte.png"
          company="Deloitte Digital"
          position="Software Development Intern"
          date="Aug 2018"
          location="London, UK"
        >
          <ul>
            <li>
              Built an automated ‘add to basket’ test suite using Selenium (in Python), testing 1,000+ zip codes for a
              high-profile client defect
            </li>
            <li>
              Developed an interactive map visualisation of test results, pinpointing the defect source and accelerating
              resolution
            </li>
          </ul>
        </Item>
      </ItemsList>
    </Section>
  );
}
