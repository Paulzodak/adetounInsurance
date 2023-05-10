import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout } from "@/components/templates/Layout";
import { Button } from "@/components/atoms/Button";
import hero1 from "../assets/home/homeHero.jpeg";
import Typewriter from "typewriter-effect";
import { RxCaretRight as RightCaretIcon } from "react-icons/rx";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EmailInput } from "@/components/molecules/EmailInput";
import { SectionTwo } from "@/components/organisms/home/SectionTwo";
import { SectionThree } from "@/components/organisms/home/SectionThree";
import { SectionFour } from "@/components/organisms/home/SectionFour";
import { SectionFive } from "@/components/organisms/home/SectionFive";
import { FAQ } from "@/components/organisms/home/FAQ";
import { ContactUs } from "@/components/organisms/ContactUs";
import life from "../assets/home/packages/life.svg";
import auto from "../assets/home/packages/auto.svg";
import travel from "../assets/home/packages/travel.svg";
import health from "../assets/home/packages/health.svg";
import property from "../assets/home/packages/property.svg";
import business from "../assets/home/packages/business.svg";
export default function Home() {
  const { username } = useSelector((state: any) => state.user);
  console.log(username);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isOn, setIsOn] = useState(false);
  const bgImages = [
    {
      src: "",
    },
  ];
  const toggleSwitch = () => setIsOn(!isOn);
  const packages = [
    {
      name: "Life insurance",
      route: "/lifeInsurance",
      query: "Life insurance",
      title: "Life insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: life,
    },
    {
      name: "Car insurance",
      route: "/carInsurance",
      query: "Car insurance",
      title: "Motor/ Automobile Insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: auto,
    },
    {
      name: "Travel insurance",
      route: "/travelInsurance",
      query: "Travel insurance",
      title: "Travel insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: travel,
    },
    {
      name: "Health insurance",
      route: "/healthInsurance",
      query: "Health insurance",
      title: "Health insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: health,
    },
    {
      name: "Home/ Property insurance",
      route: "/propertyInsurance",
      query: "Home/Property insurance",
      title: "Home / property insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: property,
    },
    {
      name: "Business insurance",
      route: "/businessInsurance",
      query: "Business insurance",
      title: "Business insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: business,
    },
  ];
  return (
    <>
      <Layout>
        <div className="grid  grid-cols-2 sm:grid-cols-4 font-nunito w-screen ">
          <div className="relative h-[642px] bg-cover w-full bg-[url('../assets/home/background/image1.jpeg')] font-nunito hidden sm:block"></div>
          <div className="relative h-[642px] bg-cover w-full bg-[url('../assets/home/background/image2.jpeg')] font-nunito "></div>
          <div className="relative h-[642px] bg-cover w-full bg-[url('../assets/home/background/image3.jpeg')] font-nunito "></div>
          <div className="relative h-[642px] bg-cover w-full bg-[url('../assets/home/background/image4.jpeg')] font-nunito hidden sm:block"></div>
          <div className=" my-auto  w-[100vw]   h-[642px] bg-slate-700/70 absolute flex   sm:flex-col">
            <div className="m-auto text-center p-4    text-white ">
              <h1 className="text-xl md:text-2xl lg:text-4xl  sm:w-[500px] mx-auto">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Get the best Insurance for you and your loved ones"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "Get the best Insurance for you and your loved ones"
                      )
                      .start();
                  }}
                />
              </h1>
              <p className="  text-white  mx-auto mt-10 text-sm sm:w-[500px]   lg:text-md ">
                Attaining well tested and trusted insurance in the best way
                possible, Register with us today and get the best and affordable
                plans that suits your interest
              </p>
              <div className="w-[308px] h-[47px] mx-auto mt-8 md:w-[662px] md:h-[66px]">
                <EmailInput text="Get Started" />
              </div>
            </div>
          </div>
        </div>
        <SectionTwo />
        <SectionThree />
        <SectionFour packages={packages} />
        <SectionFive />
        <FAQ />
      </Layout>
    </>
  );
}
