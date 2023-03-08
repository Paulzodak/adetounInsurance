import * as React from "react";

export interface IButtonProps {
  text: String;
}

export function Button(props: IButtonProps) {
  return (
    <button className="border h-full w-full bg-btnGreen text-[white] rounded-md px-4 text-sm sm:text-sm md:text-md ">
      {props.text}
    </button>
  );
}
