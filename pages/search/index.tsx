import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import { ProductList } from "@/components/molecules/product/ProductsList";
import deodorant from "../../assets/products/deodorant.jpeg";
import beardoil from "../../assets/products/nora_beard_oil.jpeg";
import beardoil2 from "../../assets/products/nora_beard_oil_2.jpeg";
import perfume from "../../assets/products/nora_perfume.jpeg";
import { useSelector } from "react-redux";
export interface ISearchProps {}

export default function Search(props: any) {
  const { utilitySearch } = useSelector((state: any) => state.utilities);
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

  return (
    <Layout>
      <div className="my-10">
        <ProductList
          products={dummyProducts.filter((item: any) =>
            item.name.toLowerCase().includes(utilitySearch.toLowerCase())
          )}
        />
      </div>
    </Layout>
  );
}
