import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout } from "@/components/templates/Layout";
import { useRouter } from "next/router";
export default function Home() {
  // const router = useRouter();
  // console.log(router.query);
  const { username } = useSelector((state: any) => state.user);
  console.log(username);

  return (
    <>
      <Layout></Layout>
    </>
  );
}
