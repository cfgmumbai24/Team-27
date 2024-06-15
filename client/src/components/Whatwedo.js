import React from 'react';
import styled from 'styled-components';
import awareness from '../assets/awareness.jpg';
import mentoring from '../assets/mentoring.jpg';
import coaching from '../assets/coaching.jpg';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9; /* Light background color */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%; /* Ensure container covers entire width */
  max-width: 100%; /* Ensure container does not exceed full width */
  margin: 0 auto; /* Center align the container */
`;

const Section = styled.section`
  margin-bottom: 40px;
  background-color: white; /* White background for sections */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
  color: #16a085;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 20px;
`;

const HighlightedParagraph = styled(Paragraph)`
  background-color: #e8f8f5;
  padding: 15px;
  border-left: 5px solid #16a085;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LargeImage = styled(StyledImage)`
  max-width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align the contents */
  gap: 20px; /* Adds a gap of 20px between grid items */
  text-align: center; /* Center align text content */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: left; /* Left align text under images */
`;

const WhatWeDo = () => {
  return (
    <Container>
      <Title>What Do We Do</Title>
      
      <Section>
        <HighlightedParagraph>
          Our comprehensive services aim to empower students by providing tailored workshops, personalized mentoring, and expert coaching, fostering their pursuit of quality higher education and fulfilling career pathways.
        </HighlightedParagraph>
      </Section>

      <Section>
        <Subtitle>Awareness</Subtitle>
        <LargeImage src={awareness} alt="Awareness" />
        <Paragraph>
          Students are introduced to quality higher education in premier institutes and modern career opportunities through workshops, both in person and online. Since 2017, Eklavya India Foundation has implemented a proven strategy focused on awareness, exposure, mentoring, and coaching, complemented by relatable role models. Our impact is evident: 700+ workshops reached a quarter million first-generation students. Our residential program guided 1,200+ students to secure admissions to 80+ leading national and international universities, alongside securing fellowships. Our 400 alumni, empowered with meaningful employment, serve as community inspirations.
        </Paragraph>
        
        <GridContainer>
          <Section>
            <Subtitle>Mentoring</Subtitle>
            <StyledImage src={mentoring} alt="Mentoring" />
            <StyledParagraph>
              We connect students with mentors matching their career interests. Additionally, we support them in college, hostel, and scholarship admissions. We ensure continuous mentoring throughout their education and career journey.
            </StyledParagraph>
          </Section>

          <Section>
            <Subtitle>Coaching</Subtitle>
            <StyledImage src={coaching} alt="Coaching" />
            <StyledParagraph>
              We provide free coaching for admission to reputed colleges and universities through online and offline courses. We also offer short-term preparation courses to help students succeed.
            </StyledParagraph>
          </Section>
        </GridContainer>
      </Section>
    </Container>
  );
};

export default WhatWeDo;
