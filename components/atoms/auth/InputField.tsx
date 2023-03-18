import * as React from "react";
import Input from "./input";
export interface IInputFieldProps {
  name: string;
  placeholder: string;
  setInput: any;
}

export function InputField(props: IInputFieldProps) {
  return (
    <div className="">
      <div>{props.name}</div>
      <div className="">
        <Input setInput={props.setInput} placeholder={props.placeholder} />
      </div>
    </div>
  );
}
