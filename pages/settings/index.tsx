import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import userImage from "../../assets/navbar/user.png";
import Image from "next/image";
import { FaPencilAlt as PencilIcon } from "react-icons/fa";
import { FiCopy as CopyIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import useAutoCapitalize from "@/hooks/useAutoCapitalize";
import { ClipboardEvent } from "react";
import { useState } from "react";
import { Toast } from "@/utils/global";
export interface IIndexProps {}

export default function Settings(props: any) {
  const { user } = useSelector((state: any) => state.user);
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://www.profilelink.com"
  );
  console.log(user);
  const username = useAutoCapitalize(user.fullname);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl);
    Toast.fire({
      icon: "success",
      title: "Copied",
    });
  };

  return (
    <Layout>
      <section className=" mx-auto my-10 w-[90%] font-inter">
        <div className="text-sm">
          <a href="" className="text-textGrey">
            Home
          </a>{" "}
          / <a href="">Settings</a>
        </div>
        <div className="grid grid-cols-[19rem] md:grid-cols-[19rem_67%]  mt-4 md:justify-between justify-around ">
          {/* -------------------- */}
          <div className="">
            <h1 className="text-4xl font-bold ">Settings</h1>
            <div className="border-2 border-borderGrey rounded-md mt-6 mb-2 pb-4">
              <div className="relative h-[10rem] w-[10rem] mx-auto mt-2">
                <Image
                  src={userImage}
                  fill
                  alt="user"
                  className="border-2 border-[white] rounded-full shadow-sm"
                />
                <button className="border  w-[2.5rem] h-[2.5rem] bg-btnGreen rounded-full py-[9px] px-[10px] absolute top-[7.7rem] left-[6.7rem] ">
                  {" "}
                  <PencilIcon className="" size="1.2rem" color="white" />
                </button>
              </div>
              <h1 className="text-center text-xl text-btnGreen font-bold mt-4 ">
                {username}
              </h1>
              <p className="text-center text-sm">Professional title</p>
              <p className="text-textGrey text-center text-xs m-4">
                Incididunt dolore ut aliquip culpa id cupidatat mollit dolore
                sint esse non c
              </p>
              <hr className="my-4 mx-4" />
              <h2 className="mx-4 font-bold text-sm">Profile link</h2>
              <div className="relative">
                <input
                  value={profileUrl}
                  className="bg-bgGrey w-[87%] h-8 mx-4 mt-2 text-sm pl-4"
                />
                <CopyIcon
                  onClick={copyToClipboard}
                  size="1.2rem"
                  className="absolute top-[15px] left-[15rem] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- */}
          <div className="">
            <h1 className="text-4xl font-bold ">Tools</h1>
            <div className="border-2 border-borderGrey rounded-md mt-6"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
