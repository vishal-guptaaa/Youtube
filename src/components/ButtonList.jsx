import React from "react";

const ButtonList = ({ buttons }) => {
  return (
    <div className="flex gap-2 py-2 px-4 flex-wrap">
      {buttons.map((button) => (
        <button className="bg-gray-200 px-4 py-1 rounded-md" key={button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
