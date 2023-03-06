import * as React from "react";
import { TfiClose as CloseBtn } from "react-icons/tfi";
import { motion } from "framer-motion";
export interface ISideNavProps {}

export function SideNav(props: any) {
  return (
    <>
      {!props.setShowNav && (
        <motion.div
          initial={{ rotate: -180 }}
          animate={{
            rotate: 0,
            transition: {
              duration: 1,
            },
          }}
          exit={{ rotate: -180 }}
          className="relative float-right m-5 "
        >
          <CloseBtn
            onClick={() => props.setShowSideNav(false)}
            // className="relative float-right m-5"
            size="1.5rem"
          />
        </motion.div>
      )}
    </>
  );
}
