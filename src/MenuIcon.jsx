import React from "react";

const MenuIcon = ({ category, selectedMenu }) => {
  return (
    <div>
      {category.map((categoryItem, index) => (
        <button key={index} onClick={() => selectedMenu(categoryItem)}>
          {categoryItem}
        </button>
      ))}
    </div>
  );
};

export default MenuIcon;
