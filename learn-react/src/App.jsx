import Section from "./Section";
import Heading from "./Heading";

export default function Page() {
  return (
    <Section>
      <Heading>H1-Heading</Heading>
      <Section>
        <Heading>H2-Heading</Heading>
        <Section>
          <Heading>H3-Heading</Heading>
          <Section>
            <Heading>H4-Heading</Heading>
            <Section>
              <Heading>H5-Heading</Heading>
              <Section>
                <Heading>H6-Heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
