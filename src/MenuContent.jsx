import React from "react";
import MenuCard from "./MenuCard";

const MenuContent = ({ content }) => {
  console.log(content);
  return (
    <div className="card-container">
      {content.map((item, index) => {
        return <MenuCard cardItem={item} key={index} />;
      })}
    </div>
  );
};

export default MenuContent;
