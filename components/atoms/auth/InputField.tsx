import * as React from "react";
import Input from "./input";
export interface IInputFieldProps {
  name: string;
  placeholder: string;
  setInput?: any;
  inputIsValid?: boolean;
  showPassword?: boolean;
  password?: boolean;
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
        type={props.password && props.showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        className={` outline-none ${
          !props.inputIsValid ? "focus:ring-rose-50" : " focus:ring-teal-50"
        } bg-bgGrey h-full w-full outline-0 pt-8  px-4 focus:ring-[0.3rem] focus:ring-offset-2  rounded-md border-none`}
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
