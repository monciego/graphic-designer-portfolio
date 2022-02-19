import React from "react";
import {
  ProjectCardImage,
  ProjectCategory,
  ProjectDetails,
  ProjectImg,
  ProjectName,
  ProjectNumber,
  StyledProjectCard,
} from "../../styles/Projects.styled/Projects.styled";

const ProjectCard = ({ name, img, number, category }) => {
  return (
    <StyledProjectCard>
      <ProjectCardImage>
        <ProjectImg src={img} alt={name} />
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
