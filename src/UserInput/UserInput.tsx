import React, { ChangeEvent } from "react";

type Props = {
  currentName?: string;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const userInput = (props: Props) => {
    const inputStyle = {
        border: "2px solid red",
      };
  return (
    <input type="text" style={inputStyle} onChange={props.changed} value={props.currentName} />
  );
};

export default userInput;
