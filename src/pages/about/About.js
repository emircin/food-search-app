import React from "react";
import { Container, HeadText, Image, Parag, Span } from "./style";
import CodeImage from "../../assets/coding.svg";

const About = () => {
  return (
    <div style={{ backgroundColor: "rgb(66, 167, 191)", height:'110vh'} }>
      <Image src={CodeImage} />
      <HeadText>
        About Software Developer<Span>Emir Cin</Span>
      </HeadText>
      <Container>
        <Parag>Hi I'm Emir</Parag>
        <Parag>I’m currently learning Full-Stack Development Languages.</Parag>
        <Parag>I know JS, ReactJS, Django, Python, HTML, CSS, SQL</Parag>
        <Parag><Span>Send email:</Span>emircingiloglu@gmail.com</Parag>
            
       
      </Container>
    </div>
  );
};

export default About;
