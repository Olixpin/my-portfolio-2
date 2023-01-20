import React from "react";
import { useParams } from "react-router-dom";
import { ComponentLayoutSize, Paras } from "../components/UI";
import { Header2 } from "../Layouts";
import projectData from "../components/projectData";

const EachPortfolio = () => {
  const { title } = useParams();
  const project = projectData.find((project) => project.title === title);
  if (!project) return <h1>404</h1>;

  const {
    year,
    technology,
    category,
    image,
    taskGoal,
    otherImages,
    taskResult,
    video,
    link,
  } = project;

  return (
    <div>
      <Header2 />
      <section className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 -mt-[8.8vh]">
        <ComponentLayoutSize>
          <div className="flex flex-col  justify-center gap-5 py-16">
            <h1 className="text-6xl font-medium dark:text-grey100 max-[800px]:text-5xl max-[425px]:text-3xl">
              {project.title}
            </h1>
            <div
              className=" grid gap-16 px-32 max-[1033px]:px-0 py-5 max-[800px]:px-2 max-[800px]:flex flex-col "
              style={{
                gridTemplateColumns: "1fr 0fr 8fr",
              }}
            >
              <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-3 max-[425px]:hidden"></div>

              <div className="middle bg-grey800 dark:bg-background w-[.5px] text-center max-[800px]:hidden">
                &nbsp;
              </div>
              <div className="right py-8 flex flex-col gap-16 max-[800px]:-mt-8 dark:text-background">
                <div className="wrap flex gap-16 max-[500px]:flex-col max-[800px]:gap-4">
                  <div id="year">
                    <Paras title="Year" />
                    <h4 className="text-xl">{year}</h4>
                  </div>
                  <div id="technology">
                    <Paras title="Technology" />

                    <h4 className="text-xl">
                      {technology.map((tech) => (
                        <span key={tech}> {tech}</span>
                      ))}
                    </h4>
                  </div>
                  <div id="project-title">
                    {" "}
                    <Paras title="Category" />
                    <h4 className="text-xl">{category}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentLayoutSize>
        <div
          className="wrapper eachImage h-[800px] bg-cover bg-center bg-no-repeat bg-fixed bg-opacity-50 dark:bg-opacity-100 max-[425px]:hidden"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          &nbsp;
        </div>
        <ComponentLayoutSize>
          <div className="flex flex-col justify-center gap-5 py-16 dark:text-background max-[425px]:-mt-32">
            <h4 className="text-3xl">Project Goal:</h4>
            <Paras title={taskGoal} />
            <div
              id="images"
              className="grid gap-8 grid-cols-2 mt-16  max-[500px]:grid-cols-1"
            >
              <div className="left-imgs flex flex-col gap-8 mb-16 max-[800px]:mb-0">
                {otherImages.map((image) => (
                  <a
                    href={link}
                    target="_blank"
                    className="eachImage"
                    key={image}
                  >
                    <img
                      src={image}
                      alt={image}
                      className="
                      hover:scale-[.95] transition duration-500 ease-in-out
                      cursor-pointer
                    "
                    />
                  </a>
                ))}
              </div>
              <div className="right-img max-[500px]:mb-16">
                <a href={link} target="_blank">
                  {" "}
                  <img
                    src={image}
                    alt={image}
                    className="
                      hover:scale-[.95] transition duration-500 ease-in-out
                      cursor-pointer
                    "
                  />
                </a>
              </div>
            </div>
            <h4 className="text-3xl">Project Result:</h4>
            <Paras title={taskResult} />
          </div>

          <div id="nextProject">
            <button
              className={`dark:text-white text-md font-medium px-16 py-3 rounded-md border border-primaryMain hover:bg-primaryDark w-max hover:text-white transition duration-500 ease-in-out`}
              onClick={() => {
                // move to next project
                projectData.map((project, index) => {
                  if (project.title === title) {
                    if (index === projectData?.length - 1) {
                      window.location.href = `/portfolio/${projectData[0]?.title}`;
                    } else {
                      window.location.href = `/portfolio/${
                        projectData[index + 1]?.title
                      }`;
                    }
                  }
                });
              }}
            >
              {projectData.map((project, index) => {
                if (project.title === title) {
                  if (index === projectData.length - 1) {
                    return "Previous Project";
                  } else {
                    return "Next Project";
                  }
                }
              })}
            </button>
          </div>
        </ComponentLayoutSize>
      </section>
    </div>
  );
};

export default EachPortfolio;
