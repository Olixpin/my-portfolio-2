import React from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import Button from "../components/UI/Button";
import { useGlobalContext } from "../context/context";
import Paras from "../components/UI/Paras";

const Resume = () => {
  const circles = (circleToFill) => {
    const generatedCircles = [];
    for (let i = 0; i < 10; i++) {
      generatedCircles.push(
        <div
          key={i}
          className={`${
            i < circleToFill ? "bg-primaryMain" : "bg-grey100 dark:bg-grey200"
          } w-[12px] h-[12px] rounded-full max-[425px]:w-[10px] max-[425px]:h-[10px]`}
        />
      );
    }
    return generatedCircles;
  };

  const SkillSet = ({ skillTitle, circles, rating }) => {
    return (
      <div className="flex justify-between items-center text-left ">
        <h5 className="text-xl dark:text-background font-black flex-[0.3]  max-[619px]:flex-[0.2] max-[619px]:text-sm">
          {skillTitle}
        </h5>
        <div className="flex gap-5 max-[619px]:gap-3 max-[425px]:gap-[10px] flex-[0.6]  text-center ">
          {circles}
        </div>
        <p className="text-sm dark:text-background font-bold flex-[0.1]">
          {rating}
        </p>
      </div>
    );
  };

  const userSkills = [
    { id: 1, skillTitle: "HTML", circles: circles(8), rating: "80%" },
    { id: 2, skillTitle: "CSS", circles: circles(7), rating: "70%" },
    {
      id: 3,
      skillTitle: "Javascript",
      circles: circles(6),
      rating: "60%",
    },
    { id: 4, skillTitle: "React", circles: circles(6), rating: "60%" },
    { id: 5, skillTitle: "Node", circles: circles(4), rating: "40%" },
    { id: 6, skillTitle: "Photoshop", circles: circles(9), rating: "90%" },
    { id: 7, skillTitle: "Wordpress", circles: circles(8), rating: "80%" },
  ];

  const SkillList = () => {
    return (
      <div className="flex flex-col gap-4">
        {userSkills.map((skill) => (
          <SkillSet
            key={skill.id}
            skillTitle={skill.skillTitle}
            circles={skill.circles}
            rating={skill.rating}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-32 bg-background dark:bg-backgroundDark2 max-[800px]:py-16 ">
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center gap-5">
          <h1 className="text-8xl font-medium max-[1028px]:text-7xl dark:text-grey100 max-[800px]:text-5xl max-[425px]:text-3xl">
            My Resume
          </h1>
          <div
            id="wrapper"
            className=" grid gap-16 px-32 max-[1033px]:px-0 py-5 max-[800px]:px-2 max-[800px]:flex flex-col "
            style={{
              gridTemplateColumns: "1fr 0fr 8fr",
            }}
          >
            <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-3 max-[425px]:hidden"></div>

            <div className="middle bg-grey800 dark:bg-background w-[.5px] text-center max-[800px]:hidden">
              &nbsp;
            </div>
            <div className="right py-8 flex flex-col gap-8 max-[800px]:-mt-8">
              <Paras title="Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc. As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism od leo um, at pellentesque velituis a congue sem." />

              <div id="skills" className="flex flex-col gap-8">
                <h5 className="text-4xl font-medium dark:text-background">
                  Skills
                </h5>
                <SkillList />
              </div>
              <Button text="Download CV" link="#" />
            </div>
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default Resume;
