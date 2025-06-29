import React from 'react';
import {
  PolicyContainer,
  PolicyHeader,
  PolicySection,
  SectionTitle,
  SectionText,
} from '../../styles/other/privacyPolicyStyle';

export const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyHeader>Privacy Policy</PolicyHeader>

      <PolicySection>
        <SectionTitle>1. Introduction</SectionTitle>
        <SectionText>
          At SandalWood Clinic, we take your privacy seriously. This policy outlines the type of information we collect, how it's used, and the steps we take to ensure it's protected.
        </SectionText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>2. Information We Collect</SectionTitle>
        <SectionText>
          We may collect personal data such as your name, contact information, and health details when you use our services or website.
        </SectionText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>3. How We Use Your Information</SectionTitle>
        <SectionText>
          We use your data to provide personalized healthcare services, schedule appointments, and improve our offerings.
        </SectionText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>4. Data Security</SectionTitle>
        <SectionText>
          Your data is protected using industry-standard encryption and secure storage methods. Access is restricted to authorized personnel only.
        </SectionText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>5. Your Rights</SectionTitle>
        <SectionText>
          You have the right to access, correct, or request deletion of your personal data at any time. Contact us for more information.
        </SectionText>
      </PolicySection>

      <PolicySection>
        <SectionTitle>6. Updates to This Policy</SectionTitle>
        <SectionText>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
        </SectionText>
      </PolicySection>
    </PolicyContainer>
  );
};
