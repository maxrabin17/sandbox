import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Passionate, adaptable and self-driven Junior Software Engineer, experienced in Ruby on Rails and JavaScript based programming.
      </SectionText>
      {/* <Button onClick={() => window.location = "https://github.com/maxrabin17"}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;