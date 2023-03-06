import * as React from "react";
import { Search } from "../atoms/Search";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";
import { FaRegUser as UserIcon } from "react-icons/fa";
import user from "../../assets/navbar/user.png";
import Image from "next/image";
import { Button } from "../atoms/Button";
export interface INavUtilityProps {}

export function NavUtility(props: any) {
  const iconSize = "1.5rem";

  return (
    <div className=" grid grid-cols-[auto_auto] ">
      <div className=" w-[8rem] md:w-[15rem] mt-[0.6rem] ">
        <Search placeholder={"Search product..."} />
      </div>
      <div className=" grid grid-cols-[auto_auto_auto_auto] pt-[1rem]">
        <div className="relative">
          <CartIcon size={iconSize} />
          <button className="absolute top-3 left-3 text-xs bg-btnGreen px-[4px] rounded-full text-[white]">
            2
          </button>
        </div>
        <div>Cart</div>

        <div className="w-7 h-7 relative mx-4  rounded-full shadow-md">
          <Image className="rounded-full" src={user} alt={"user"} fill />
        </div>

        <div className="hidden sm:block mt-[-0.3rem]">
          <Button text="Login/Signup"></Button>
        </div>

        {/* <UserIcon size={iconSize} /> */}
      </div>
    </div>
  );
}