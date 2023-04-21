import * as React from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/templates/Layout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BsCheckCircle as DoneIcon } from "react-icons/bs";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { BiCartDownload as CartIcon } from "react-icons/bi";
import { ProductList } from "@/components/molecules/product/ProductsList";
export interface IAppProps {}

export default function Index(props: any) {
  const [quanity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>({});
  const { products } = useSelector((state: any) => state.products);
  const router = useRouter();
  useEffect(() => {
    products.map(
      (item: any) => item._id == router.query.id && setProduct({ ...item })
    );
  }, []);

  console.log(router.query.id);
  console.log(products);
  console.log(product);

  return (
    <Layout>
      <div className="my-20 font-epilogue">
        <div className="grid gap-y-16 md:grid md:grid-cols-2 lg:grid-cols-[40%_60%]  ">
          {/*  */}
          <div className=" grid gap-x-4  grid-cols-[20%_80%] h-80 mx-auto w-[18rem]  md:w-[24rem] md:h-[30rem] ">
            <div className=" grid gap-y-2 grid-rows-4">
              {product.productImages &&
                product.productImages.map((item: any, index: number) => {
                  console.log(item);
                  return (
                    <div className=" relative rounded-md overflow-hidden ">
                      <Image src={item} alt="" fill />
                    </div>
                  );
                })}
              {/* <div className=" relative rounded-md overflow-hidden">
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
            </div> */}
            </div>
            <div className=" relative rounded-md overflow-hidden ">
              <Image
                src={product.productImages && product.productImages[0]}
                alt=""
                fill
              />
            </div>
          </div>
          {/*  */}
          <div className=" w-[21rem] mx-auto  md:w-[25rem] lg:w-[40rem]  p-4">
            <h1 className="text-2xl font-bold">{product.productName}</h1>
            {/* <p className="mt-2 font-bold ">{product.productName}</p> */}
            <div className="mt-8 ">
              <span className="font-bold text-4xl text-btnGreen">
                ${product.productPrice}
              </span>
              <span className="ml-4 font-bold text-2xl text-textGrey">$20</span>
            </div>
            <p className="mt-4 break-all">{product.productPurpose}</p>
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
            <div className="w-full grid grid-cols-2 h-[2.5rem] mt-4 gap-x-4">
              <button className="border border-btnGreen relative pl-6 focus:ring-[0.3rem] outline-none focus:ring-teal-100 focus:ring-offset-2   text-btnGreen rounded-md text-sm sm:text-sm md:text-md overflow-hidden z-0 ">
                <CartIcon
                  className="absolute left-4 top-2 md:left-10 text-btnGreen"
                  size="1.3rem"
                />
                Add to bag
              </button>
              <Button
                text="Checkout"
                animate={true}
                loading={false}
                disable={false}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <section className=" mt-20  ">
          <h1 className="text-2xl  w-[20rem] mx-auto sm:w-[35rem] font-bold  md:w-[40rem]">
            Related products
          </h1>
          <div className=" mt-8">
            <ProductList
              products={products.filter(
                (item: any) => item.productCategory == product.productCategory
              )}
            />
          </div>
        </section>
        <div className=" w-[20rem] mx-auto sm:w-[35rem]   md:w-[40rem] mt-20">
          <h1 className="text-2xl font-bold ">Directions</h1>
          <div className="break-all text-sm">{product.productDou}</div>
        </div>
        <div className=" w-[20rem] mx-auto sm:w-[35rem]    md:w-[40rem] mt-20">
          <h1 className="text-2xl font-bold ">Ingredients</h1>
          <div className="break-all text-sm">{product.productIngredients}</div>
        </div>
      </div>

      <div className=" ">
        <h1 className="text-2xl font-bold w-[80%] mx-auto">How to use</h1>
        <div className="my-8 m-auto">
          <video
            src={require("../../../assets/home/video.mp4")}
            className=" mx-auto h-[auto]  w-[80%] rounded-md "
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/*  */}
    </Layout>
  );
}
