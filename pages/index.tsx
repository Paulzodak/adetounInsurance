import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout } from "@/components/templates/Layout";
export default function Home() {
  const { username } = useSelector((state: any) => state.user);
  console.log(username);

  return (
    <>
      <Layout />
    </>
  );
}
