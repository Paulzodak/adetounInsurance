import * as React from "react";
import bg from "../../assets/auth/bg.jpeg";
import Image from "next/image";
import { Navbar } from "../organisms/NavBar";
import logo from "../../assets/logoBlack.svg";
import { useRouter } from "next/router";
export interface IAuthLayoutProps {
  children: any;
  hero: any;
  heroMobile: any;
}

export default function AuthLayout(props: IAuthLayoutProps) {
  const router = useRouter();
  return (
    <>
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="lg:grid grid-cols-[40%_60%]">
        <Image
          src={props.hero}
          alt=""
          className="w-full lg:h-full hidden lg:block"
        />
        <Image
          src={props.heroMobile}
          alt=""
          className=" lg:hidden w-full lg:h-full"
        />
        <div className="mt-4">
          <div onClick={() => router.push("/")}>
            <Image src={logo} alt="" className="w-[28px] h-[27px] mx-auto " />
            <h1 className="text-center font-bold text-2xl mt-4">
              Adetoun Insurance
            </h1>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
}
