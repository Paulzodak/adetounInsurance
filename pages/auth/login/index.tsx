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
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "@/utils/global";
import { useJwt } from "react-jwt";
import { setUser } from "@/redux/slices/userSlice";
import AuthLayout from "@/components/templates/AuthLayout";
import { FiEye as EyeOn } from "react-icons/fi";
import { FiEyeOff as EyeOff } from "react-icons/fi";
import heroMobile from "../../../assets/auth/loginHeroMobile.svg";
import hero from "../../../assets/auth/loginHero.jpg";
import { clearSavedRoute } from "@/redux/slices/utilitySlice";
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  const router = useRouter();
  const iconSize = "1.1rem";
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { saveRoute } = useSelector((state: any) => state.utilities);
  console.log(saveRoute);
  console.log(user);
  const [token, setToken] = useState<any>();
  const { decodedToken, isExpired } = useJwt(token);
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
    email: false,
    password: false,
    formIsValid: false,
  });
  const otherLogin = [
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
  const login = () => {
    if (inputIsValid.email && inputIsValid.password) {
      axios
        .post(`${BASEURL}/auth/login`, {
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            setToken(res.data.user);
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });
            if (saveRoute) {
              router.push(saveRoute);
              dispatch(clearSavedRoute());
            } else router.push("/");
          } else {
            console.log("err");
            Toast.fire({
              icon: "error",
              title: "Error",
            });
            setLoading(false);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          Toast.fire({
            icon: "error",
            title: "Error",
          });
          setLoading(false);
        });
    }
  };
  return (
    <section className="font-nunito">
      <AuthLayout hero={hero} heroMobile={heroMobile}>
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
              className="absolute  left-[88%] top-[62px]"
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
              login();
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
              text="Login"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="">Or Login using</p>
            <div className="grid grid-cols-3 w-[10rem] h-[30px] justify-between  mt-4  mx-auto ">
              {otherLogin.map((item: any) => {
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
            Don't have an account? &nbsp;
            <button
              onClick={() => {
                router.push("/auth/signup");
              }}
              className="text-mainPurple underline font-bold"
            >
              Sign up
            </button>
          </div>
        </div>
      </AuthLayout>
    </section>
  );
}
