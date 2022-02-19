import React from "react";
import {
  ProjectCardImage,
  ProjectCategory,
  ProjectDetails,
  ProjectName,
  ProjectNumber,
  StyledProjectCard,
} from "../../styles/Projects.styled/Projects.styled";

const ProjectCard = ({ name, img, number, category }) => {
  return (
    <StyledProjectCard>
      <ProjectCardImage>
        <img src={img} alt={name} />
      </ProjectCardImage>
      <ProjectDetails>
        <ProjectName>
          <ProjectNumber>{number} — </ProjectNumber>
          {name}
        </ProjectName>
        <ProjectCategory>{category}</ProjectCategory>
      </ProjectDetails>
    </StyledProjectCard>
  );
};

export default ProjectCard;
