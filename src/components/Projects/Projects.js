import React from "react";

import {
  ProjectsContainer,
  StyledProject,
} from "../../styles/Projects.styled/Projects.styled";
import {
  SectionSupTitle,
  SectionTitle,
} from "../../styles/Section.styled/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

const Projects = () => {
  return (
    <StyledProject id="work">
      <SectionSupTitle>WORKS</SectionSupTitle>
      <SectionTitle>DISCOVER MY LATEST PROJECTS</SectionTitle>
      <ProjectsContainer>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsContainer>
    </StyledProject>
  );
};

export default Projects;
