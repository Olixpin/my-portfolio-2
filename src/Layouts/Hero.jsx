import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import { calcLength } from "framer-motion";
import React from "react";
import ProfileImg from "../assets/olix.png";

const Hero = () => {
  const socials2 = [
    {
      id: 1,
      icon: <Twitter />,
      url: "https://twitter.com/olixpin",
    },

    {
      id: 2,
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/olix",
    },

    {
      id: 3,
      icon: <GitHub />,
      url: "https://www.github.com/olixpin/",
    },

    {
      id: 4,
      icon: <WhatsApp />,
      url: "https://wa.me/2349063363754",
    },
  ];

  return (
    <section
      id="home"
      className="dark:bg-backgroundDark2 h-[70vh] -mt-16  max-[425px]:h-full flex
   dark:text-white max-[640px]:flex-col   max-[800px]:h-[100vh] max-[800px]:-mt-20"
    >
      <div className="left dark:bg-backgroundDark2 max-[640px]:pt-32  flex-[0.7] px-5 flex flex-col items-start justify-center py-24">
        <div className="flex flex-col mx-auto max-w-[910px] gap-4 max-[1325px]:pl-0 max-[800px]:px-0 max-[425px]:h-[60vh] max-[425px]:justify-center">
          <h1
            className="text-5xl font-bold text-primaryMain max-[425px]:text-4xl"
            id="fullname"
          >
            Noibi <span className="block">Abdulrasaq</span>
          </h1>
          <p className="text-2xl max-[1041px]:text-xl uppercase tracking-[.24em] text-grey300">
            Frontend Engineer
          </p>
          <p className="text-sm max-[1041px]:text-[16px] text-textBody dark:text-grey200">
            I am a frontend dev based in Lagos Nigeria and enjoy crafting{" "}
            <br className="max-[1166px]:hidden" />
            solid and scalable frontend products with great user experiences.
          </p>
          <div id="social-media" className="flex gap-4">
            {socials2.map((social) => {
              const { id, icon, url } = social;
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-primaryMain text-grey200"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative dark:bg-primaryDark bg-primaryMain flex-[0.3] px-5 py-24 max-[800px]:py-10 flex items-center max-[425px]:p-0 max-[425px]:bg-none">
        <div
          id="profile-image"
          className="border border-grey100 absolute max-[800px]:static w-72 h-72 -left-[143px] flex items-center justify-center max-[1041px]:h-72 max-[1041px]:w-72 max-[1041px]:-left-[150px] max-[1041px]:bottom-40 max-[425px]:w-full !max-[425px]:p-0"
        >
          <div className="w-[22rem] h-[22rem] max-[1041px]:h-72 max-[1041px]:w-full max-[425px]:w-full flex items-center justify-center">
            <img
              src={ProfileImg}
              alt="Olix"
              className="object-cover w-[90%] max-[425px]:w-full max-[425px]:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
