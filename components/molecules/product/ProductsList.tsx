import * as React from "react";
import { Product } from "./Product";
export function ProductList(props: any) {
  return (
    <div className="grid grid-cols-[repeat(2,47%)] gap-y-4 justify-between w-[20rem] mx-auto sm:grid-cols-[repeat(3,32%)] sm:w-[35rem] md:grid-cols-[repeat(4,22%)] md:w-[40rem]">
      {props.products.map((item: any, index: any) => {
        return <Product details={item} />;
      })}
    </div>
  );
}
