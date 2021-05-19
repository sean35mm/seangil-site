import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sean Gil </span>
            from <span className="purple"> Los Angeles, CA.</span>
            <br />I am a Full Stack Developer, US Army Veteran, and Former Startup Executive.
            Throughout my career in the finance industry and military, I oversaw a frustrating gap 
            in technology amongst the myriad of low-functioning tools. 
            I believe that my skills in development and engineering will 
            contribute to the inevitable growth and utilization of tomorrow’s technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Eating (generations of chefs in my family) 
            </li>
            <li className="about-activity">
              <ImPointRight /> Lifting Weights
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
