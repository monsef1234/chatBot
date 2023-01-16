import React from "react";
import Container from "../components/Container/Container";
import "../styles/About.scss";
const About = () => {
  return (
    <section className="aboutSection">
      <Container>
        <h1>About</h1>
        <p>
          About ”AskTamra” is a chatbot that answers your questions , It aims to
          help you find answers to your questions about life. This application
          is developed by{" "}
          <a
            href="http://www.github.com/monsef1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monsef
          </a>{" "}
          using OpenAI's GPT-3.
        </p>
      </Container>
    </section>
  );
};

export default About;
