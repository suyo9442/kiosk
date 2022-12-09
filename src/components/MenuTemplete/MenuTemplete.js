import React, { useState } from "react";
import "./style.css";
import MenuTempleteItem from "./MenuTempleteItem";

export const MenuTemplete = ({
  tableNum,
  prodList,
  deleteList,
  openModal,
  addModal,
  addList,
  updateModal,
  updateList,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [currValue, setCurrValue] = useState("");

  const onChange = (e) => {
    const name = e.target.name;

    // 만약 이벤트가 일어난 타겟의 이름이 ~면 해당 state를 변경해줌
    if (name === "name") {
      setNameValue((prev) => e.target.value);
    } else if (name === "text") {
      setTextValue((prev) => e.target.value);
    } else if (name === "currency") {
      setCurrValue((prev) => e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addList(nameValue, textValue, currValue);
  };

  return (
    <div className="MenuTemplete">
      {/* <input
        type="button"
        name="update"
        value="✏️"
        onClick={(e) => openModal(e.target.name)}
      /> */}

      <button name="add" onClick={(e) => openModal(e.target.name)}>
        ➕
      </button>
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
              <input
                type="text"
                name="text"
                value={textValue}
                onChange={onChange}
              />
            </p>
            <p>
              <em>가격 </em>
              <input
                type="text"
                name="currency"
                value={currValue}
                onChange={onChange}
              />
            </p>
            <input type="button" value="추가하기" onClick={onSubmit} />
          </div>
        </div>
      ) : null}
      {/* {updateModal ? <p>외않되?</p> : null} */}
      <h2>{tableNum}번 테이블입니다</h2>
      <div className="contianer">
        {prodList.map((data) => (
          <MenuTempleteItem
            name={data.name}
            key={data.id}
            idx={data.idx}
            url={data.url}
            text={data.text}
            price={data.currency}
            deleteList={deleteList}
            openModal={openModal}
            updateModal={updateModal}
            updateList={updateList}
          />
        ))}
      </div>
    </div>
  );
};
