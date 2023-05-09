import { useEffect, useState } from "react";
import image6 from "../../../assets/home/image6.svg";
import image1 from "../../../assets/home/reviews/image1.svg";
import image2 from "../../../assets/home/reviews/image2.svg";
import image3 from "../../../assets/home/reviews/image3.svg";
import image4 from "../../../assets/home/reviews/image4.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineNavigateNext as NextIcon } from "react-icons/md";
import { MdOutlineNavigateBefore as PreviousIcon } from "react-icons/md";
export interface ISectionFiveProps {}
export function SectionFive(props: ISectionFiveProps) {
  const currentIndex = useState<number>(0);
  const [customerReview, setCustomerReview] = useState([
    {
      name: "Vivian Thomas",
      review: `Trusting Adetoun insurance has been the best decision ive made, They're insurance packages are very user centric and conveniently effeicient.`,
      image: image1,
      active: true,
      id: 0,
    },
    {
      name: "Reggie Damson",
      review: `I recently used this insurance website to fid coverage for my car and was extremely satisfied with the experience, its user friendly and easy to navigate.`,
      image: image2,
      active: false,
      id: 1,
    },
    {
      name: "Marylin Monrose",
      review: `The process of filling out my information was straight forward and the details are very acute, and also their insurance packages are quite good, very satisfying.`,
      image: image3,
      active: false,
      id: 2,
    },
    {
      name: "Johnson Fayemi",
      review: `Trust and orderliness are very rare traits amongst insurance companies, But accolades should be given to Adetoun insurance, credibility and assurance is guaranteed.`,
      image: image4,
      active: false,
      id: 3,
    },
  ]);
  const [image, setImage] = useState();
  useEffect(() => {
    setImage(() => {
      const current = customerReview.filter((item: any) => item.active && item);

      return current[0].image;
    });
  }, [customerReview]);
  const forwardSlideHandler = () => {
    setCustomerReview((prev: any) => {
      const current = prev.filter((item: any) => item.active && item);
      const currentId = current[0].id < 3 ? current[0].id + 1 : 0;
      const temp = [...prev];
      temp.filter((item) =>
        currentId < 4 && item.id == currentId
          ? (item.active = true)
          : (item.active = false)
      );
      console.log(temp);
      return temp;
    });
  };
  const backwardSlideHandler = () => {
    setCustomerReview((prev: any) => {
      const current = prev.filter((item: any) => item.active && item);
      const currentId = current[0].id > 0 ? current[0].id - 1 : 3;
      const temp = [...prev];
      temp.filter((item) =>
        currentId < 4 && item.id == currentId
          ? (item.active = true)
          : (item.active = false)
      );
      console.log(temp);
      return temp;
    });
  };
  const navigator = () => {
    return (
      <div className="w-28  grid grid-cols-2 mx-auto mt-8 ">
        <PreviousIcon
          onClick={backwardSlideHandler}
          color="white"
          className="text-white"
          size="3rem"
        />
        <NextIcon
          onClick={forwardSlideHandler}
          color="white"
          className="text-white"
          size="3rem"
        />
      </div>
    );
  };
  return (
    <div className="relative   bg-cover w-full bg-[url('../assets/home/background/image5.jpeg')] font-nunito grid grid-cols-[auto] sm:grid-cols-[35%_55%] sm:px-8 py-20 justify-between">
      <h1 className="text-white text-4xl sm:hidden text-center ">
        What our customers say about us
      </h1>
      <div className="">
        <AnimatePresence mode="wait">
          {customerReview.map((item: any) => {
            if (item.active) {
              return (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  //   layout
                  key={item.id}
                >
                  <Image
                    src={item.image}
                    alt=""
                    className=" w-[300px] sm:h-[430px] sm:w-[552px] lg:mt-0 mt-20 mx-auto"
                  />
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
      </div>
      <div className="">
        <h1 className="text-white text-4xl sm:block hidden">
          What our customers say about us
        </h1>
        <div className=" w-full  ">
          <div className=" sm:hidden mx-auto flex w-screen items-center">
            {navigator()}
          </div>
          <AnimatePresence mode="wait">
            {customerReview.map((item: any) => {
              if (item.active) {
                return (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    //   layout
                    key={item.id}
                    className=" bg-white mx-auto mt-4   w-[300px] rounded-2xl sm:mt-24 lg:mt-0 px-6 py-8 shadow-lg"
                  >
                    <h1 className="lg:text-4xl text-xl">{item.name}</h1>
                    <p className="text-textGrey mt-4  lg:text-lg text:sm lg:leading-8 leading-2 ">
                      {item.review}
                    </p>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>

          <div className="hidden sm:block mx-auto">{navigator()}</div>
        </div>
      </div>
    </div>
  );
}
