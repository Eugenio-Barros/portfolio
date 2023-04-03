import NextPageButton from "../../components/NextPageButton";
import {
  Column,
  Container,
  Description,
  Image,
  ImageContainer,
  Project,
  ProjectList,
  Tech,
  TechGroup,
  Title,
} from "./styles";

const Projects = () => {
  const projectList = [
    {
      name: "First Project",
      description: "First project that I did in my course in ETIC",
      tech: ["HTML", "CSS"],
      link: "https://github.com/Eugenio-Barros",
      image: require("../../assets/project.png"),
    },
    {
      name: "Second Project",
      description: "Second project that I did in my course in ETIC",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Eugenio-Barros",
      image: require("../../assets/project.jpg"),
    },
    {
      name: "Third Project",
      description: "Soon...",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Eugenio-Barros",
      image: require("../../assets/project.png"),
    },
  ];

  return (
    <Container>
      <h2>() {"==>"} What I've built</h2>

      <ProjectList>
        {projectList.map((project, index) => (
          <Project key={index}>
            <ImageContainer>
              <Image src={project.image} />
            </ImageContainer>
            <Column>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
              <TechGroup>
                {project.tech.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechGroup>
            </Column>
          </Project>
        ))}
      </ProjectList>

      <NextPageButton path="/work" label="Check my Work journey" />
    </Container>
  );
};
export default Projects;
