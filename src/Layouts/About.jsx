import {
  CheckCircleOutline,
  MilitaryTech,
  SentimentSatisfied,
} from "@mui/icons-material";

import React from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import Button from "../components/UI/Button";
import signature from "../assets/signature.png";
import Paras from "../components/UI/Paras";
import { IconAndText } from "../components/UI";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16"
    >
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center gap-5">
          <h1 className="text-6xl font-medium max-[1028px]:text-4xl dark:text-grey100 max-[425px]:text-3xl">
            About Me
          </h1>
          <div
            className=" grid gap-16 px-8 max-[1033px]:px-0 py-5 max-[800px]:px-2 max-[800px]:flex flex-col "
            style={{
              gridTemplateColumns: "1fr 0 8fr",
            }}
          >
            <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-3">
              <IconAndText
                Icon={CheckCircleOutline}
                text={
                  <span>
                    Completed <br />
                    Project
                  </span>
                }
              />
              <IconAndText
                Icon={SentimentSatisfied}
                text={
                  <span>
                    Happy
                    <br />
                    Clients
                  </span>
                }
              />
              <IconAndText
                Icon={MilitaryTech}
                text={
                  <span>
                    Project <br />
                    Won
                  </span>
                }
              />
            </div>

            <div className="middle bg-grey800 dark:bg-background w-[.5px] text-center max-[800px]:hidden">
              &nbsp;
            </div>
            <div className="right py-8 flex flex-col gap-8 max-[800px]:-mt-8">
              <Paras title="I am Noibi Abdulrasaq O. I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me 🙃. I'm committed to creating fluent user experiences while staying fashionable." />
              <Paras title="In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar." />
              <Button text="Contact Me" link="#contact" />
              <img
                src={signature}
                alt="signature"
                className="w-1/3 mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default About;
