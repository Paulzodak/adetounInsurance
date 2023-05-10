import * as React from "react";
import Image from "next/image";
import { NavItems } from "../molecules/NavItems";
import { Button } from "../atoms/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import logo from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setSaveRoute } from "@/redux/slices/utilitySlice";
import { Link } from "react-scroll";
import { logout } from "@/redux/slices/userSlice";
import { Toast } from "@/utils/global";
export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const [showNav, setShowNav] = useState(false);
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  const [showSideNav, setShowSideNav] = useState(false);
  const iconsize = "1.5rem";
  const navItems = [
    {
      name: "Home",
      route: "/",
      query: "/",
      to: "home",
    },
    {
      name: "What we offer",
      route: "/offers",
      query: "/offers",
      to: "offers",
    },
    {
      name: "Our process",
      route: "/settings",
      query: "/settings",
      to: "process",
    },
    {
      name: "Our packages",
      route: "/settings",
      query: "/settings",
      to: "packages",
    },
    {
      name: "Contact",
      route: "/settings",
      query: "/settings",
      to: "contact",
    },
    {
      name: "FAQ",
      route: "/settings",
      query: "/settings",
      to: "FAQ",
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
  const userNotSignedHandler = () => {
    router.push("/auth/login");
    dispatch(setSaveRoute(router.pathname));
    console.log(router.pathname);
  };
  const buttonRender = () => {
    return (
      <>
        {!user ? (
          <div
            onClick={() => {
              userNotSignedHandler();
            }}
            className="my-auto h-10 w-[152px] "
          >
            <Button
              text="Sign in"
              animate={false}
              loading={false}
              disable={false}
            />
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch(logout());
              Toast.fire({
                icon: "success",
                title: "Signed out successfully",
              });
            }}
            className="my-auto h-10 w-[152px] "
          >
            <Button
              text="Log out"
              animate={false}
              loading={false}
              disable={false}
            />
          </div>
        )}
      </>
    );
  };
  return (
    <div className="overflow-hidden">
      <div className="h-[5rem]  font-Nunito">
        <div className=" grid bg-[white] grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] lg:justify-around justify-between px-10 lg:px-2  h-full relative z-10 ">
          {/*  */}
          <div
            onClick={() => {
              router.push("/");
            }}
            className=" flex gap-x-4 h-full"
          >
            <div className="relative h-[32px] w-[32px] my-auto ">
              <Image src={logo} fill alt="logo" />
            </div>
            <div className="my-auto sm:text:lg md:text-xl lg:text-2xl">
              Adetoun Insurance
            </div>
          </div>

          <NavItems
            navItems={navItems}
            showNav={showNav}
            setShowNav={setShowNav}
          />
          <div className="hidden lg:block my-auto">{buttonRender()}</div>
        </div>
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "350px",
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 2,
                // staggerChildren: 0.08,
              },
            }}
            exit={{ height: -100 }}
            className=" bg-[white] w-full relative z-0 lg:hidden "
            layout
          >
            <div className="px-6 ">
              {navItems.map((item: any) => {
                return (
                  <Link
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="my-6  relative "
                  >
                    <div className="my-4 text-md">{item.name}</div>
                    <div className="absolute top-0 hover:border-b-4 border-mainPurple w-10 h-full rounded-sm  "></div>
                  </Link>
                );
              })}
            </div>
            <div className="mx-6 mt-8">{buttonRender()}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
