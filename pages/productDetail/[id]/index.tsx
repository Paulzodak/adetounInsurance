import * as React from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/templates/Layout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BsCheckCircle as DoneIcon } from "react-icons/bs";
import Image from "next/image";
export interface IAppProps {}

export default function Index(props: any) {
  const [quanity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
  });
  const { products } = useSelector((state: any) => state.products);
  const router = useRouter();
  useEffect(() => {
    products.map(
      (item: any) => item.id == router.query.id && setProduct({ ...item })
    );
  }, []);

  console.log(router.query.id);
  console.log(products);
  console.log(product);

  return (
    <Layout>
      <div className="my-20">
        <div className="grid gap-y-16">
          <div className=" grid gap-x-4  grid-cols-[20%_80%] h-80 mx-auto w-[18rem]">
            <div className=" grid gap-y-2 grid-rows-4">
              <div className=" relative rounded-md overflow-hidden">
                <Image src={product.image} alt="" fill />
              </div>
              <div className=" relative rounded-md overflow-hidden">
                <Image src={product.image} alt="" fill />
              </div>
              <div className=" relative rounded-md overflow-hidden">
                <Image src={product.image} alt="" fill />
              </div>
              <div className=" relative rounded-md overflow-hidden">
                <Image src={product.image} alt="" fill />
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden">
              <Image src={product.image} alt="" fill />
            </div>
          </div>
          {/*  */}
          <div className=" w-[18rem] mx-auto ">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2">
              Aliquip fugiat ipsum nostrud ex et eu incididunt
            </p>
            <div className="mt-8 ">
              <span className="font-bold text-4xl text-btnGreen">
                ${product.price}
              </span>
              <span className="ml-4 font-bold text-2xl text-textGrey">$20</span>
            </div>
            <p className="mt-4">
              In ullamco labore mollit et exercitation fugiat exercitation minim
              ex sint ullamco exercitation amet officia mollit. Qui cillum
              pariatur in con
            </p>
            <div className="grid grid-cols-[repeat(3,auto)] mt-8">
              <div>
                <span className="font-bold">358 </span>
                <span className="text-textGrey">reviews</span>
              </div>
              <div>
                <span className="font-bold">358 </span>
                <span className="text-textGrey"> sold</span>
              </div>
            </div>
            <div className=" mt-4 grid grid-cols-[7%_93%] w-[20rem]">
              <DoneIcon size="1.2rem" className="text-btnGreen" />
              <div className="text-sm">Free shipping on orders over $49USD</div>
            </div>
            <div className=" mt-4 grid grid-cols-[7%_93%] w-[20rem]">
              <DoneIcon size="1.2rem" className="text-btnGreen" />
              <div className="text-sm">Free and easy returns</div>
            </div>
            <h1 className="font-bold mt-4">Quantity</h1>
            <div className="mt-2 h-[2rem] grid grid-cols-3 gap-x-4 w-[8rem]">
              <button
                className="text-xs bg-bgGrey rounded-md "
                onClick={() => setQuantity((prev: any) => (prev = prev - 1))}
              >
                -
              </button>
              <input
                className=" bg-bgGrey rounded-md px-[12px]"
                placeholder={`${quanity}`}
              ></input>
              <button
                className="text-xs bg-bgGrey rounded-md"
                onClick={() => setQuantity((prev: any) => (prev = prev + 1))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
