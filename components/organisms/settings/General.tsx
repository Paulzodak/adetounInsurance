import * as React from "react";
import { InputField } from "@/components/atoms/InputField";
import { Button } from "@/components/atoms/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetStateAction } from "react";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { Toast } from "@/utils/global";
import { setUser } from "@/redux/slices/userSlice";
export interface IGeneralProps {}
export interface IUser {
  fullname: string;
  username: string;
  profession: string;
  location: string;
  bio: string;
}

export function General(props: IGeneralProps) {
  const dispatch = useDispatch();
  const selectOptions = ["Designer", "Fabric seller", "Body product retail"];
  const LocationSelectOptions = ["Nigeria", "Ghana", "Kenya"];

  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: any) => state.user);
  console.log(user.fullname && user.fullname);
  const [inputs, setInputs] = useState<any>({
    // fullname: user.fullname,
    username: user.username ? user.username : "",
    profession: user.profession ? user.profession : "",
    location: user.location ? user.location : "",
    bio: user.bio ? user.bio : "",
  });
  const [inputIsValid, setInputIsValid] = useState<any>({
    // fullname: true,
    username: false,
    profession: false,
    location: false,
    bio: false,
  });

  const setInputHandler = (name: string, value: string) => {
    setInputs((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setInputIsValidHandler = (name: string, value: boolean) => {
    setInputIsValid((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  useEffect(() => {
    inputs.username.length > 5
      ? setInputIsValidHandler("username", true)
      : setInputIsValidHandler("username", false);
    inputs.profession.length > 5
      ? setInputIsValidHandler("profession", true)
      : setInputIsValidHandler("profession", false);
    inputs.location.length > 5
      ? setInputIsValidHandler("location", true)
      : setInputIsValidHandler("location", false);
    inputs.bio.length > 30
      ? setInputIsValidHandler("bio", true)
      : setInputIsValidHandler("bio", false);
  }, [inputs]);
  console.log(inputs);
  console.log(inputIsValid);
  // const onChan;
  const onSubmit = () => {
    axios
      .post(`${BASEURL}/user/updateProfile`, {
        username: inputs.username,
        profession: inputs.profession,
        location: inputs.location,
        bio: inputs.bio,
        email: user.email,
      })
      .then((res) => {
        if (res.data.user) {
          console.log(res);
          dispatch(setUser(res.data.user));
          Toast.fire({
            icon: "success",
            title: "Profile updated!",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Unknown error",
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Unknown error",
        });
        setLoading(false);
      });
  };
  return (
    <section className="p-4">
      <div>
        <h1 className="font-bold text-2xl">Profile</h1>
        <div className="mt-4">
          <div className="grid grid-cols-2   gap-x-4 ">
            <div className="w-full h-10 ">
              <InputField
                setValue={() => {}}
                value={user.fullname}
                name="Full name"
                placeholder="Your full name"
                disabled
              />
            </div>
            <div className="w-full h-10 ">
              <InputField
                setValue={(value: any) => {
                  setInputHandler("username", value);
                }}
                name="Username"
                placeholder="Your username"
                value={inputs.username}
              />
            </div>
          </div>
          <div className="w-full mt-12 ">
            <InputField
              setValue={(value: any) => {
                setInputHandler("profession", value);
              }}
              type="select"
              name="Profession"
              placeholder="Your profession"
              selectOptions={selectOptions}
              value={inputs.profession}
            />
          </div>
          <div className="w-full mt-4 ">
            <InputField
              setValue={(value: any) => {
                setInputHandler("location", value);
              }}
              type="select"
              name="Location"
              placeholder="-Select your location-"
              selectOptions={LocationSelectOptions}
              value={inputs.location}
            />
          </div>
          <div className="w-full mt-4 ">
            <InputField
              setValue={(value: any) => {
                setInputHandler("bio", value);
              }}
              type="textfield"
              name="Bio"
              placeholder={"Your bio (Not less than 30 characters)"}
              value={inputs.bio}
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
          onClick={() => {
            setLoading(true);
            onSubmit();
          }}
          className="w-40 h-10 ml-auto mt-8"
        >
          <Button
            text="Save information"
            animate={true}
            loading={loading}
            disable={false}
            bounceLoader={loading}
          />
        </div>
      </div>
    </section>
  );
}
