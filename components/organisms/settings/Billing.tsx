import * as React from "react";
import { BiDetail as DetailIcon } from "react-icons/bi";
import { BiHomeAlt2 as HomeIcon } from "react-icons/bi";
import { InputField } from "@/components/atoms/InputField";
export interface IBillingProps {}

export function Billing(props: IBillingProps) {
  const inputs = [
    {
      name: "First name",
    },
    {
      name: "Last name",
    },
    {
      name: "Email",
    },
    {
      name: "Phone number",
    },
    {
      name: "Company name",
    },
    {
      name: "VAT",
    },
  ];
  const billingAddress = [
    {
      name: "City",
      type: "select",
    },
    {
      name: "State/Province",
      type: "select",
    },
    {
      name: "Zip/Postal code",
    },
    {
      name: "Country/Region",
      type: "select",
    },
  ];
  return (
    <section className="p-4 pb-4">
      <h1 className="text-2xl font-bold">Billing & Payment</h1>
      <div className="grid grid-cols-[2rem_auto] mt-4 ">
        <DetailIcon size="1.5rem" className="text-btnGreen" />
        <h1>Billing info</h1>
        <div />
        <p className="text-sm text-textGrey">Enter your billing information</p>
      </div>
      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8">
        {inputs.map((item) => {
          return (
            <div className="h-8 mb-14">
              <InputField
                setValue={() => {}}
                name={item.name}
                placeholder={item.name}
              />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-[2rem_auto] mt-8 ">
        <HomeIcon size="1.5rem" className="text-yellow-200" />
        <h1>Billing address</h1>
        <div />
        <p className="text-sm  text-textGrey">Enter your billing address</p>
      </div>
      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8">
        {billingAddress.map((item) => {
          return (
            <div className="h-8 mb-14">
              <InputField
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
    </section>
  );
}
