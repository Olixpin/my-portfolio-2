import React, { useState } from "react";
import ComponentLayoutSize from "../components/UI/ComponentLayoutSize";
import { IconAndText, Button, Paras, Button2 } from "../components/UI";
import blogData from "../components/UI/blogData";

const BlogUI = ({ id, title, subtitle, date, category }) => {
  return (
    <>
      <div
        id="wrapper"
        className=" grid gap-[3.2rem] px-32 pr-16 max-[1033px]:px-16 py-5 max-[800px]:px-10 max-[800px]:flex flex-col bg-textWhite dark:bg-backgroundDark2  rounded-2xl hover:shadow-2xl transition-all duration-500 ease-in-out border border-dashed border-grey200 max-[425px]:border-none max-[425px]:p-16 max-[425px]:px-8"
        style={{
          gridTemplateColumns: "1fr 8fr",
        }}
      >
        <div className="flex flex-col gap-12 max-[800px]:py-0 py-8 max-[800px]:grid max-[800px]:grid-cols-2 max-[425px]:hidden">
          <IconAndText title={category} text={date} />
        </div>

        <div className="right py-8 flex flex-col gap-8 max-[800px]:-mt-8 max-[637px]:py-0">
          <Paras mainTitle={title} />
          <Paras title={subtitle} />
          <Button2 value="Read more" link="#" />
        </div>
      </div>
    </>
  );
};

const BlogUILists = () => {
  return blogData.map((item) => {
    return <BlogUI {...item} key={item.id} />;
  });
};

const BlogH = () => {
  return (
    <section
      id="blog"
      className="py-32 bg-white dark:bg-backgroundDark max-[800px]:py-16 "
    >
      <ComponentLayoutSize>
        <div className="flex flex-col  justify-center gap-16">
          <h1 className="text-8xl font-medium max-[1028px]:text-7xl dark:text-grey100 max-[800px]:text-5xl max-[425px]:text-3xl">
            My Blog
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
              <Paras title="I write sometimes, about designs, frontend developments, Technical docs and life in general." />
            </div>
          </div>
          <BlogUILists />
          <div className="text-center">
            <Button text="View more" link="#" />
          </div>
        </div>
      </ComponentLayoutSize>
    </section>
  );
};

export default BlogH;
