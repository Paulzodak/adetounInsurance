import * as React from "react";
import image4 from "../../../assets/home/image4.svg";
import verify from "../../../assets/home/verify.svg";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { useEffect } from "react";
import Aos from "aos";
export interface ISectionThreeProps {}

export function SectionThree(props: ISectionThreeProps) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const items = [
    { text: "100% Customer reliability" },
    {
      text: "Financial protection against high cost medical expenses",
    },
    { text: "Access to full time medical treatment" },
    { text: "Seamless and affordable healthcare coverage for all customers" },
  ];
  const process = [
    {
      name: "Register",
      text: "Register yourself through the platform and proceed to input fields",
      aos: "fade-right",
    },
    {
      name: "Select Insurance plan",
      text: "Choose a payment plan most suitable to your taste, as all plans benefit all our users",
      odd: true,
      aos: "fade-left",
    },
    {
      name: "Complete Payment",
      text: "Register yourself through the platform and proceed to input fields",
      aos: "fade-right",
    },
  ];
  return (
    <section className="process p-4 sm:p-10 font-nunito">
      <h1 className="text-2xl text-center font-bold">Our process</h1>
      <p className=" text-center sm:w-[350px] mt-4 text-textGrey mx-auto">
        Take a look at the processes to follow to get health insurance for you
        and your loved ones
      </p>
      <div className="grid   lg:grid-cols-[40%_55%] grid-cols-[auto] grid-rows-[auto_auto] mt-8 gap-y-12 lg:justify-between">
        <Image src={image4} alt="" className="h-[453px] w-[525px]" />
        <div className="grid gap-y-8  ">
          {process.map((item: any) => {
            return (
              <div className={`${item.odd && "flex items-center justify-end"}`}>
                <div
                  data-aos={item.aos}
                  className={`p-4 sm:p-8 shadow-lg  sm:w-[350px]  w-[230px] dh-[140px] rounded-2xl`}
                >
                  <div className="grid grid-cols-[1rem_auto] gap-x-4">
                    <div
                      className={`h-3 w-3 mt-1 rounded-full bg-mainPurple`}
                    />
                    <div className="font-bold text:md sm:text-lg">
                      {item.name}
                    </div>
                  </div>
                  <p className="text-xs sm:text-md">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
