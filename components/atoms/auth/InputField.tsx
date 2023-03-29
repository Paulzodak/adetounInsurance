import * as React from "react";
import Input from "./input";
export interface IInputFieldProps {
  name: string;
  placeholder: string;
  setInput: any;
  inputIsValid: boolean;
}

export function InputField(props: IInputFieldProps) {
  return (
    <div className="relative h-full">
      <div className="absolute left-4 top-2  ">{props.name}</div>
      {/* <div className=""> */}
      <input
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        placeholder={props.placeholder}
        className={` ${
          !props.inputIsValid ? "focus:ring-rose-200" : " focus:ring-green-200"
        } bg-bgGrey h-full w-full outline-0 pt-8  px-4 focus:ring focus:ring-offset-2  rounded-md`}
      />
      {/* <Input
          setInput={props.setInput}
          placeholder={props.placeholder}
          name={props.name}
        /> */}
      {/* </div> */}
    </div>
  );
}
