import React from "react";
import "./style.css";

const MenuTempleteItem = ({ name, url, price, idx, deleteList }) => {
  console.log("MenuTempleteItem 렌더링 !");
  return (
    <div className="MenuTempleteItem">
      <input
        type="button"
        name={idx}
        onClick={(e) => deleteList(Number(e.target.name))}
        value="❌"
      ></input>
      <img src={url} alt="d" />
      <p>{idx}</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default MenuTempleteItem;
