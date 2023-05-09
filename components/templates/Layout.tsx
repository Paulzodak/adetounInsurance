import * as React from "react";
import { NavItems } from "../molecules/NavItems";
import { NavUtility } from "../molecules/NavUtility";
import { CiMail as MailIcon } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logoWhite.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "../atoms/Button";
// import { LearnMore } from "../organisms/LearnMore";
import { ContactUs } from "../organisms/ContactUs";
import { Navbar } from "../organisms/NavBar";
import { MdOutlineCopyright as CopyRightIcon } from "react-icons/md";
export interface ILayoutProps {}
export function Layout(props: any) {
  const router = useRouter();
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const [showNav, setShowNav] = useState(false);

  const [showSideNav, setShowSideNav] = useState(false);
  const iconsize = "1.5rem";
  const navItems = [
    {
      name: "Home",
      route: "/",
      query: "/",
    },
    {
      name: "What we offer",
      route: "/offers",
      query: "/offers",
    },
    {
      name: "Our process",
      route: "/settings",
      query: "/settings",
    },
    {
      name: "Our packages",
      route: "/settings",
      query: "/settings",
    },
    {
      name: "Contact",
      route: "/settings",
      query: "/settings",
    },
    {
      name: "FAQ",
      route: "/settings",
      query: "/settings",
    },
  ];
  const footerItems = [
    {
      header: "Useful Links",
      routes: [
        {
          name: "Home",
        },
        {
          name: "Our process",
        },
        {
          name: "Our packages",
        },
        {
          name: "Contact",
        },
        {
          name: "FAQ",
        },
      ],
    },
    {
      header: "Company info",
      routes: [
        {
          name: "Adetoun insurance",
        },
        {
          name: "23, Allen ,Ikeja , Lagos State",
        },
        {
          name: "Lagos State",
        },
        {
          name: "Adetoun122@gmail.com",
        },
        {
          name: "(+234) 816 485 7706",
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
    <div className="max-w-[100vw] overflow-hidden">
      {/* ------------------NAVBAR--------------------------- */}
      <Navbar />
      {props.children}
      {/* <LearnMore /> */}
      <ContactUs />
      {/* -------------FOOTER-------------------- */}
      <section className=" bg-mainPurple grid lg:grid-cols-[repeat(4,auto)] sm:grid-cols-[50%_25%_25%] grid-cols-[auto] gap-y-4 justify-between lg:gap-x-10 gap-x-4 text-white p-4 sm:p-14 font-nunito">
        <div className="  ">
          {/*  */}
          <div className="flex gap-x-4  h-8 ">
            <div className="relative h-[32px] w-[32px]">
              <Image src={logoWhite} fill alt="logo" className="text-white" />
            </div>
            <div className="my-auto text-lg font-bold ">Adetoun Insurance</div>
          </div>
          {/*  */}
          <div className="text-white text-sm mt-12">
            Attaining well tested and trusted insurance in the best way
            possible, Register with us today and get the best and affordable
            plans that suits your interest
          </div>
        </div>
        <div className="">
          <h1 className="mt-1 font-bold">{footerItems[0].header}</h1>
          <div className="text-sm mt-12">
            {footerItems[0].routes.map((item: any) => {
              return <div className="mb-8">{item.name}</div>;
            })}
          </div>
        </div>
        <div className="">
          <h1 className="mt-1 font-bold">{footerItems[1].header}</h1>
          <div className="text-sm mt-12">
            {footerItems[1].routes.map((item: any) => {
              return <div className="mb-8">{item.name}</div>;
            })}
          </div>
        </div>
        <div>
          <h1 className="mt-1 font-bold">Our News Letter</h1>
          <p className="text-sm mt-12">
            Subscribe to our News letter and get latest update regularly
          </p>
          <div className="relative mt-4">
            <input
              className="bg-white w-[344px] h-[66px] rounded-xl text-textGrey pl-8 pr-36 text-sm "
              placeholder="Enter your email address"
            />
            <div className="absolute top-2 h-12 left-[220px] ">
              <Button
                text="Subscribe"
                loading={false}
                animate={false}
                disable={false}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="px-4 sm:px-20 py-6 grid grid-cols-[2rem_auto] ">
        <CopyRightIcon className="" size="1.5rem" />
        <div className="text-sm sm:text-md ">
          Copyright. Adetoun Insurance 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
}
