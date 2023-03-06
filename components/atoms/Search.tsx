import * as React from "react";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
export interface ISearchProps {
  placeholder: string;
}

export function Search(props: ISearchProps) {
  return (
    <div className="relative">
      <input
        className="border-borderGrey border-[2px] rounded-md h-10 w-full pl-8 sm:pl-10 placeholder:text-md truncate placeholder:text-textGrey text-textGrey "
        placeholder={props.placeholder}
      />
      <SearchIcon
        className="absolute top-[0.8rem] left-[0.5rem] font-inter"
        color="#BCC1CAFF"
        size="1rem"
      />
    </div>
  );
}
