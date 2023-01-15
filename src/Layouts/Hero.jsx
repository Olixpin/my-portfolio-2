import React from "react";
import { socials } from "../components/UI/SocialMedia";

const Hero = () => {
  return (
    <section
      id="home"
      className="dark:bg-backgroundDark2 h-[70vh] max-[425px]:h-full -mt-[9vh] flex
   dark:text-white max-[800px]:flex-col max-[800px]:h-[100vh] max-[800px]:-mt-20"
    >
      <div className="left dark:bg-backgroundDark2  flex-[0.7] px-5 flex flex-col items-center justify-center py-24">
        <div className="flex flex-col mx-auto max-w-[910px] gap-4 px-40 max-[1325px]:pl-0 max-[800px]:px-0 max-[425px]:h-[60vh] max-[425px]:justify-center">
          <h1
            className="text-6xl max-[1041px]:text-10xl font-bold text-primaryMain max-[425px]:text-5xl"
            id="fullname"
          >
            Noibi <span className="block">Abdulrasaq</span>
          </h1>
          <p className="text-3xl max-[1041px]:text-xl uppercase tracking-[.24em] text-grey300">
            Frontend Engineer
          </p>
          <p className="text-xl max-[1041px]:text-[16px] text-textBody dark:text-grey200">
            I am a frontend dev based in Lagos Nigeria and enjoy crafting{" "}
            <br className="max-[1166px]:hidden" />
            solid and scalable frontend products with great user experiences.
          </p>
          <div id="social-media" className="flex gap-4">
            {socials.map((social) => {
              const { id, icon, url } = social;
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all hover:text-primaryMain text-xl text-grey200"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative dark:bg-primaryDark bg-primaryMain flex-[0.3] px-5 pt-24 max-[800px]:py-10 flex items-center max-[425px]:p-0">
        <div
          id="profile-image"
          className="border border-grey100 absolute max-[800px]:static w-96 h-96 -left-[188px] bottom-32 flex items-center justify-center max-[1041px]:h-72 max-[1041px]:w-72 max-[1041px]:-left-[150px] max-[1041px]:bottom-40 max-[425px]:w-full !max-[425px]:p-0"
        >
          <div className="w-[22rem] h-[22rem] max-[1041px]:h-72 max-[1041px]:w-full max-[425px]:w-full">
            <img
              src="https://images.unsplash.com/photo-1672843164650-b39a24c549a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="profile"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// max-w-[910.667px]
// max-w-[455.33px]
