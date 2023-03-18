import * as React from "react";
import Input from "@/components/atoms/auth/input";
import facebook from "../../../assets/auth/facebook.jpg";
import google from "../../../assets/auth/google.jpg";
import apple from "../../../assets/auth/apple.jpg";
import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/auth/InputField";
import Image from "next/image";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { BsFacebook as FacebookIcon } from "react-icons/bs";
import { BsApple as AppleIcon } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { useDispatch } from "react-redux";
import { Toast } from "@/utils/global";
import { useJwt } from "react-jwt";
import { setUser } from "@/redux/slices/userSlice";
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  const router = useRouter();
  const iconSize = "1.1rem";
  const dispatch = useDispatch();
  const [token, setToken] = useState<any>();
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    dispatch(setUser(decodedToken));
    console.log("set User");
  }, [decodedToken]);
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState<any>({
    email: "",
    password: "",
  });
  console.log(inputs);
  const [inputIsValid, setInputIsValid] = useState<any>({
    email: true,
    password: true,
    formIsValid: false,
  });
  const otherLogin = [
    {
      image: google,
      icon: <GoogleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-red-100",
    },
    {
      image: facebook,
      icon: <FacebookIcon size={iconSize} className="mx-auto" />,
      bg: "bg-sky-100",
    },
    {
      image: apple,
      icon: <AppleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-neutral-100",
    },
  ];
  const setInputsHandler = (name: string, value: any) => {
    setInputs((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setInputIsValidHandler = (name: string, value: any) => {
    setInputIsValid((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const emailHandler = (value: any) => {
    setInputsHandler("email", value);
    inputs.email.length > 4 &&
    inputs.email.includes("@") &&
    inputs.email.includes(".com")
      ? setInputIsValidHandler("email", true)
      : setInputIsValidHandler("email", false);
  };
  const passwordHandler = (value: any) => {
    setInputsHandler("password", value);
    inputs.password.length > 7
      ? setInputIsValidHandler("password", false)
      : setInputIsValidHandler("password", true);
  };
  const login = () => {
    axios
      .post(`${BASEURL}/user/fetchUser`, {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.user) {
          setToken(res.data.user);
        }
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        router.push("/shop");
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "Error",
        });
        setLoading(false);
      });
  };
  return (
    <section className="">
      <div className="text-sm text-right m-4">
        Don't have an account? &nbsp;
        <button
          onClick={() => {
            router.push("/auth/signup");
          }}
          className="text-btnGreen underline"
        >
          Sign up
        </button>
      </div>
      <div className="mx-auto w-[90%] bg-white h-[20rem] mt-[10vh] lg:shadow-lg lg:rounded-2xl pt-10">
        <h1 className="text-center font-bold text-2xl">Sign in</h1>
        {/*  */}
        <div
          onBlur={() => {
            inputs.email.length > 4 &&
            inputs.email.includes("@") &&
            inputs.email.includes(".com")
              ? setInputIsValidHandler("email", true)
              : setInputIsValidHandler("email", false);
          }}
          className={`mt-8 bg-bgGrey rounded-md  mx-auto h-15 w-[18rem] grid-rows-2 px-4 py-2 ${
            !inputIsValid.email && "border border-[red]"
          } `}
        >
          <InputField
            setInput={emailHandler}
            name="Email"
            placeholder="example@gmail.com"
          />
        </div>
        {/*  */}
        <div
          onBlur={() => {
            inputs.password.length > 7
              ? setInputIsValidHandler("password", true)
              : setInputIsValidHandler("password", false);
          }}
          className={`mt-8 bg-bgGrey rounded-md  mx-auto h-15 w-[18rem] grid-rows-2 px-4 py-2 ${
            !inputIsValid.password && "border border-[red]"
          } `}
        >
          <InputField
            setInput={passwordHandler}
            name="Password"
            placeholder="Enter at least 8+ characters "
          />
        </div>
        {/*  */}
        <div className=" grid grid-cols-[auto_auto] justify-between w-[18rem] mx-auto text-xs mt-4">
          <div className="grid grid-cols-[auto_auto] gap-x-2 justify-between">
            <input
              type="checkbox"
              className=" checked:bg-btnGreen rounded-sm focus:ring-0 "
            />
            <p>Keep me logged in</p>
          </div>
          <div className="text-btnGreen">Forgot password?</div>
        </div>
        <div
          onClick={() => {
            login();
            setLoading(true);
          }}
          className="mt-8 rounded-md   mx-auto h-[3rem] text-md w-[18rem] shadow-lg"
        >
          <Button animate={true} loading={loading} text="Sign in" />
        </div>

        <div className="mt-8 text-center">
          <p className="">Or sign in with</p>
          <div className="grid grid-cols-3 gap-x-4 w-[15rem] mt-4  mx-auto">
            {otherLogin.map((item: any) => {
              return (
                <button
                  className={` text-center px-4 py-2  justify-between rounded-2xl ${item.bg}`}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-textGrey text-xs mx-auto w-[15rem] mt-10 relative bottom-[-12rem] mb-4">
        By signing up, you agree with the{" "}
        <a className="underline decoration-solid" href="">
          Terms of Use
        </a>{" "}
        & <a className="underline decoration-solid">Privacy Policy</a>
      </div>
    </section>
  );
}
