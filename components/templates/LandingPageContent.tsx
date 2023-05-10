import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "@/components/templates/Layout";
import { Button } from "@/components/atoms/Button";
import Typewriter from "typewriter-effect";
import { RxCaretRight as RightCaretIcon } from "react-icons/rx";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import verify from "../../assets/home/verify.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { setSaveRoute } from "@/redux/slices/utilitySlice";
import { Toast } from "@/utils/global";
export interface ILandingPageContent {
  insuranceReason: any;
  hero: any;
  heroHeader: string;
  offerDetail: string;
  learnMoreItems: any;
  selectPlanText: string;
}
import { Element } from "react-scroll";
import { scroller } from "react-scroll";

export default function LandingPageContent(props: ILandingPageContent) {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const caretClasses = "pb-[3px] sm:pb-0";
  const caretSize = "1.5rem";
  const [selectedId, setSelectedId]: any = useState("");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isOn, setIsOn] = useState(false);
  const monthlyPlan = [
    {
      id: 0,
      type: "Basic Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 50,
      feat: [
        "24/7 Customer support",
        "One time access to premium health coverage",
        "Access to healthcare services and supplies",
      ],
    },
    {
      id: 1,
      type: "Premium Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 75,
      feat: [
        "24/7 Customer support",
        "All time access to premium health coverage",
        "Access to quality Home and Property insurance",
        "Access to life and Business insurance packages",
      ],
    },
    {
      id: 2,
      type: "Ultimate Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 150,
      feat: [
        "24/7 Customer support",
        "All time access to premium health coverage",
        "Access to quality Home and Property insurance",
        "Access to life and Business insurance packages",
        "Free Company resources and deliverables for you",
      ],
    },
  ];
  const yearlyPlan = [
    {
      id: 3,
      type: "Basic Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 40,
      feat: [
        "24/7 Customer support",
        "One time access to premium health coverage",
        "Access to healthcare services and supplies",
      ],
    },
    {
      id: 4,
      type: "Premium Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 60,
      feat: [
        "24/7 Customer support",
        "All time access to premium health coverage",
        "Access to quality Home and Property insurance",
        "Access to life and Business insurance packages",
      ],
    },
    {
      id: 5,
      type: "Ultimate Plan",
      text: "Select a suitable plan for your health insurance today",
      price: 120,
      feat: [
        "24/7 Customer support",
        "All time access to premium health coverage",
        "Access to quality Home and Property insurance",
        "Access to life and Business insurance packages",
        "Free Company resources and deliverables for you",
      ],
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(monthlyPlan);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    isOn ? setSelectedPlan(yearlyPlan) : setSelectedPlan(monthlyPlan);
  };
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 2,
        staggerChildren: 0.08,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  const userNotSignedHandler = () => {
    router.push("/auth/login");
    dispatch(setSaveRoute(router.pathname));
    console.log(router.pathname);
  };
  const rendered = (key: number) => {
    return (
      <motion.div
        key={key}
        initial="hidden"
        animate="show"
        layout
        variants={container}
        className="mt-8 grid gap-y-4 xl:grid-cols-[repeat(3,32%)] md:grid-cols-[repeat(2,48%)] justify-center md:justify-between md:gap-x-4 overflow-scroll "
      >
        <AnimatePresence>
          {selectedPlan.map((item: any, index: any) => {
            return (
              <motion.div
                variants={items}
                layout
                key={item.id}
                className="text-center"
              >
                <div className="border-[3px] border-borderGrey rounded-xl py-6 px-8 max-w-[400px] mx-auto">
                  <h1 className="font-bold text-xl ">{item.type}</h1>
                  <p className="mt-4 text-md">{item.text}</p>
                  <div className="text-2xl font-bold mt-4">
                    ${item.price}.00/
                    <span className="text-sm text=textGrey font-thin">
                      month
                    </span>
                  </div>
                  <div className="mt-4">
                    {item.feat.map((item: any) => {
                      return (
                        <div className="grid grid-cols-[2rem_auto]  text-left  my-8">
                          <div>
                            <Image
                              src={verify}
                              alt="verify"
                              className="h-full"
                            />
                          </div>
                          <div className="text-sm sm:text-md">{item}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    onClick={() => {
                      !user
                        ? userNotSignedHandler()
                        : Toast.fire({
                            icon: "error",
                            title: "Try again later",
                          });
                    }}
                    className="h-14 mt-8 cursor-pointer "
                  >
                    <Button
                      text="Choose plan"
                      disable={false}
                      animate={false}
                      loading={false}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    );
  };
  // var scroll    = Scroll.animateScroll;
  // handleSetActive: function(to) {
  //   console.log(to);
  // },
  const scrollToPlans = () => {
    console.log("i ran");
    scroller.scrollTo("plans", {
      duration: 1500,
      delay: 100,
      smooth: true,
      // offset: 50,
    });
  };
  return (
    <>
      <Layout>
        <div
          className={`relative h-[642px] bg-cover w-full  font-nunito`}
          style={{ backgroundImage: `url(${props.hero.src})` }}
        >
          <div className="flex flex-col  w-full h-full bg-slate-700/50 absolute p-4 sm:p-14 ">
            {/* <Image src={hero1} alt="" fill className="" /> */}
            <div className="grid grid-cols-[repeat(5,auto)] text-sm w-[300px] sm:w-[400px] text-white">
              <Link href="/">Home</Link>
              <RightCaretIcon size={caretSize} className={caretClasses} />
              <Link href="/">Our packages</Link>
              <RightCaretIcon size={caretSize} className={caretClasses} />
              <a href="">{router.query.data}</a>
            </div>

            <div className="m-auto sm:w-[500px] text-center  text-white text-2xl sm:text-4xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(props.heroHeader)
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(props.heroHeader)
                    .start();
                }}
              />
            </div>
            <div
              onClick={() => {
                !user ? userNotSignedHandler() : scrollToPlans();
              }}
              className="cursor-pointer m-auto mt-[-100px] h-12 w-40 border-[3px] rounded-xl overflow-hidden"
            >
              <Button
                text="Buy Package"
                loading={false}
                animate={false}
                disable={false}
              />
            </div>
          </div>
        </div>
        <section className="p-4 sm:p-20  font-nunito mt-4 ">
          <h1 className=" text-2xl font-bold">What we offer</h1>
          <p className="sm:w-[40%] text-sm text-textGrey mt-4 ">
            {props.offerDetail}
          </p>
          <h1 className="mt-10 text-2xl font-bold w-[70%] sm:w-[35%]">
            Why you should obtain a Home / Property Insurance
          </h1>
          <div className="grid grid-rows-3 gap-y-4 justify-center sm:grid-rows-1   sm:grid-cols-2 lg:grid-cols-3 sm:justify-between gap-x-12 pt-10">
            {props.insuranceReason.map((item: any, index: any) => {
              return (
                <div
                  data-aos={item.aos}
                  key={index}
                  className="border-2 rounded-xl p-4 max-w-[388px] "
                  onClick={() => setSelectedId(item)}
                >
                  <Image src={item.icon} alt="" className=" w-8 h-8" />
                  <h1 className="mt-4 font-bold">{item.name}</h1>
                  <p className=" text-sm text-textGrey mt-4 ">{item.text}</p>
                </div>
              );
            })}
          </div>

          <Element
            id="plans"
            name="plans"
            className="plans mt-10 text-2xl font-bold w-[35%]"
          >
            Select plan
          </Element>
          <p className="text-textGrey mt-4 w-80">{props.selectPlanText}</p>
          <div className="grid grid-cols-3 w-[400px] mx-auto  justify-items-center mt-8 ">
            <div className="text-lg font-bold">Monthly</div>
            <div
              className={` ${
                isOn ? "justify-start" : "justify-end"
              } bg-mainPurple w-[79px] h-[36px] flex  rounded-full p-[7px] cursor-pointer`}
              data-isOn={isOn}
              onClick={toggleSwitch}
            >
              <motion.div
                className="w-[22px] h-[22px] bg-[white] rounded-full"
                layout
                transition={spring}
              />
            </div>
            <div className="text-lg font-bold">Yearly</div>
          </div>
          {isOn ? rendered(123) : rendered(13)}
        </section>
        <section className="p-4 sm:p-10 font-nunito">
          <h1 className="text-2xl font-bold">
            Want to learn More about Insurance?
          </h1>
          <p className=" w-[350px] mt-4 text-textGrey">
            Select a suitable plan for your health insurance today
          </p>
          <div className="grid grid-cols-[auto_auto_auto] justify-between gap-x-12 pt-10 overflow-scroll">
            {props.learnMoreItems.map((item: any) => {
              return (
                <span className="border min-w-[292px] p-4 rounded-xl">
                  <Image src={item.image} alt="" className="w-[371px]" />
                  <h1 className="my-4 text-2xl font-bold">{item.header}</h1>
                  <p className="my-4 text-textGrey">{item.text}</p>
                </span>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
