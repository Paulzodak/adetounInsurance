import * as React from "react";
import { useState } from "react";
export interface IOurProductsProps {}
export function OurProducts(props: IOurProductsProps) {
  const dummyFilters = [
    {
      name: "Best-sellers",
      active: true,
    },
    {
      name: "New products",
      active: false,
    },
  ];
  const [filters, setFilters] = useState<any>(dummyFilters);
  const filterHandler = (item: any, index: number) => {
    setFilters((prev: any) => {
      const temp = [...prev];
      temp.filter((items, tempindex) =>
        tempindex === index ? (items.active = true) : (items.active = false)
      );
      return temp;
    });
  };
  return (
    <div className="border">
      <h1 className="text-4xl text-center mt-40 font-bold">Our products</h1>
      <div className="grid grid-cols-2 w-[20rem] mx-auto mt-8 cursor-pointer">
        {filters.map((item: any, index: number) => {
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
    </div>
  );
}
