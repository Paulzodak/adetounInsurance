import * as React from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
export interface IButtonProps {
  text: String;
  animate: boolean;
  loading: boolean;
  disable: boolean;
  bounceLoader?: boolean;
}

export function Button(props: IButtonProps) {
  return (
    <button
      disabled={props.disable}
      className=" focus:ring-[0.2rem] outline-none focus:ring-indigo-50 focus:ring-offset-2 relative  h-full w-full bg-mainPurple text-[white] rounded-md lg:rounded-xl px-4 text-sm sm:text-sm md:text-md overflow-hidden z-0 "
    >
      {!props.loading && !props.bounceLoader ? (
        <div className="relative z-[5] lg:text-lg font-nunito">
          {props.text}
        </div>
      ) : (
        <BounceLoader size="2rem" className="mt-1" color="#8084e3" />
      )}
      {props.disable && (
        <div>
          {props.animate && (
            <motion.div
              initial={false}
              animate={{
                x: props.loading ? 0 : -400,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 500,
                  mass: 20,
                },
              }}
              // exit={{ x: 300 }}
              className="bg-#ff9494 h-[10rem] w-[25rem] absolute top-[-5rem] left-[-5rem] rounded-full z-[2]"
            ></motion.div>
          )}
        </div>
      )}
    </button>
  );
}
