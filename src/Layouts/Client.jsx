import React, { useState } from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import { IconAndText, Button, Paras, Button2 } from "../components/UI";
import brand0 from "../assets/brand1.png";
import brand1 from "../assets/brand2.png";
import brand2 from "../assets/brand3.png";
import brand3 from "../assets/brand4.png";

const Client = () => {
  const allbrands = [brand0, brand1, brand2, brand3];
  return (
    <section
      id="portfolio"
      className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 "
    >
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center ">
          <h1 className="text-6xl font-medium max-[1028px]:text-5xl dark:text-grey100 max-[425px]:text-3xl">
            My Clients
          </h1>
          <div
            className=" grid gap-16 px-16 max-[1033px]:px-0 py-5 max-[800px]:px-0 max-[800px]:flex flex-col max-[800px]:gap-0 max-[800px]:py-0"
            style={{
              gridTemplateColumns: "1fr 0fr 8fr",
            }}
          >
            <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-3 max-[425px]:hidden"></div>

            <div className="middle bg-grey800 dark:bg-background w-[.5px] text-center max-[800px]:hidden">
              &nbsp;
            </div>
            <div className="right py-8 flex flex-col gap-16 ">
              <Paras title="Suspendisse potenti. Sed egestas eros eu libero posuere ultrices. Nullam ut aliquet felis, sit amet imperdiet felis." />
            </div>
          </div>
          <div
            id="blog"
            className=" grid gap-[3.2rem] px-32 pr-16 max-[1033px]:px-16 py-5 max-[800px]:px-0 max-[800px]:flex flex-col"
          >
            <div className="flex max-[800px]:py-0 s max-[800px]:grid max-[800px]:grid-cols-2 justify-around items-center max-[800px]:gap-4 max-[800px]:justify-between ">
              {allbrands.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt="brand"
                  className="w-32 dark:bg-blend-multiply max-[800px]:w-24"
                />
              ))}
            </div>
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default Client;
