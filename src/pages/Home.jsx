import React from "react";
import {
  Hero,
  About,
  Resume,
  Projects,
  BlogH,
  ContactMe,
  Header,
} from "../Layouts";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <BlogH />
      <ContactMe />
    </>
  );
};

export default Home;
