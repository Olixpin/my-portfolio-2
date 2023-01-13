import React from "react";
import { useGlobalContext } from "../../context/context";

const IconAndText = ({ Icon, text, title }) => {
  const { screenWidth } = useGlobalContext();
  return (
    <div className="flex flex-col justify-end max-[800px]:justify-between text-right max-[800px]:text-left items-end max-[800px]:items-start gap-2">
      {Icon && (
        <Icon
          className="text-primaryMain"
          style={{
            fontSize: screenWidth > 425 ? 50 : 30,
          }}
        />
      )}
      {title && (
        <h1 className="text-3xl font-[900] dark:text-background">{title}</h1>
      )}
      <p className="dark:text-background">{text}</p>
    </div>
  );
};

export default IconAndText;
