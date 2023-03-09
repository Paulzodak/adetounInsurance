import * as React from "react";
import Input from "./input";
export interface IInputFieldProps {
  name: string;
  placeholder: string;
}

export function InputField(props: IInputFieldProps) {
  return (
    <>
      <div>{props.name}</div>
      <div className="">
        <Input placeholder={props.placeholder} />
      </div>
    </>
  );
}
