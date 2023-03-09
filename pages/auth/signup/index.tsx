import * as React from "react";
import Input from "@/components/atoms/auth/input";
import facebook from "../../../assets/auth/facebook.jpg";
import google from "../../../assets/auth/google.jpg";
import apple from "../../../assets/auth/apple.jpg";
import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/auth/InputField";
import Image from "next/image";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { BsFacebook as FacebookIcon } from "react-icons/bs";
import { BsApple as AppleIcon } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  const router = useRouter();
  const iconSize = "1.1rem";
  const [loading, setLoading] = useState(false);
  const otherLogin = [
    {
      image: google,
      icon: <GoogleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-red-100",
    },
    {
      image: facebook,
      icon: <FacebookIcon size={iconSize} className="mx-auto" />,
      bg: "bg-sky-100",
    },
    {
      image: apple,
      icon: <AppleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-neutral-100",
    },
  ];
  return (
    <section className="">
      <div className="text-sm text-right m-4">
        Already have an account? &nbsp;
        <button
          onClick={() => {
            router.push("/auth/login");
          }}
          className="text-btnGreen underline"
        >
          Login
        </button>
      </div>
      <div className="mx-auto w-[90%] bg-white h-[20rem] mt-[10vh] lg:shadow-lg lg:rounded-2xl pt-10">
        <h1 className="text-center font-bold text-2xl">Create an account</h1>
        {/*  */}
        <div className="mt-8 bg-bgGrey rounded-md  mx-auto h-15 w-[18rem] grid-rows-2 px-4 py-2">
          <InputField name="Full name" placeholder="John Doe" />
        </div>
        {/*  */}
        <div className="mt-8 bg-bgGrey rounded-md  mx-auto h-15 w-[18rem] grid-rows-2 px-4 py-2">
          <InputField name="Email" placeholder="example@gmail.com" />
        </div>
        {/*  */}
        <div className="mt-8 bg-bgGrey rounded-md  mx-auto h-15 w-[18rem] grid-rows-2 px-4 py-2">
          <InputField
            name="Password"
            placeholder="Enter at least 8+ characters "
          />
        </div>
        <div
          onClick={() => setLoading(true)}
          className="mt-8 rounded-md  mx-auto h-[3rem] text-md w-[18rem] shadow-lg"
        >
          <Button animate={true} loading={loading} text="Sign Up" />
        </div>
        <div className="mt-8 text-center">
          <p className="">Or sign up with</p>
          <div className="grid grid-cols-3 gap-x-4 w-[15rem] mt-4  mx-auto">
            {otherLogin.map((item: any) => {
              return (
                <button
                  className={` text-center px-4 py-2  justify-between rounded-2xl ${item.bg}`}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>
        </div>
        <div className="text-textGrey text-xs mx-auto w-[15rem] mt-10 relative bottom-[-2rem] mb-4">
          By signing up, you agree with the{" "}
          <a className="underline decoration-solid" href="">
            Terms of Use
          </a>{" "}
          & <a className="underline decoration-solid">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
}
