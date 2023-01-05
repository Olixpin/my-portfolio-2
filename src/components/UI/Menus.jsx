import React from "react";
import { Link } from "react-router-dom";
import menus from "./menu";

const Menus = () => {
  return (
    <div className="dark:text-textWhite">
      <ul className="flex flex-col items-start justify-start gap-4 text-center">
        {menus.map((menu) => {
          const { id, title, url } = menu;
          return (
            <li key={id}>
              <Link to={url} className="font-medium text-6xl">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menus;
