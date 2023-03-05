import * as React from "react";
import { Navbar } from "../organisms/Navbar";
export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  return (
    <div className="grid grid-cols-[17rem_10rem_25rem] w-full justify-around h-[4rem] border border-[red]">
      <Navbar />
      <div className="border-[red] border">item 1</div>
      <div className="border-[red] border">item 1</div>
    </div>
  );
}
