import React from "react";

const Button2 = ({ value }) => {
  return (
    <div>
      <a href="#" className="text-primaryMain font-bold">
        {value ? value : "Order now"}
      </a>
    </div>
  );
};

export default Button2;
