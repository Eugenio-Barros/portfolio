import NextPageButton from "../../components/NextPageButton";
import { AboutMe, Container, Photo, PhotoContainer, Row } from "./styles";

const About = () => {
  return (
    <Container>
      <h2>() {"==>"} About me</h2>

      <Row>
        <AboutMe>
          <p>
            I am a young person who is looking for a job opportunity where I can
            put into practice all the knowledge I have acquired, aiming at the
            growth of the company as well as my professional development.
          </p>

          <p>
            I consider myself a multifaceted person with a wide range of
            interests. One of my biggest passions is technology. I enjoy
            learning about the latest advancements in software and gadgets.
          </p>

          <p>
            Aside from technology, I'm also into working out. I believe that
            exercise is a vital part of a healthy lifestyle, and I make it a
            point to incorporate it into my daily routine. Whether it's hitting
            the gym or going for a run, I find that exercise helps
            me clear my mind and stay focused.
          </p>
        </AboutMe>

        <PhotoContainer>
          <Photo src={require("../../assets/geninho.jpeg")} />
        </PhotoContainer>
      </Row>

      <NextPageButton path="/projects" label="Look at my Projects" />
    </Container>
  );
};

export default About;
