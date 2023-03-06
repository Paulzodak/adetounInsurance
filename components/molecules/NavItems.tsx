import * as React from "react";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { motion } from "framer-motion";
export interface INavbarProps {}

export function NavItems(props: any) {
  const navItems = [
    {
      name: "Shop",
    },
    {
      name: "Offers",
    },
    {
      name: "Our story",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <div className="">
      <div className="hidden lg:grid grid-cols-[auto_auto_auto_auto_]  mt-[1rem] ">
        {navItems.map((item: any) => (
          <div className="text-md font-inter">{item.name}</div>
        ))}
      </div>
      {!props.showSideNav && (
        <motion.div
          initial={{ x: -500 }}
          animate={{
            x: 0,
            transition: { duration: 0.1 },
          }}
          exit={{ x: 500 }}
          className="lg:hidden"
          onClick={() => props.setShowSideNav(true)}
        >
          <MenuIcon size="2rem" className="mt-4 ml-4" />
        </motion.div>
      )}
    </div>
  );
}
