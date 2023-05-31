import React from "react";

const MenuCard = ({ cardItem }) => {
  const { id, title, img, desc, price } = cardItem;

  return (
    <div className="menu-card">
      <div className="main-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-desc">{desc}</p>
        <h2 className="price">${price}</h2>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default MenuCard;
