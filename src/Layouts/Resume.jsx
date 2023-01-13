import React from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import Button from "../components/UI/Button";
import Paras from "../components/UI/Paras";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { faAd, faGamepad, faPenNib } from "@fortawesome/free-solid-svg-icons";

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

const services = [
  {
    id: 1,
    title: "Web Development",
    subTitle:
      "Modern and mobile-ready website that will help you reach all of your marketing.",
    icon: faChrome,
  },

  {
    id: 2,
    title: "Branding",
    subTitle:
      "Get a new logo, business card, letterhead, and social media kit designs.",
    icon: faPenNib,
  },

  {
    id: 3,
    title: "Game Development",
    subTitle:
      "Developing memorable and unique mobile android, ios and video games.",
    icon: faGamepad,
  },

  {
    id: 4,
    title: "Advertising",
    subTitle:
      "Get your business in front of the right people at the right time.",
    icon: faAd,
  },
];

const Service = ({ title, subTitle, icon }) => {
  return (
    <div id="web-development" className="flex flex-col gap-4">
      <div
        id={title}
        className="w-16 h-16 rounded-sm bg-textWhite dark:bg-backgroundDark flex items-center justify-center text-primaryMain dark:text-primaryMain"
      >
        <span>
          <FontAwesomeIcon icon={icon} className="text-3xl" />
        </span>
      </div>
      <h4 className="text-2xl font-medium dark:text-background">{title}</h4>
      <Paras title={subTitle} />
      <a href="#" className="text-primaryMain font-bold">
        Order now
      </a>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div className="grid grid-cols-grid gap-8 ">
      {services.map((service) => (
        <Service key={service.id} {...service} />
      ))}
    </div>
  );
};

const History = ({ date, certificate, institute, summary }) => {
  return (
    <div>
      <Paras title={date} />
      <h4 className="dark:text-background text-2xl">{certificate}</h4>
      <Paras title={institute} />
      {summary && <Paras title={summary} />}
    </div>
  );
};

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-32 bg-background dark:bg-backgroundDark2 max-[800px]:py-16 "
    >
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
            <div className="right py-8 flex flex-col gap-16 max-[800px]:-mt-8">
              <Paras title="Talented UX designer with 7+ years of experience, seeking to elevate UI/UX at ABC, Inc. As Lead UI/UX Head completed project before dead line. ittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euism od leo um, at pellentesque velituis a congue sem." />

              <div id="skills" className="flex flex-col gap-8">
                <h5 className="text-4xl font-medium dark:text-background">
                  Skills
                </h5>
                <SkillList />
              </div>

              <div id="services" className="flex flex-col gap-8">
                <h5 className="text-4xl font-medium dark:text-background">
                  Services
                </h5>
                <ServiceList />
              </div>

              <div id="history" className="flex gap-8 max-[500px]:flex-col">
                <div
                  id="left"
                  className="w-1/2 max-[500px]:w-full flex flex-col gap-6"
                >
                  <h5 className="text-4xl font-medium dark:text-background">
                    Education
                  </h5>
                  <History
                    date="2010 - 2012"
                    certificate="Master in Graphic"
                    institute="New York University"
                  />
                  <History
                    date="2006 - 2009"
                    certificate="Bachelors of FineArt"
                    institute="New York University"
                  />
                  <h5 className="text-4xl font-medium dark:text-background">
                    Awards
                  </h5>
                  <History
                    date="2016 - awwwards"
                    certificate="Site of the Day"
                    summary="Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus."
                  />
                  <History
                    date="2016 - awwwards"
                    certificate="Site of the Day"
                    summary="Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus."
                  />
                </div>
                <div
                  id="right"
                  className="max-[500px]:w-full w-1/2 flex flex-col gap-6"
                >
                  <h5 className="text-4xl font-medium dark:text-background">
                    Experience
                  </h5>
                  <History
                    date="2014 - Present"
                    certificate="Soft Tech Inc."
                    institute="UI Head &amp; Manager"
                    summary="Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus."
                  />
                  <History
                    date="2010 - 2014"
                    certificate="Kana Design Studio"
                    institute="UI / UX Specialist"
                    summary="Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus."
                  />
                  <History
                    date="2009 - 2010"
                    certificate="Paperart"
                    institute="Graphic Designer"
                    summary="Euismod vel bibendum ultrices, fringilla vel eros, donec euismod leo lectus."
                  />
                </div>
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
