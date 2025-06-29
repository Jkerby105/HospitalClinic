import React from 'react';
import {
  PageWrapper,
  Section,
  Title,
  SubTitle,
  Paragraph,
  Highlight,
} from '../../styles/other/aboutUsStyle';

export const AboutUsPage = () => {
  return (
    <PageWrapper>
      <Section>
        <Title>About <Highlight>SandalWood Clinic</Highlight></Title>
        <SubTitle>Empowering Wellness, One Step at a Time</SubTitle>
        <Paragraph>
          At <strong>SandalWood Clinic</strong>, our mission is to provide personalized, compassionate care
          that supports the mental, emotional, and physical health of our patients. With a team of dedicated professionals
          and a serene, supportive environment, we prioritize your journey to wellness.
        </Paragraph>
        <Paragraph>
          We specialize in holistic approaches, combining modern medicine with age-old techniques to offer balanced,
          effective treatment plans. Whether you're visiting for therapy, consultations, or community workshops,
          we’re here to walk alongside you every step of the way.
        </Paragraph>
      </Section>
    </PageWrapper>
  );
};
