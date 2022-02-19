import React from "react";
import {
  AboutSupTitle,
  AboutTitle,
} from "../../styles/About.styled/About.styled";
import {
  ProjectsContainer,
  StyledProject,
} from "../../styles/Projects.styled/Projects.styled";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

const Projects = () => {
  return (
    <StyledProject id="work">
      <AboutSupTitle>WORKS</AboutSupTitle>
      <AboutTitle>DISCOVER MY LATEST PROJECTS</AboutTitle>
      <ProjectsContainer>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </StyledProject>
  );
};

export default Projects;
