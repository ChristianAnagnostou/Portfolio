import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { projectState } from "../../projectState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import ScrollTop from "../ScrollTop";

function ProjectDetails() {
  const history = useHistory();
  const url = history.location.pathname;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projectState.filter((stateProject) => stateProject.url === url);
    setProject(currentProject[0]);
  }, [url]);

  return (
    <>
      <ScrollTop />

      {project && (
        <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <h2>{project.title}</h2>
          <div className="link-container">
            <motion.a
              className="live-link"
              href={project.externalLink}
              target="_blank"
              rel="noreferrer"
            >
              Live view
            </motion.a>
            <motion.a className="live-link" href={project.github} target="_blank" rel="noreferrer">
              Github Repo
            </motion.a>
          </div>

          <Headline>
            <div className="mobile-imgs">
              {project.mobileImgs.map((image, i) => (
                <MobileImage key={i}>
                  <img src={image} alt="mobile" />
                </MobileImage>
              ))}
            </div>

            <Details>
              {project.details.map(({ title, description }, i) => (
                <Detail key={i} title={title} description={description} />
              ))}
            </Details>
          </Headline>

          {project.desktopImgs.map((image, i) => (
            <DesktopImage key={i}>
              <img src={image} alt={`desktop ${i}`} />
            </DesktopImage>
          ))}
        </Container>
      )}
    </>
  );
}

// Detail Component
const Detail = ({ title, description }) => {
  return (
    <DetailStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </DetailStyle>
  );
};

// styled components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #cfcfcf;
    padding-top: 5vh;
    margin: auto;
  }
  .link-container {
    display: flex;

    .live-link {
      display: block;
      width: fit-content;
      color: #cfcfcf;
      text-decoration: none;
      font-size: 1.5rem;
      border: 1px solid #cfcfcf;
      padding: 0.75rem;
      margin: 1rem;
      cursor: alias;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: black;
      }
    }
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 2.5em;
    }
  }
`;

const Headline = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;
  overflow: hidden;

  .mobile-imgs {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  @media (max-width: 1100px) {
    height: fit-content;
    margin: 1rem 0;
    flex-direction: column-reverse;
  }
`;

const Details = styled.div`
  flex: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  @media (max-width: 1100px) {
    margin: 0;
    flex: 1;
  }
`;

const DetailStyle = styled.div`
  width: 80%;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #4769ff;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;
    .line {
      margin: 0.5rem auto;
    }
  }
`;

const DesktopImage = styled.div`
  width: 100vw;
  img {
    margin: auto;
    margin-bottom: 2rem;
    display: block;
    width: 80%;
    height: auto;
    border-radius: 10px;
  }
  @media (max-width: 1100px) {
    img {
      width: 95%;
    }
  }
`;

const MobileImage = styled.div`
  width: 20vw;
  flex: 1;
  margin: 0 0.5rem;
  img {
    margin: auto;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  @media (max-width: 1100px) {
    width: 45%;
  }
`;

export default ProjectDetails;
