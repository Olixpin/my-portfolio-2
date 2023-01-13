import React, { useState } from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import Paras from "../components/UI/Paras";
import Branding2 from "../assets/branding.jpg";
import UIUX from "../assets/ui-ux-design.jpg";
import Photography from "../assets/photography.jpg";
import Development from "../assets/development.jpg";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Projects = () => {
  const links = [
    { id: "UI UX Design", imageUrl: UIUX, title: "Gooir" },
    { id: "Photography", imageUrl: Photography, title: "Mozar" },
    { id: "Development", imageUrl: Development, title: "Stay Fit" },
    { id: "Branding", imageUrl: Branding2, title: "Zorro" },
  ];

  const [index, setIndex] = useState(null);

  const [allProjects, setAllProjects] = useState(true);
  const [hoverImageId, setHoverImageId] = useState(links[0]?.id);
  return (
    <section
      id="portfolio"
      className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 "
    >
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center gap-5">
          <h1 className="text-8xl font-medium max-[1028px]:text-7xl dark:text-grey100 max-[800px]:text-5xl max-[425px]:text-3xl">
            My Projects
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
              <Paras title="A Collection of my favorites project I’ve designed recently. Feeling great while sharing here." />
            </div>
          </div>
          <div
            id="wrapper"
            className=" grid gap-[3.2rem] px-32 max-[1033px]:px-0 py-5 max-[800px]:px-2 max-[800px]:flex flex-col"
            style={{
              gridTemplateColumns: "1fr 8fr",
            }}
          >
            <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-2 max-[425px]:hidden"></div>

            <div className="right py-8 flex flex-col gap-16 max-[800px]:-mt-8 max-[637px]:py-0">
              <ul className="dark:text-background flex gap-8 max-[637px]:flex-wrap max-[637px]:justify-center">
                <li
                  className={`${
                    allProjects ? "border-b-4 border-b-primaryMain" : ""
                  } hover:border-b-4 border-b-primaryMain transition-all font-bold`}
                  onClick={() => {
                    setIndex(null);
                    setAllProjects(true);
                  }}
                >
                  <a href="#allLast">All Projects</a>
                </li>
                {links?.map(({ id, title }) => (
                  <li
                    key={id + title}
                    className={`${
                      index === links.findIndex((link) => link.id === id)
                        ? "border-b-4 border-b-primaryMain"
                        : ""
                    } hover:border-b-4 border-primaryMain transition-all font-bold`}
                    onClick={() => {
                      setIndex(links.findIndex((link) => link.id === id));
                      setAllProjects(false);
                    }}
                  >
                    <a href={"#" + title}>{id}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {!allProjects && (
            <div id="project-cont" className="">
              <Link
                to={`/project/${links[index]?.title}`}
                id="service-1"
                className="grid grid-cols-2 max-[637px]:grid-cols-1"
              >
                <div id={links[index]?.title} className="pro-con">
                  <img
                    src={links[index]?.imageUrl}
                    alt={links[index]?.title}
                    className="hovver"
                  />
                  <Search
                    id="searchIcon"
                    className="text-background absolute top-8 right-8 z-10 searchIcon"
                  />
                </div>
                <div
                  id="text"
                  className="bg-textWhite flex items-center px-24 max-[952px]:px-8"
                >
                  <div className="flex flex-col gap-16 max-[637px]:gap-4 max-[637px]:py-8">
                    <h1 className="text-8xl max-[952px]:text-7xl max-[637px]:text-5xl">
                      {links[index]?.title}
                    </h1>
                    <p>{links[index]?.id}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          <div
            id="project-cont"
            className={`${allProjects ? "flex flex-col gap-16" : "hidden"}`}
          >
            {links.map(({ id, imageUrl, title }) => (
              <a
                href="#"
                id="service-1"
                className="grid grid-cols-2 max-[637px]:grid-cols-1"
                key={id}
              >
                <div
                  id="img"
                  className={`${hoverImageId === id ? "pro-con" : ""} relative`}
                  onMouseEnter={() => {
                    setHoverImageId(id);
                  }}
                >
                  <img src={imageUrl} alt={title} />
                  {hoverImageId === id ? (
                    <Search
                      id="searchIcon"
                      className="text-background absolute top-8 right-8 z-10 searchIcon"
                    />
                  ) : (
                    ""
                  )}
                  {id === "Photography" && <span id="allLast"></span>}
                </div>
                <div
                  id="text"
                  className="bg-textWhite flex items-center px-24 max-[952px]:px-8"
                >
                  <div className="flex flex-col gap-16 max-[637px]:gap-4 max-[637px]:py-8">
                    <h1 className="text-8xl max-[952px]:text-7xl max-[637px]:text-5xl">
                      {title}
                    </h1>
                    <p>{id}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default Projects;
