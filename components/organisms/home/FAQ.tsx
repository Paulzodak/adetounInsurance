import { useEffect, useState } from "react";
import { RxCaretDown as CaretDown } from "react-icons/rx";
import { RxCaretUp as CaretUp } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineNavigateNext as NextIcon } from "react-icons/md";
import { MdOutlineNavigateBefore as PreviousIcon } from "react-icons/md";
export interface IFAQProps {}
export function FAQ(props: IFAQProps) {
  const dummyFAQ = [
    {
      question: "What types of insurance do you offer",
      answer:
        "We offer all types of insurance which includes life insurance, Car insurance, Travel insurance, Health insurance, Property insurance, Business insurance",
      active: false,
      id: 0,
    },
    {
      question: "How do i know which insurance plan is right for me?",
      answer:
        "It depends on what you're willing to spend, You can read more from our learn more section",
      active: false,
      id: 1,
    },
    {
      question: "How can i pay my insurance premium",
      answer:
        "You can pay by clicking on the pay button and following the procedure",
      active: false,
      id: 2,
    },
    { question: "Do you offer Discounts?", answer: "For referral, Yes" },
    {
      question: "Can i change my insurance plan anytime?",
      answer: "Yes, but terms and conditions apply",
      active: false,
      id: 3,
    },
    {
      question: "Is there any policy on cancellation?",
      answer: "Yes, you can read through the terms and conditions",
      active: false,
      id: 4,
    },
  ];
  const [FAQ, setFAQ] = useState<any>(dummyFAQ);
  const handler = (id: number) => {
    setFAQ((prev: any) => {
      const temp = [...prev];
      temp.filter((item: any) =>
        item.id == id ? (item.active = !item.active) : (item.active = false)
      );
      return temp;
    });
  };
  console.log(FAQ);
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
            <div
              onClick={() => handler(item.id)}
              className="grid grid-cols-[auto_2rem] border-[3px] w-[100%] sm:w-[500px] mx-auto p-4 rounded-xl my-4 "
            >
              <h1 className="mt-1  font-bold text-textGrey text-sm  sm:text-md">
                {item.question}
              </h1>
              {item.active ? (
                <CaretUp className="text-textGrey" size="2rem" />
              ) : (
                <CaretDown className="text-textGrey" size="2rem" />
              )}
              <AnimatePresence>
                {item.active && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      mass: 2,
                      // staggerChildren: 0.08,
                    }}
                    className="text-xs text-textGrey"
                  >
                    - {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
