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
              !props.valid && " focus:ring-red-100 "
            } px-4 p-2 bg-bgGrey w-full h-10 mt-2 rounded-md  border-0 focus:ring-offset-2 focus:ring-[0.2rem] focus:ring-teal-100 focus:border-transparent outline-none`}
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
            // className="focus:border-transparent focus:ring-0"
            className={`${
              !props.valid && " focus:ring-red-100  "
            }  bg-bgGrey mt-2 w-full h-20 rounded-md h-40 border-0  focus:ring-offset-2 focus:ring-[0.2rem] focus:ring-teal-100 focus:border-transparent outline-none`}
            placeholder={props.placeholder}
          />
        ) : (
          <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${
              !props.valid && " focus:ring-red-100 "
            }  focus:ring-offset-2 focus:ring-[0.2rem] border-0 focus:ring-teal-100 focus:border-transparent outline-none bg-bgGrey w-full border-0 ring-none  h-full mt-2 rounded-md px-4`}
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
