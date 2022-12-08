import React, { useState, useCallback } from "react";
import { Stack, TextField, Button } from "@mui/material";

export const TableInsert = ({ getTableNum }) => {
  console.log("TableInsert 렌더링 !");

  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      getTableNum(value);
    },
    [getTableNum, value]
  );
  return (
    <div className="TableInsert">
      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-basic"
          label="테이블 번호를 입력해주세요"
          variant="outlined"
          value={value}
          onChange={onChange}
        />
        <Button variant="contained" type="submit" onClick={onSubmit}>
          확인
        </Button>
      </Stack>
    </div>
  );
};
