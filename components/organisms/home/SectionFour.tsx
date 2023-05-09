import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";
import image5 from "../../../assets/home/image5.svg";
import flower from "../../../assets/home/flower.svg";
import go from "../../../assets/home/go.svg";
import { useRouter } from "next/router";

interface ISectionFourProps {
  packages: any;
}
export function SectionFour(props: ISectionFourProps) {
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
    <>
      <section className="Our packages p-10 font-nunito ">
        <h1 className="text-2xl text-center font-bold">
          Our Insurance Packages
        </h1>
        <p className=" text-center w-[350px] mt-4 text-textGrey mx-auto">
          Take a look at some of our packages
        </p>
        <div className="hidden sm:grid grid-cols-2 mt-8  ">
          <div className="lg:w-[25rem] w-[15rem] md:w-[20rem]">
            {props.packages.map((item: any) => {
              return (
                <a
                  onClick={() => {
                    // router.push(item.route);

                    router.push({
                      pathname: item.route,
                      query: { data: item.query },
                    });
                  }}
                  className="grid grid-cols-[3rem_auto_2rem] lg:my-8 my-4 border-b-[3px] py-2 rounded-sm border-borderGrey cursor-pointer"
                >
                  <Image
                    src={flower}
                    alt=""
                    className="lg:w-[22px] w-[15px] my-auto"
                  />
                  <div className="lg:text-xl  my-auto text-textGrey text-lg">
                    {item.name}
                  </div>
                  <Image src={go} alt="" className="lg:w-[44px] w-[25px]" />
                </a>
              );
            })}
          </div>
          <Image
            src={image5}
            alt=""
            className="lg:w-[620px]  w-[388px] lg:mt-4 mt-4"
          />
        </div>
        <div className="sm:hidden  mt-8">
          {props.packages.map((item: any, index: any) => {
            return (
              <div className="w-full ">
                <div
                  data-aos={index % 2 == 1 ? "fade-left" : "fade-right"}
                  onClick={() => {
                    router.push({
                      pathname: item.route,
                      query: { data: item.query },
                    });
                  }}
                  className={` border-2 border-borderGrey min-w-[256px] w-[52%] p-2 grid justify-center  cursor-pointer  mb-4 rounded-xl  ${
                    index % 2 == 1 && "float-right"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt=""
                    className="w-[100%]  mx-auto"
                  />
                  <div className="mt-2 font-bold">{item.title}</div>
                  <p className="text-sm text-textGrey mt-2">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
