import "./App.css";
import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TableTemplete } from "./components/TableTemplete/TableTemplete";
import { MenuTemplete } from "./components/MenuTemplete/MenuTemplete";
import { data } from "./data/prodList";

function App() {
  // console.log("App 렌더링 !");

  const navigate = useNavigate();
  const [tableNum, setTableNum] = useState(0);
  const [prodList, setProdList] = useState(data); //❗️
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  // READ
  const getTableNum = (num) => {
    setTableNum((prev) => num);
    navigate("/menu");
  };

  // DELETE
  const deleteList = (deleteId) => {
    setProdList((prev) => prodList.filter((list) => list.idx !== deleteId));
  };

  const openModal = (name) => {
    if (name === "add") {
      setAddModal(!addModal);
      console.log(addModal);
    } else if (name === "update") {
      setUpdateModal(!updateModal);
      console.log(updateModal);
    }
  };

  // CREATE
  const nextId = useRef(5);
  const addList = (name, text, currency) => {
    const temp = {
      id: nextId.current,
      idx: nextId.current,
      name: name,
      text: text,
      url: "https://via.placeholder.com/300/b0f7cc",
      currency: currency,
    };

    setProdList((prev) => prodList.concat(temp));
    nextId.current += 1;
  };

  // UPDATE
  const updateList = (title, desc, currency, idx) => {
    prodList[idx].name = title;
    prodList[idx].text = desc;
    prodList[idx].currency = currency;

    setUpdateModal(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<TableTemplete getTableNum={getTableNum} />}
        ></Route>
        <Route
          path="/menu"
          element={
            <MenuTemplete
              tableNum={tableNum}
              prodList={prodList}
              deleteList={deleteList}
              openModal={openModal}
              addModal={addModal}
              addList={addList}
              updateModal={updateModal}
              updateList={updateList}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
