import React from "react";
import {
  Hero,
  About,
  Resume,
  Projects,
  BlogH,
  Client,
  ContactMe,
  Header,
} from "../Layouts";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <BlogH />
      <Client />
      <ContactMe />
    </>
  );
};

export default Home;
