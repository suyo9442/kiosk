import React, { useState } from "react";
import "./style.css";

const MenuTempleteItem = ({
  name,
  url,
  price,
  idx,
  text,
  deleteList,
  openModal,
  updateModal,
  updateList,
}) => {
  // console.log("MenuTempleteItem 렌더링 !");

  const [title, setTitle] = useState(name);
  const [desc, setDesc] = useState(text);
  const [currency, setCurrency] = useState(price);

  const onChange = (e) => {
    const name = e.target.name;

    if (name === "name") {
      setTitle((prev) => e.target.value);
    } else if (name === "text") {
      setDesc((prev) => e.target.value);
    } else if (name === "currency") {
      setCurrency((prev) => e.target.value);
    }
  };

  return (
    <div className="MenuTempleteItem">
      <input
        type="button"
        name={idx}
        onClick={(e) => deleteList(Number(e.target.name))}
        value="❌"
      />
      <input
        type="button"
        name="update"
        value="✏️"
        onClick={(e) => openModal(e.target.name)}
      />
      <img src={url} alt="untitled" />

      {updateModal ? (
        <>
          <p>{idx}</p>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={onChange}
          />
          <br />
          <input
            type="text"
            name="text"
            defaultValue={text}
            onChange={onChange}
          />
          <br />
          <input
            type="text"
            name="currency"
            defaultValue={price}
            onChange={onChange}
          />
          <br />
          <input
            type="button"
            value="수정하기"
            name={idx}
            onClick={() => {
              updateList(title, desc, currency, idx);
            }}
          />
        </>
      ) : (
        <>
          <p>{idx}</p>
          <p style={{ fontSize: "20px", fontWeight: 700 }}>{name}</p>
          <p>{text}</p>
          <p>{price}</p>
        </>
      )}
    </div>
  );
};

export default MenuTempleteItem;
