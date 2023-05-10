import * as React from "react";
import Input from "@/components/atoms/auth/input";
import facebook from "../../../assets/auth/Facebook.svg";
import google from "../../../assets/auth/Google.svg";
import apple from "../../../assets/auth/Apple.svg";
import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/auth/InputField";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Toast } from "@/utils/global";
import { BASEURL } from "@/utils/global";
import AuthLayout from "@/components/templates/AuthLayout";
import { FiEye as EyeOn } from "react-icons/fi";
import { FiEyeOff as EyeOff } from "react-icons/fi";
import heroMobile from "../../../assets/auth/signupHeroMobile.svg";
import hero from "../../../assets/auth/signupHero.jpg";
import success from "../../../assets/animation.gif";
import { motion } from "framer-motion";
import Helmet from "react-helmet";
export interface IIndexProps {}
export default function Index(props: IIndexProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const iconSize = "1.1rem";
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [inputs, setInputs] = useState<any>({
    username: "",
    email: "",
    password: "",
  });
  const [inputIsValid, setInputIsValid] = useState<any>({
    username: false,
    email: false,
    password: false,
    formIsValid: false,
  });
  useEffect(() => {
    inputs.password.length > 7,
      inputs.username.length > 4,
      inputs.email.length > 4 &&
        inputs.email.includes("@") &&
        inputs.email.includes(".com") &&
        console.log("true");
  }, [inputs]);

  const otherSignup = [
    {
      image: google,
      // icon: <GoogleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-red-100",
    },
    {
      image: facebook,
      // icon: <FacebookIcon size={iconSize} className="mx-auto" />,
      bg: "bg-sky-100",
    },
    {
      image: apple,
      // icon: <AppleIcon size={iconSize} className="mx-auto" />,
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
  const usernameHandler = (value: any) => {
    setInputsHandler("username", value);
    value.length > 4
      ? setInputIsValidHandler("username", true)
      : setInputIsValidHandler("username", false);
  };
  const emailHandler = (value: any) => {
    setInputsHandler("email", value);
    value.length > 4 && value.includes("@") && value.includes(".com")
      ? setInputIsValidHandler("email", true)
      : setInputIsValidHandler("email", false);
  };
  const passwordHandler = (value: any) => {
    setInputsHandler("password", value);
    value.length > 7
      ? setInputIsValidHandler("password", true)
      : setInputIsValidHandler("password", false);
  };
  console.log(inputIsValid);
  console.log(inputs);
  const signup = () => {
    if (inputIsValid.username && inputIsValid.email && inputIsValid.password) {
      axios
        .post(`${BASEURL}/auth/signup`, {
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          setLoading(false);
          Toast.fire({
            icon: "success",
            title: "Signed up successfully, Proceed to login",
          });
          // setTimeout(() => {
          router.push("/auth/login");
          // }, 2000);
        })
        .catch((err) => {
          Toast.fire({
            icon: "error",
            title: "Error",
          });
          setLoading(false);
        });
    }
  };
  console.log(inputs);
  return (
    <section className="font-nunito">
      <Helmet>
        <title> Signup </title>
        <meta name="description" content="Home page" />
      </Helmet>
      <AuthLayout hero={hero} heroMobile={heroMobile}>
        {/* <button onClick={() => setStartAnimation(!startAnimation)}>
          click
        </button> */}
        {startAnimation ? (
          <motion.div
            className="mt-8"
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              mass: 2,
              // staggerChildren: 0.08,
            }}
          >
            <Image
              className="rounded-xl w-[5rem] h-[5rem]"
              src={success}
              alt=""
            />
          </motion.div>
        ) : (
          <div className="mx-auto max-w-[388px] w-[90%]  bg-white mt-8 ">
            {/*  */}
            <div className={`mt-4 mx-auto h-[96px] w-full `}>
              <InputField
                setInput={emailHandler}
                inputIsValid={inputIsValid.email}
                name="Email address"
                placeholder="Enter your email"
              />
            </div>
            {/*  */}
            <div className={`mt-4 mx-auto h-[96px] w-full `}>
              <InputField
                setInput={usernameHandler}
                inputIsValid={inputIsValid.username}
                name="Username"
                placeholder="Enter your Username"
              />
            </div>
            {/*  */}
            <div className={`mt-4 mx-auto h-[96px] w-full relative`}>
              <InputField
                setInput={passwordHandler}
                showPassword={showPassword}
                password
                inputIsValid={inputIsValid.password}
                name="Password"
                placeholder="Enter your password"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-[88%] top-[62px]"
              >
                {showPassword ? (
                  <EyeOn size="1.3rem" className="text-gray-600" />
                ) : (
                  <EyeOff size="1.3rem" className="text-gray-600" />
                )}
              </div>
            </div>
            {/*  */}
            <div className=" grid grid-cols-[auto_auto] justify-between w-full mx-auto text-xs mt-8">
              <div className="grid grid-cols-[auto_auto] gap-x-2 justify-between">
                <input
                  type="checkbox"
                  className=" checked:bg-mainPurple rounded-sm focus:ring-0 "
                />
                <p>Keep me logged in</p>
              </div>
              <div className="text-mainPurple">Forgot password?</div>
            </div>
            <div
              onClick={() => {
                signup();
                setLoading(inputIsValid.email && inputIsValid.password && true);
              }}
              className="mt-8 rounded-xl   mx-auto h-[3.5rem] text-md w-full shadow-lg"
            >
              <Button
                disable={
                  inputIsValid.password && inputIsValid.email ? true : false
                }
                animate={true}
                loading={loading}
                text="Sign up"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="">Or Sign up using</p>
              <div className="grid grid-cols-3 w-[10rem] h-[30px] justify-between  mt-4  mx-auto ">
                {otherSignup.map((item: any) => {
                  return (
                    <button
                    // className={`focus:ring-[0.2rem] outline-none focus:ring-teal-50 focus:ring-offset-2 text-center px-4 py-2  justify-between rounded-2xl ${item.bg}`}
                    >
                      <Image
                        alt="logo"
                        src={item.image}
                        className="w-[23px] mx-auto"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="text-md text-center m-4 ">
              Already have an account? &nbsp;
              <button
                onClick={() => {
                  router.push("/auth/login");
                }}
                className="text-mainPurple underline font-bold"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </AuthLayout>
    </section>
  );
}
