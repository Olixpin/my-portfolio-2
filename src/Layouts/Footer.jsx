import React from "react";
import { ComponentLayoutSize, SocialMediaIcons } from "../components/UI";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section
      id=""
      className="py-32 bg-background dark:bg-backgroundDark2 max-[800px]:py-16 "
    >
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center ">
          <div
            id=""
            className=" flex gap-16 px-16 max-[1033px]:px-0 py-2 pl-0 max-[800px]:px-0 max-[800px]:flex max-[800px]:gap-0 max-[800px]:py-0 dark:text-grey100 itemes-center justify-between max-[584px]:flex-col max-[584px]:gap-4 max-[584px]:items-center max-[584px]:justify-center text-grey300"
          >
            <div id="" className="flex gap-4">
              <SocialMediaIcons />
            </div>
            <p>© {year} Olix. All Rights Reserved.</p>
            <div>
              Developed by <b>Olix.</b>
            </div>
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default Footer;
