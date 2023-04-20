import * as React from "react";

export interface IInputFieldProps {
  name: string;
  type?: string;
  selectOptions?: string[];
  placeholder?: string;
  value?: string;
  valid?: boolean;
  setValue: Function;
  setValid?: Function;
}

export function InputField(props: IInputFieldProps) {
  return (
    <>
      <div className="h-full">
        <label htmlFor="name" className="text-md">
          {props.name}
        </label>
        <br />
        {props.type == "select" ? (
          <select
            onChange={(e) => props.setValue(e.target.value)}
            className={` ${
              !props.valid &&
              "focus:ring-[0.2rem] outline-none ring-red-50 ring-offset-2"
            } px-4 p-2 bg-bgGrey w-full h-10 mt-2 rounded-md focus:ring-[0.2rem] outline-none focus:ring-teal-100 focus:ring-offset-2 border-0 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-teal-100`}
            id={props.name}
          >
            <option></option>
            {props.selectOptions?.map((item: any) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        ) : props.type == "textfield" ? (
          <textarea
            onChange={(e) => props.setValue(e.target.value)}
            className={`${
              !props.valid &&
              "focus:ring-[0.2rem] outline-none ring-red-50 ring-offset-2"
            } focus:ring-[0.2rem] outline-none focus:ring-teal-100 focus:ring-offset-2 bg-bgGrey mt-2 w-full h-20 rounded-md h-40 border-0 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-teal-100 `}
            placeholder={props.placeholder}
          />
        ) : (
          <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${
              !props.valid &&
              "focus:ring-[0.2rem] outline-none ring-red-50 ring-offset-2"
            } focus:ring-[0.2rem] outline-none focus:ring-teal-100 focus:ring-offset-2 focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-teal-100 bg-bgGrey w-full  h-full mt-2 rounded-md px-4`}
            id={props.name}
            onChange={(e: any) => {
              props.setValue(e.target.value);
              // props.value.length > 3
              //   ? props.setValid(true)
              //   : props.setValid(false);
            }}
          />
        )}
      </div>
    </>
  );
}
