import * as React from "react";
import { InputField } from "@/components/atoms/InputField";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
export interface IGeneralProps {}

export function General(props: IGeneralProps) {
  const selectOptions = ["Designer", "Fabric seller", "Body product retail"];
  const [loading, setLoading] = useState(false);
  return (
    <section className="p-4">
      <div>
        <h1 className="font-bold text-2xl">Profile</h1>
        <div className="mt-4">
          <div className="grid grid-cols-2   gap-x-4 ">
            <div className="w-full h-10 ">
              <InputField
                setValue={() => {}}
                name="Full name"
                placeholder="Your full name"
              />
            </div>
            <div className="w-full h-10 ">
              <InputField
                setValue={() => {}}
                name="Username"
                placeholder="Your username"
              />
            </div>
          </div>
          <div className="w-full mt-12 ">
            <InputField
              setValue={() => {}}
              type="select"
              name="Profession"
              placeholder="Your full name"
              selectOptions={selectOptions}
            />
          </div>
          <div className="w-full mt-4 ">
            <InputField
              setValue={() => {}}
              type="select"
              name="Location"
              placeholder="-Select your location-"
            />
          </div>
          <div className="w-full mt-4 ">
            <InputField
              setValue={() => {}}
              type="textfield"
              name="Bio"
              placeholder="Your bio"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl mt-4">Preferences</h1>
          <div className="">
            <span className="grid grid-cols-[2rem_auto]  mt-4">
              <input
                type="checkbox"
                className=" checked:bg-btnGreen rounded-sm focus:ring-0 mt-1 "
              />
              <h3>Receive monthly product updates </h3>
            </span>
            <p className="text-sm ml-8 text-textGrey mt-2">
              Allow the company to send updates about our product and services
            </p>
          </div>
          <div className="mt-8">
            <span className="grid grid-cols-[2rem_auto]  w-[20rem]   mt-4">
              <input
                type="checkbox"
                className=" checked:bg-btnGreen rounded-sm focus:ring-0 mt-1 "
              />
              <h3>See info about who views my profile </h3>
            </span>
            <p className="text-sm ml-8 text-textGrey mt-2">
              Get information about other users that view your profile
            </p>
          </div>
        </div>
        <div
          onClick={() => setLoading(true)}
          className="w-40 h-10 ml-auto mt-8"
        >
          <Button
            text="Save information"
            animate={true}
            loading={loading}
            disable={false}
          />
        </div>
      </div>
    </section>
  );
}
