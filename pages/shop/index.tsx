import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import hero from "../../assets/shop/hero.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ProductList } from "@/components/molecules/product/ProductsList";
import { Search } from "@/components/atoms/Search";
import { useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";
export interface IIndexProps {}

export default function Index(props: any) {
  const dispatch = useDispatch();
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const { products } = useSelector((state: any) => state.products);
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const dummyFilters = [
    {
      name: "All",
      active: true,
    },
    {
      name: "Fragrances",
      active: false,
    },
    {
      name: "Skin care",
      active: false,
    },
  ];
  const [filter, setFilter] = useState<any>(dummyFilters);
  const filterHeader = filter.filter(
    (item: any) => item.active == true && item.name
  );

  const filterHandler = (item: any, index: number) => {
    setFilter((prev: any) => {
      const temp = [...prev];
      temp.filter((items, tempindex) =>
        tempindex === index ? (items.active = true) : (items.active = false)
      );
      return temp;
    });
  };
  console.log(filter);
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${hero.src})`,
        }}
        className={` max-h-[20rem] sm:h-[30rem] w-full bg-cover bg-no-repeat p-20`}
      >
        <h1 className="text-4xl font-bold">Gift for your skin</h1>
        <p className="w-[20rem] mt-4">
          Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore
          excepteur voluptate
        </p>
      </div>
      <div className="mt-20 mx-auto  w-fluidWidth sm:w-fluidWidthSm md:w-fluidWidthMd  grid grid-rows-2 gap-y-4 sm:grid-cols-[auto_auto] justify-around sm:justify-between ">
        <div className=" h-10 grid grid-cols-3 w-[20rem]">
          {filter.map((item: any, index: number) => {
            return (
              <div
                onClick={() => filterHandler(item, index)}
                className={` text-center py-2  ${
                  item.active
                    ? "bg-btnGreen text-[white] rounded-md"
                    : "text-btnGreen"
                }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="">
          <Search
            placeholder="Search product..."
            searchRouteHandler={() => {}}
          />
        </div>
      </div>
      <div className="my-10">
        <ProductList
          products={[
            ...(filterHeader[0].name !== "All"
              ? products.filter(
                  (item: any) => item.productCategory === filterHeader[0].name
                )
              : products),
          ].filter((item) =>
            item.productName.toUpperCase().includes(utilitySearch.toUpperCase())
          )}
        />
      </div>
    </Layout>
  );
}
