import { useEffect, useState } from "react";
import { RxCaretDown as CaretDown } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineNavigateNext as NextIcon } from "react-icons/md";
import { MdOutlineNavigateBefore as PreviousIcon } from "react-icons/md";
export interface IFAQProps {}
export function FAQ(props: IFAQProps) {
  const FAQ = [
    { question: "What types of insurance do you offer", answer: "" },
    {
      question: "How do i know which insurance plan is right for me?",
      answer: "",
    },
    { question: "How can i pay my insurance premium", answer: "" },
    { question: "Do you offer Discounts?", answer: "" },
    { question: "Can i change my insurance plan anytime?", answer: "" },
    { question: "Is there any policy on cancellation?", answer: "" },
  ];
  return (
    <section className="FAQ p-4 lg:p-10 font-nunito">
      <h1 className="text-xl sm:text-2xl text-center font-bold">
        Frequently asked questions
      </h1>
      <p className=" text-center  text-xs sm:text-md  sm:w-[350px] mt-4 text-textGrey mx-auto">
        Attaining well tested and trusted insurance in the best way possible,
        Register with us today and get the best and affordable plans that suits
        your interest
      </p>
      <div>
        {FAQ.map((item: any) => {
          return (
            <div className="grid grid-cols-[auto_2rem] border-[3px] w-[100%] sm:w-[500px] mx-auto p-4 rounded-xl my-4 ">
              <h1 className="mt-1 text-textGrey text-sm  sm:text-md">
                {item.question}
              </h1>
              <CaretDown className="text-textGrey" size="2rem" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
