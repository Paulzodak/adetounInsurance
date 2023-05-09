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
    <div className="relative h-full ">
      <div className="h-[50%] flex items-center text-lg ">{props.name}</div>
      <input
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        type={
          !props.password ? "text" : props.showPassword ? "text" : "password"
        }
        placeholder={props.placeholder}
        // className={` outline-none ${
        //   !props.inputIsValid ? "focus:ring-rose-50" : " focus:ring-teal-50"
        // } bg-bgGrey h-[50%] w-full outline-0   px-4 focus:ring-[0.3rem] focus:ring-offset-2  rounded-md border-none`}
        className="border-[2px] border-borderGrey w-full rounded-md h-[50%] placeholder:text-sm  "
      />
    </div>
  );
}
