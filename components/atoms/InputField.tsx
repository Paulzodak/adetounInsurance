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
  disabled?: boolean;
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
              !props.valid && " focus:ring-red-100  focus:outline-red-100 "
            } px-4 p-2 bg-bgGrey w-full h-10 mt-2 rounded-md  border-0 focus:ring-offset-2 focus:ring-[0.2rem] focus:ring-teal-100 focus:border-transparent focus:outline-offset-2 focus:outline-[0.2rem] focus:outline-teal-10`}
            id={props.name}
            value={props.value}
          >
            <option></option>
            {props.selectOptions?.map((item: any) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        ) : props.type == "textfield" ? (
          <textarea
            onChange={(e) => props.setValue(e.target.value)}
            // className="focus:border-transparent focus:ring-0"
            className={`${
              !props.valid && " focus:ring-red-100 focus:outline-red-100 "
            }  bg-bgGrey mt-2 w-full h-20 rounded-md h-40 border-0  focus:ring-offset-2 focus:ring-[0.2rem] focus:ring-teal-100 focus:border-transparent focus:outline-offset-2 focus:outline-[0.2rem] focus:outline-teal-10`}
            placeholder={props.placeholder}
            value={props.value}
          />
        ) : (
          <input
            disabled={props.disabled}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            className={`${
              !props.valid && " focus:ring-red-100 focus:outline-red-100 "
            }  focus:ring-offset-2 focus:ring-[0.2rem]  focus:ring-teal-100 focus:border-transparent outline-none bg-bgGrey w-full border-0 ring-none  h-full mt-2 rounded-md px-4 focus:outline-offset-2 focus:outline-[0.2rem] focus:outline-teal-10`}
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
