import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import userImage from "../../assets/navbar/user.png";
import Image from "next/image";
import { FaPencilAlt as PencilIcon } from "react-icons/fa";
import { FiCopy as CopyIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import useAutoCapitalize from "@/hooks/useAutoCapitalize";
import { useState } from "react";
import { Toast } from "@/utils/global";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { ClipLoader } from "react-spinners";
import { getUser, setUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { General } from "@/components/organisms/settings/General";
import { Billing } from "@/components/organisms/settings/Billing";
export interface IIndexProps {}

export default function Settings(props: any) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [profileUrl, setProfileUrl] = useState<string>(
    "https://www.profilelink.com"
  );
  const username = useAutoCapitalize(user.fullname);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl);
    Toast.fire({
      icon: "success",
      title: "Copied",
    });
  };
  const handleFileChange = async (e: any) => {
    setLoading(true);

    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fashion-store-image");
    formData.append("cloud_name", "dxs8cpeae");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dxs8cpeae/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        axios
          .post(`${BASEURL}/user/updateProfileImage`, {
            imageUrl: data.url,
            email: user.email,
          })
          .then((res) => {
            // dispatch(getUser(user.email));
            console.log(res);
            dispatch(setUser(res.data.user));
            Toast.fire({
              icon: "success",
              title: "Profile picture updated!",
            });
            setLoading(false);
          })
          .catch((err) => {
            Toast.fire({
              icon: "error",
              title: "Unknown error",
            });
            setLoading(false);
          });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Unknown error",
        });
        setLoading(false);
      });
  };

  const [settingsNav, setSettingsNav] = useState<any>([
    { name: "General", active: true, id: 0 },
    { name: "Billings", active: false, id: 1 },
    { name: "Language and Region", active: false, id: 2 },
    { name: "Security", active: false, id: 3 },
  ]);
  const setNavHandler = (id: number) => {
    setSettingsNav((prev: any) => {
      const temp = [...prev];
      console.log(id);
      temp.filter((item: any) =>
        item.id == id ? (item.active = true) : (item.active = false)
      );
      console.log(temp);
      return temp;
    });
  };
  return (
    <Layout>
      <section className=" mx-auto my-10 w-[90%] font-inter">
        <div className="text-sm">
          <a href="" className="text-textGrey">
            Home
          </a>{" "}
          / <a href="">Settings</a>
        </div>

        <div className="md:grid md:gap-x-10 md:grid-cols-[19rem_auto]  lg:grid-cols-[19rem_67%]  mt-4 md:justify-between justify-around ">
          {/* -------------------- */}
          <div className="mx-auto w-[19rem] ">
            <div className="h-10">
              <h1 className="text-4xl font-bold ">Settings</h1>
            </div>
            <div className="border-2 border-borderGrey rounded-md mt-6 mb-2 pb-4">
              <div className="relative h-[10rem] w-[10rem] mx-auto mt-2">
                <Image
                  src={user.imageUrl ? user.imageUrl : userImage}
                  fill
                  alt="user"
                  className="border-2 border-[white] rounded-full shadow-sm"
                />

                <button className="border  w-[2.5rem] h-[2.5rem] bg-btnGreen rounded-full py-[9px] px-[10px] absolute top-[7.7rem] left-[6.7rem] ">
                  {loading ? (
                    <ClipLoader
                      color="white"
                      // loading={loading}
                      className="relative"
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <PencilIcon
                      className=" relative cursor-pointer"
                      size="1.2rem"
                      color="white"
                    />
                  )}
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="border w-full h-full absolute top-0 left-0 rounded-full z-0 opacity-0 cursor-pointer"
                  />
                </button>
              </div>
              <h1 className="text-center text-xl text-btnGreen font-bold mt-4 ">
                {username}
              </h1>
              <p className="text-center text-sm">Professional title</p>
              <p className="text-textGrey text-center text-xs m-4">
                Incididunt dolore ut aliquip culpa id cupidatat mollit dolore
                sint esse non c
              </p>
              <hr className="my-4 mx-4" />
              <h2 className="mx-4 font-bold text-sm">Profile link</h2>
              <div className="relative">
                <input
                  value={profileUrl}
                  className="bg-bgGrey w-[87%] h-8 mx-4 mt-2 text-sm pl-4"
                />
                <CopyIcon
                  onClick={copyToClipboard}
                  size="1.2rem"
                  className="absolute top-[15px] left-[15rem] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* ----------------------- */}
          <div className="mt-20 sm:mt-20 md:mt-0 w-[90%] mx-auto md:mx-0 sm:w-[80%] md:w-[100%]">
            <div className="h-10">
              <h1 className=" gap-x-[5px] text-xs sm:text-md grid grid-cols-[auto_auto_auto_auto] sm:gap-x-[40px]  md:grid md:grid-cols-[auto_auto_auto_auto] md:gap-x-[12px]  ">
                {settingsNav.map((item: any) => {
                  return (
                    <div
                      onClick={() => setNavHandler(item.id)}
                      className={`${
                        item.active && "border-b-4 border-btnGreen"
                      } text-center rounded-sm`}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </h1>
            </div>
            <div className="border-2 border-borderGrey rounded-md mt-6 border">
              {/* <General /> */}
              <Billing />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
