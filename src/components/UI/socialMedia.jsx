import React from "react";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const socials = [
  {
    id: 2,
    icon: <Twitter />,
    url: "https://twitter.com/olixpin",
  },

  {
    id: 3,
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/company/olixpin",
  },

  {
    id: 4,
    icon: <GitHub />,
    url: "https://www.instagram.com/olixpin/",
  },
];

const SocialMedia = () => {
  return (
    <>
      {socials.map((social) => {
        const { id, icon, url } = social;
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:text-primaryMain text-xl"
          >
            {icon}
          </a>
        );
      })}
    </>
  );
};

export { SocialMedia, socials}
