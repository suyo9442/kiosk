import "./App.css";
import React, { useCallback, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TableTemplete } from "./components/TableTemplete/TableTemplete";
import { MenuTemplete } from "./components/MenuTemplete/MenuTemplete";
import { data } from "./data/prodList";

function App() {
  console.log("App 렌더링 !");

  const navigate = useNavigate();
  const [tableNum, setTableNum] = useState(0);
  const [prodList, setProdList] = useState(data); //❗️
  const [addModal, setAddModal] = useState(false);

  const getTableNum = (num) => {
    setTableNum((prev) => num);
    console.log(tableNum);
    navigate("/menu");
  };

  const deleteList = (deleteId) => {
    setProdList((prev) => prodList.filter((list) => list.idx !== deleteId));
  };

  const openModal = () => {
    // 클릭하면 추가 모달창 뜸
    setAddModal(!addModal);
  };

  const nextId = useRef(5);

  const addList = (name, text, currency) => {
    // 오브젝트랑 같은 템플릿을 배열에 추가해줄거임
    // input에 value들을 가져와야함

    const addtemp = {
      // id: 현재아이디에서 +1을 해주어야하는뎅..,
      idx: nextId.current,
      text,
      currency,
    };

    setProdList((prev) => {
      prodList.concat(addtemp);
    });

    nextId.current += 1;
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
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
