import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/AboutPage";
const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        Welcome to our website, your ultimate destination for all things
        cocktails! At our site, we take pride in curating a comprehensive
        collection of cocktail recipes sourced directly from the renowned
        CocktailDB. Our goal is to provide you with an exceptional platform to
        explore, discover, and indulge in the art of mixology. With our
        dedication to bringing you the finest cocktail recipes, we ensure that
        our database is regularly updated with the latest concoctions and
        timeless classics. Whether you're a seasoned mixologist or a curious
        beginner, our website caters to all levels of expertise, making it the
        perfect resource for anyone looking to elevate their cocktail game. From
        refreshing summer spritzers to sophisticated martinis, our website
        encompasses an extensive range of cocktails to suit every taste and
        occasion. Each recipe is meticulously crafted, accompanied by detailed
        instructions, ingredient lists, and serving suggestions to guarantee an
        extraordinary cocktail experience. Our team is committed to delivering
        the highest standards of quality and authenticity. By collaborating with
        the esteemed CocktailDB, we ensure that every recipe on our website has
        been thoroughly researched and validated, ensuring accuracy and
        reliability in every sip. Join us on this tantalizing journey into the
        world of cocktails, where you'll find inspiration, knowledge, and an
        ever-expanding collection of libations to explore. Cheers to your next
        unforgettable cocktail adventure with us!
      </p>
    </Wrapper>
  );
};

export default About;
