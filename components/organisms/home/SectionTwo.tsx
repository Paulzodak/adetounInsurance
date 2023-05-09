import * as React from "react";
import image1 from "../../../assets/home/image1.svg";
import image2 from "../../../assets/home/image2.svg";
import image3 from "../../../assets/home/image3.svg";
import verify from "../../../assets/home/verify.svg";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { useEffect } from "react";
import Aos from "aos";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSaveRoute } from "@/redux/slices/utilitySlice";
export interface ISectionTwoProps {}

export function SectionTwo(props: ISectionTwoProps) {
  const dispatch = useDispatch();
  const router = useRouter();
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
  const userNotSignedHandler = () => {
    router.push("/auth/login");
    dispatch(setSaveRoute(router.pathname));
    console.log(router.pathname);
  };
  return (
    <section className="What we offer sm:p-10 p-4  gap-x-2 grid sm:grid-cols-auto  md:grid-cols-[auto_400px] lg:grid-cols-[auto_700px]  md:h-[800px] h-[1300px] font-nunito">
      <div>
        <h1 className="text-mainPurple text-sm">ABOUT US</h1>
        <h2 className=" text-4xl mt-6">
          Full and Affordable insurance coverage for all our customers
        </h2>
        <p className="text-textGrey mt-6">
          Attaining well tested and trusted health insurance in the best way
          possible
        </p>
        <div className="my-6 w-[80%]">
          {items.map((item: any) => {
            return (
              <div className="grid grid-cols-[1rem_auto] gap-x-4 my-6 text-textGrey">
                <Image src={verify} alt="" className="h-[21px] w-[21px]" />
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {
            userNotSignedHandler();
          }}
          className="w-[152px] h-[55px]"
        >
          <Button
            text="Get Started"
            loading={false}
            animate={false}
            disable={false}
          />
        </div>
      </div>
      <div className="mt-[-100px] md:mt-0  lg:p-0 relative  ">
        <Image
          data-aos="fade-up-left"
          src={image1}
          alt=" "
          className={
            "lg:h-[453px] lg:w-[525px] w-[249px] float-left top-10 relative lg:float-right"
          }
        />
        <Image
          data-aos="fade-up-right"
          src={image2}
          alt=" "
          className={
            "lg:h-[382px] h-[211.93px]  absolute lg:top-[300px] top-[200px]  left-20 "
          }
        />
        <Image
          data-aos="fade-up"
          src={image3}
          alt=" "
          className={
            "  absolute lg:w-[269px] lg:top-[450px] lg:left-[300px]  w-[112px]  top-[240px] left-[100px] "
          }
        />
      </div>
    </section>
  );
}
