import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import menus from "./menu";
import { motion } from "framer-motion";

const Menus = () => {
  const [pageToggle, setPageToggle] = React.useState(false);

  const handleToggle = () => {
    setPageToggle(!pageToggle);
  };

  console.log(menus[menus.length - 1].url);
  return (
    <div className="dark:text-textWhite">
      <ul className="flex flex-col items-start justify-start gap-4 text-left max-[425px]:gap-2">
        {menus.map((menu) => {
          const { id, title, url } = menu;
          return (
            <li key={id}>
              {url === menus[menus.length - 1].url ? (
                <Link
                  to={url}
                  className="font-medium text-6xl max-[425px]:text-3xl  transition-all"
                  onClick={handleToggle}
                >
                  {" "}
                  <div className="flex items-center justify-center mb-6 max-[425px]:mb-1 hover:text-primaryMain">
                    <h3 className="font-medium">{title}</h3>
                    <motion.div
                      animate={{
                        rotate: pageToggle ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <KeyboardArrowDownOutlined
                        style={{ fontSize: "2rem" }}
                        className={`transition-all`}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{
                      height: pageToggle ? "auto" : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  >
                    {pageToggle && (
                      <>
                        <div className="flex flex-col gap-4 transition-all">
                          <Link
                            to="/blog"
                            className="font-normal text-3xl transition-all hover:text-primaryMain max-[425px]:text-xl"
                          >
                            Blog List
                          </Link>
                          <Link
                            to="/work"
                            className="font-normal text-3xl max-[425px]:text-xl transition-all hover:text-primaryMain"
                          >
                            Work List
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                </Link>
              ) : (
                <Link
                  to={url}
                  className="font-medium text-6xl hover:text-primaryMain transition-all max-[425px]:text-3xl"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menus;
