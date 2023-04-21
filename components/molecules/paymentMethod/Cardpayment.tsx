import * as React from "react";

export interface ICardPaymentProps {
  cardBillingInputs: any;
}
import { InputField } from "@/components/atoms/InputField";
export function CardPayment(props: ICardPaymentProps) {
  return (
    <>
      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8">
        {props.cardBillingInputs.map((item:any) => {
          return (
            <div className="h-8 mb-14">
              <InputField
                type={item.type}
                setValue={() => {}}
                name={item.name}
                placeholder={item.name}
              />
            </div>
          );
        })}
      </div>
      <div className="">
        <InputField
          setValue={() => {}}
          type="textfield"
          name={"Address"}
          placeholder={"Address"}
        />
      </div>
    </>
  );
}
