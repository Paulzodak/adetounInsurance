import * as React from "react";
import { NavItems } from "../molecules/NavItems";
import { NavUtility } from "../molecules/NavUtility";
import { CiMail as MailIcon } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import { SideNav } from "../molecules/SideNav";
import { AnimatePresence } from "framer-motion";
export interface ILayoutProps {}
export function Layout(props: any) {
  const [showSideNav, setShowSideNav] = useState(false);
  const FooterItems = [
    {
      header: "About",
      routes: [
        {
          name: "Home",
        },
        {
          name: "Shop",
        },
        {
          name: "Our story",
        },
        {
          name: "Blogs",
        },
      ],
    },
    {
      header: "Help",
      routes: [
        {
          name: "Shipping & Returns",
        },
        {
          name: "Track Order",
        },
        {
          name: "FAQS",
        },
      ],
    },
    {
      header: "Contact",
      routes: [
        {
          name: "Phone :",
        },
        {
          name: "+234 8164857706",
        },
        {
          name: "Email :",
        },
        {
          name: "ojepaul4jesus@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <AnimatePresence>
        {showSideNav && (
          <motion.div
            initial={{ x: -800 }}
            animate={{
              x: 0,

              // transition: { duration: 1 },
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 2,
              },
            }}
            exit={{
              x: -800,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 2,
              },
            }}
            className="absolute w-screen h-screen bg-[white] z-10 border"
          >
            <SideNav
              showSideNav={showSideNav}
              setShowSideNav={setShowSideNav}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* ------------------NAVBAR--------------------------- */}
      <div className="grid grid-cols-[0.5fr_2fr] lg:grid-cols-[17rem_3rem_40rem] w-full justify-around h-[4rem] overflow-hidden ">
        <NavItems showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <div className="hidden lg:block"></div>
        <NavUtility />
      </div>

      {props.children}
      {/* -------------FOOTER-------------------- */}
      <div className="bg-[#1D2128FF] md:h-[27rem] w-full grid grid-rows-[auto_auto]  md:grid-cols-[35%_35%] justify-around pt-[4rem]  overflow-hidden px-4">
        <div className=" h-[17rem] grid grid-cols-3 ">
          {FooterItems.map((item: any) => {
            return (
              <div className=" grid-rows-5 text-[white]">
                <div className="text-md font-bold"> {item.header} </div>
                {item.routes.map((items: any) => {
                  return (
                    <div className="text-[white] my-4 text-sm   break-words w-full ">
                      {items.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className=" h-[17rem] ">
          <h1 className="text-[white] text-xl font-bold">
            Receive new promotions
          </h1>
          <div className="mt-8 grid grid-cols-[12rem_6rem] relative">
            <input
              className="h-[3rem] rounded-tl-md rounded-bl-md bg-transparent border border-[#9095A0FF] pl-10"
              placeholder="Input your email"
            />
            <MailIcon
              className="absolute top-3 left-2"
              color="white"
              size="1.5rem"
            />
            <button className="text-[white] bg-btnGreen rounded-tr-md rounded-br-md">
              Subscribe
            </button>
            <div className="text-[white] mt-8 w-full whitespace-nowrap text-sm">
              © 2022 Brand, Inc. • Privacy • Terms • Sitemap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
