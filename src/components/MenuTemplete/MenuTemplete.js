import React, { useState } from "react";
import "./style.css";
import MenuTempleteItem from "./MenuTempleteItem";

export const MenuTemplete = ({
  tableNum,
  prodList,
  deleteList,
  openModal,
  addModal,
}) => {
  console.log("MenuTemplete 렌더링 !");
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [currValue, setCurrValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className="MenuTemplete">
      <button onClick={openModal}>➕</button>
      {addModal ? (
        <div className="AddModal">
          <div className="container">
            <p>
              <em>제목 </em>
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={onChange}
              />
            </p>
            <p>
              <em>설명 </em>
              <input type="text" name="text" value={textValue} />
            </p>
            <p>
              <em>가격 </em>
              <input type="text" name="currency" value={currValue} />
            </p>
            <input type="button" value="추가하기" />
          </div>
        </div>
      ) : null}
      <h2>{tableNum}번 테이블입니다</h2>
      <div className="contianer">
        {prodList.map((data) => (
          <MenuTempleteItem
            name={data.name}
            key={data.id}
            idx={data.idx}
            url={data.url}
            price={data.currency}
            deleteList={deleteList}
          />
        ))}
      </div>
    </div>
  );
};
