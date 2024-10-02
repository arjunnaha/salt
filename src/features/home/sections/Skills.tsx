import { Item } from "@/components/Item";
import { ItemsList } from "@/components/ItemsList";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section name="Skills">
      <ItemsList>
        <div>
          <strong>Languages:</strong> TypeScript/JavaScript, Python, Java, Swift, HTML, CSS/Sass
        </div>
        <div>
          <strong>Technologies:</strong> Next.js, React, React Native, Node, Express, GraphQL, PostgreSQL, MongoDB
        </div>
        <div>
          <strong>Cloud:</strong> AWS, Datadog, Azure DevOps Pipelines, Contentful, Headless Shopify
        </div>
      </ItemsList>
    </Section>
  );
}
