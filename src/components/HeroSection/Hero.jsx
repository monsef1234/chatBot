import React from "react";
import "./Hero.scss";
import date from "../../assets/21546519.jpg";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
const Hero = () => {
  return (
    <section className="heroSection">
      <Container>
        <div className="heroContent">
          <h1>Let's have a chat with AI TAMRA</h1>
          <img src={date} alt="date" />
          <p>
            Enter any question in the form and the Tamra will respond with
            wisdom. The question can be anything, whether it is your personal
            concern or a question about the world.
          </p>
          <div className="links">
            <Link to="/about">about</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
