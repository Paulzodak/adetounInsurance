import * as React from "react";

export interface IButtonProps {
  text: String;
}

export function Button(props: IButtonProps) {
  return (
    <button className="border h-10 w-full bg-btnGreen text-[white] rounded-md px-4 ">
      {props.text}
    </button>
  );
}
