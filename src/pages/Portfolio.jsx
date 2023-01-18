import React, { useState } from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import Paras from "../components/UI/Paras";
import { Link } from "react-router-dom";
import { Header2 } from "../Layouts";
import projectData from "../components/projectData";
import { Search } from "@mui/icons-material";

const Portfolio = () => {
  const [index, setIndex] = useState(null);
  const [allProjects, setAllProjects] = useState(true);
  const [hoverImageId, setHoverImageId] = useState(projectData[0]?.id);

  function removeDuplicate(obj) {
    return obj.filter((item, index) => obj.indexOf(item) === index);
  }

  const newData = removeDuplicate(projectData.map((item) => item.category));
  const sameCategory = projectData.filter(
    (item) => item.category === projectData[index]?.category
  );

  return (
    <>
      <Header2 />
      <section className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 -mt-[8.6vh]">
        <ComponentLayoutSize>
          <div className="flex flex-col  justify-center gap-5 py-16">
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
                    } hover:border-b-4 border-b-primaryMain transition-all font-bold cursor-pointer`}
                    onClick={() => {
                      setIndex(null);
                      setAllProjects(true);
                    }}
                  >
                    All Projects
                  </li>

                  {newData?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          sameCategory[0]?.category === item
                            ? "border-b-4 border-b-primaryMain"
                            : ""
                        } hover:border-b-4 border-primaryMain transition-all font-bold cursor-pointer`}
                        onClick={() => {
                          setIndex(
                            projectData.findIndex(
                              (link) => link.category === item
                            )
                          );
                          setAllProjects(false);
                        }}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {!allProjects &&
              sameCategory.map(({ id, image, title, category }) => (
                <div id="project-cont" className="">
                  <Link
                    to={`/portfolio/${title}`}
                    id="service-1"
                    className="grid grid-cols-2 max-[637px]:grid-cols-1"
                    key={id}
                  >
                    <div id={title} className="pro-con">
                      <img src={image} alt={title} className="hover" />
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
                          {title}
                        </h1>
                        <p>{category}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            <div
              id="project-cont"
              className={`${allProjects ? "flex flex-col gap-16" : "hidden"}`}
            >
              {projectData.map(({ id, image, title, category }) => (
                <Link
                  to={`/portfolio/${title}`}
                  id="service-1"
                  className="grid grid-cols-2 max-[637px]:grid-cols-1"
                  key={id}
                >
                  <div
                    id="img"
                    className={`${
                      hoverImageId === id ? "pro-con" : ""
                    } relative`}
                    onMouseEnter={() => {
                      setHoverImageId(id);
                    }}
                  >
                    <img src={image} alt={title} />
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
                      <h1 className="text-7xl max-[952px]:text-6xl max-[637px]:text-5xl">
                        {title}
                      </h1>
                      <p>{category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ComponentLayoutSize>
      </section>
    </>
  );
};

export default Portfolio;
