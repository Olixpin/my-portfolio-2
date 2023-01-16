import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const SocialMediaIcons = () => {
  const socials = [
    {
      id: 4,
      icon: <Twitter />,
      url: "https://twitter.com/olixpin",
    },

    {
      id: 5,
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/company/olixpin",
    },

    {
      id: 6,
      icon: <GitHub />,
      url: "https://www.github.com/olixpin/",
    },
  ];
  return (
    <div className="flex gap-5">
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
  );
};

export default SocialMediaIcons;
