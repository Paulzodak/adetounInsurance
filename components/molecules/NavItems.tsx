import * as React from "react";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Link } from "react-scroll";
export function NavItems(props: any) {
  const router = useRouter();
  return (
    <div className="my-auto font-nunito">
      <div className="hidden  gap-x-2 xl:gap-x-10 lg:grid grid-cols-[repeat(6,auto)] lg:text-lg  ">
        {props.navItems.map((item: any) => (
          <Link
            activeClass="active"
            to={item.to}
            spy={true}
            smooth={true}
            // offset={50}
            duration={2000}
            // onClick={() => {
            //   router.push({
            //     pathname: item.route,
            //   });
            // }}
            className={`rounded-sm px-1 hover:border-l-4 hover:border-mainPurple cursor-pointer duration-150 ease-out text-md font-inter  ${
              item.route === router.pathname &&
              "border-l-4 border-mainPurple text-mainPurple"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <motion.div
          className={`lg:hidden my-auto`}
          onClick={() => props.setShowNav(!props.showNav)}
        >
          <MenuIcon size="2rem" className=" my-auto" />
        </motion.div>
      </div>
    </div>
  );
}
