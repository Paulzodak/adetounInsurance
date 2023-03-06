import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout } from "@/components/templates/Layout";
import hero from "../assets/home/hero.jpg";
import { Button } from "@/components/atoms/Button";
import { OurProducts } from "@/components/organisms/home/OurProducts";
export default function Home() {
  const { username } = useSelector((state: any) => state.user);
  console.log(username);

  return (
    <>
      <Layout>
        <div className="bg-[url('../assets/home/heroMobile.jpg')] sm:bg-[url('../assets/home/hero.jpg')] h-[20rem] sm:h-[30rem] w-full bg-cover bg-no-repeat">
          <div className=" pt-16 pl-8 sm:pt-[8rem] sm:pl-20">
            <h1 className="text-2xl sm:text-4xl font-bold ">
              Gift for your skin
            </h1>
            <div className="text-sm mt-4 w-40 sm:w-80">
              Fashion label luxury essentials for your skin
            </div>
            <div className="w-[7rem] sm:w-40 mt-4">
              <Button text="Shop now"></Button>
            </div>
          </div>
        </div>
        <OurProducts />
      </Layout>
    </>
  );
}
