import React from "react";
import { TableTempleteContainer } from "./style";
import { TableInsert } from "../TableInsert/TableInsert";

export const TableTemplete = ({ getTableNum }) => {
  console.log("TableTemplete 렌더링 !");

  return (
    <>
      <TableTempleteContainer>
        <TableInsert getTableNum={getTableNum}></TableInsert>
      </TableTempleteContainer>
    </>
  );
};
