import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/SeanGil-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Senior Vice President, Investigations [Vcheck Global, LLC]"
              date="Jul 2018 - Jan 2021"
              content={[
                "Maintained internal control database controls including all investigative departments, finance management, vendor control, and client facing services",
                "Collaborated with software engineers based in Serbia to implement logical tools for the company’s client portal, increasing the overall on-time payment rate and communication between the server and our clients by over 100%",
                "Managed and utilized cybersecurity methods in order to secure the equipment and data of assets valued over $10 million ",
              ]}
            />
            <Resumecontent
              title="Human Intelligence Specialist [United States Army]"
              date="Oct 2011 - Oct 2019"
              content={[
                "Facilitated mission command of 314th Military Intelligence Battalion’s multi-discipline intelligence operations through management of different unit databases during annual training for 5 years in San Antonio, TX",
                "Developed the standard operating procedures for domestic missions in conjunction with the Defense Intelligence Agency",
                "Managed and utilized cybersecurity methods in order to secure the equipment and data of assets valued over $10 million",
              ]}
            />
            <Resumecontent
              title="Investigations Coordinator and Regional Trainer [iUnlimited Investigative Services]"
              date="Aug 2017 - Jul 2018"
              content={[
                "Conducted hundreds over 400 hours of surveillance and wrote hundreds of intelligence reports on findings",
                "Developed the training program for all surveillance investigators nationwide",
                "Coordinated and monitored the activity of over 200 investigators",
              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Web Development Diploma [BrainStation] "
              date="2021"
              content={[`Intensive 12-week coding bootcamp built around Javascript fundamentals and project oriented programming.`]}
            />
            <Resumecontent
              title="Intelligence Operations [Cochise College] "
              date="2012-2013"
              content={[`The Intelligence Operations Studies Associate of Applied Science degree addresses career and educational goals of students currently in or preparing for employment in the intelligence field. This degree is intended for current or former military intelligence specialists and for students who are interested in intelligence operations studies.`]}
            />
            <Resumecontent
              title="Economics / Finance [Irvine Valley College]"
              date="2015 - 2016"
              content={["Veterans' Business Internship Program: Attended conferences with industry leaders and participated in paid internships with businesses in the Southern California Region"]}
            />

            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title=""
              content={[
                "Mastercard Hackathon 2021 - MasterKey",
                `Formerly held a TS/SCI - Top Secret Clearance (expired 2019)`,
                `Named 'Mentor' for StreetWise Partners, a Economic Empowerment Program`,
                "Defense Language Aptitude Battery: 125",
                "Armed Services Vocational Aptitude Battery: 93",
                "Army Achievement Medal, 2014",
                "US Army Reserve Components Achieveman Medal",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
