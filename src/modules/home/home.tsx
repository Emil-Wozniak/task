import React from 'react';
import TechStack from '../../components/home/tech-stack';
import Section from '../../components/home/section';
import { FontSize } from '../../components/layout/grid-element';
import Intro from '../../components/home/intro';
import Interests from '../../components/home/interests';
import WelcomeSection from '../../components/home/welcome-section';
import Container from '../../components/layout/container';

const Home = (): JSX.Element => (
  <>
    <Container>
      <WelcomeSection />
    </Container>
    <Section id="intro" title="Intro">
      <Intro />
    </Section>
    <Section
      id="tech-stack"
      fontSize={FontSize.MEDIUM}
      title="Technology Stack: "
    >
      <TechStack />
    </Section>
    <Section id="interests" title="Interests:">
      <Interests />
    </Section>
  </>
);

export default Home;
