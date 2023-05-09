import * as React from "react";
import { Button } from "../atoms/Button";
import image11 from "../../assets/home/image11.svg";
import Image from "next/image";
export interface IContactUsProps {}

export function ContactUs(props: IContactUsProps) {
  return (
    <div
      className={`Contact relative h-[690px] bg-cover w-full bg-[url('../assets/home/background/image5.jpeg')] font-nunito  px-4 sm:px-8 py-20 justify-between`}
    >
      <h1 className="text-white text-3xl ">Contact Us</h1>
      <section className=" grid sm:grid-cols-[55%_35%] mt-4 ">
        <div className="bg-white px-4 py-4 w-[100%] sm:w-[80%] rounded-lg">
          <div className="mt-4">
            <label className="text-lg">Email address</label>
            <br />
            <input
              placeholder="Enter your Email"
              className="mt-2 border p-4 border-bgGrey w-full h-10 sm:h-14 rounded-lg text-xs sm:text-sm md:text-lg"
            />
          </div>
          <div className="mt-4">
            <label className="text-lg">Message</label>
            <br />
            <textarea
              placeholder="Enter your Message"
              className="mt-2 border  border-bgGrey w-full h-24 sm:h-32 rounded-lg text-xs sm:text-sm md:text-lg"
            />
          </div>
          <div className="w-full h-12 sm:h-16 mt-4">
            <Button
              text="Submit"
              loading={false}
              animate={false}
              disable={false}
            />
          </div>
        </div>
        <div className="hidden sm:block">
          <Image src={image11} alt="" className="w-[400px] " />
        </div>
      </section>
    </div>
  );
}
