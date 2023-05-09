import * as React from "react";
import { Button } from "../atoms/Button";
export interface IEmailInputProps {
  text: string;
}

export function EmailInput(props: IEmailInputProps) {
  return (
    <div className="relative w-full h-full">
      <input
        className="bg-white w-full h-full rounded-md lg:rounded-xl text-textGrey pl-8 pr-36 text-sm "
        placeholder="Enter your email address"
      />
      <div className={`absolute top-[14%] h-[72%] right-[2%]`}>
        <Button
          text={props.text}
          loading={false}
          animate={false}
          disable={false}
        />
      </div>
    </div>
  );
}
