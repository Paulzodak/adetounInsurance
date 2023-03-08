import * as React from "react";
import { useState } from "react";
import { ProductList } from "@/components/molecules/product/ProductsList";
import deodorant from "../../../assets/products/deodorant.jpeg";
import beardoil from "../../../assets/products/nora_beard_oil.jpeg";
import beardoil2 from "../../../assets/products/nora_beard_oil_2.jpeg";
import perfume from "../../../assets/products/nora_perfume.jpeg";
export interface IOurProductsProps {}
export function OurProducts(props: IOurProductsProps) {
  const dummyProducts = [
    {
      name: "Perfume",
      desc: "",
      discount: 10,
      tag: "Best-sellers",
      image: perfume,
      price: 32,
    },
    {
      name: "Perfume",
      desc: "",
      discount: 10,
      tag: "Best-sellers",
      image: perfume,
      price: 32,
    },
    {
      name: "Beard Oil",
      desc: "",
      price: 22,
      discount: 10,
      tag: "Best-sellers",
      image: beardoil,
    },
    {
      name: "Beard Oil",
      desc: "",
      price: 22,
      discount: 10,
      tag: "Best-sellers",
      image: beardoil,
    },
    {
      name: "Fast Beard Oil",
      desc: "",
      price: 18,
      discount: 10,
      tag: "New-products",
      image: beardoil2,
    },
    {
      name: "Fast Beard Oil",
      desc: "",
      price: 18,
      discount: 10,
      tag: "New-products",
      image: beardoil2,
    },
    {
      name: "Deodorant",
      desc: "",
      price: 48,
      discount: 10,
      tag: "New-products",
      image: deodorant,
    },
    {
      name: "Deodorant",
      desc: "",
      price: 48,
      discount: 10,
      tag: "New-products",
      image: deodorant,
    },
  ];
  const dummyFilters = [
    {
      name: "Best-sellers",
      active: true,
    },
    {
      name: "New-products",
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
  return (
    <div className="border py-40">
      <h1 className="text-4xl text-center  font-bold">Our products</h1>
      <div className="grid grid-cols-2 w-[20rem]  mx-auto mt-8  cursor-pointer">
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
      <div className="mt-10  ">
        <ProductList
          products={dummyProducts.filter(
            (item: any) => item.tag === filterHeader[0].name
          )}
        />
      </div>
    </div>
  );
}
