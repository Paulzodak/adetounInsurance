import * as React from "react";
import { BiDetail as DetailIcon } from "react-icons/bi";
import { BiHomeAlt2 as HomeIcon } from "react-icons/bi";
import { BsCreditCard2Back as CardIcon } from "react-icons/bs";
import { InputField } from "@/components/atoms/InputField";
import { CardPayment } from "@/components/molecules/paymentMethod/Cardpayment";
import Paypal from "../../../assets/billing/paypal.png";
import Card from "../../../assets/billing/mastercard.png";
import Image from "next/image";
export interface IBillingProps {}

export function Billing(props: IBillingProps) {
  const [cardOptionHeader, setCardOptionHeader] = React.useState("");
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
  const [payment, setPayment] = React.useState<any>([
    {
      name: "Card",
      active: true,
      image: Card,
      id: 0,
    },
    {
      name: "Paypal",
      active: false,
      image: Paypal,
      id: 1,
    },
  ]);
  const cardBillingInputs = [
    {
      name: "Name on card",
      type: "text",
    },
    {
      name: "Card number",
      type: "number",
    },
    {
      name: "Expiry date",
      type: "select",
    },
    {
      name: "CVV",
      type: "password",
    },
  ];
  const setCardOptions = (id: number) => {
    setPayment((prev: any) => {
      const temp = [...prev];
      console.log(id);
      temp.filter((item: any) =>
        item.id == id ? (item.active = true) : (item.active = false)
      );
      console.log(temp);
      return temp;
    });
  };
  React.useEffect(() => {
    payment.filter(
      (item: any) => item.active == true && setCardOptionHeader(item.name)
    );
  }, [payment]);
  return (
    <section className="p-4 pb-4">
      <h1 className="text-2xl font-bold">Billing & Payment</h1>
      <div className="grid grid-cols-[2rem_auto]  mt-4 ">
        <DetailIcon size="1.5rem" className="text-btnGreen" />
        <h1>Billing info</h1>
        <div />
        <p className="text-sm text-textGrey">Enter your billing information</p>
      </div>
      <div className="mt-4  sm:grid sm:grid-cols-2 sm:gap-x-8">
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
      <div className="grid grid-cols-[2rem_auto]  sm:mt-8 mt-[100px]">
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
      <div className="my-[4rem]" />

      {/* CARDD */}
      <div className="grid grid-cols-[2rem_auto]  sm:mt-8 ">
        <CardIcon size="1.5rem" className="text-red-600" />
        <h1>Payment method</h1>
        <div />
        <p className="text-sm  text-textGrey">Choose a payment method</p>
      </div>
      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8 ">
        {payment.map((item: any) => {
          return (
            <div
              onClick={() => {
                setCardOptions(item.id);
              }}
              className={`border border-borderGrey rounded-md h-20 flex mb-4 ${
                item.active && "bg-lightBtnGreen border-btnGreen"
              }`}
            >
              <div className="my-auto md:ml-10 grid grid-cols-[2rem_auto] gap-x-4">
                <div className="m-auto border-btnGreen border-[1px] w-4 h-4 rounded-full p-[2px]">
                  {item.active && (
                    <div className="bg-btnGreen w-full h-full rounded-full" />
                  )}
                </div>
                <div className="relative w-14 h-10">
                  <Image src={item.image} fill alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {cardOptionHeader == "Card" && (
          <CardPayment cardBillingInputs={cardBillingInputs} />
        )}
      </div>
      {/* <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-8">
        {cardBillingInputs.map((item) => {
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
      </div> */}
    </section>
  );
}
