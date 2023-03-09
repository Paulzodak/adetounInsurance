import * as React from "react";

export interface IInputProps {
  placeholder: string;
}

export default function Input(props: any) {
  return (
    <input
      placeholder={props.placeholder}
      className="bg-inherit h-full w-full "
    />
  );
}
