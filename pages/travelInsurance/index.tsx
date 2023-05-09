import { useSelector } from "react-redux";
import firstAid from "../../assets/travelInsurance/firstAid.svg";
import user from "../../assets/travelInsurance/user.svg";
import shield from "../../assets/travelInsurance/shield.svg";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import image1 from "../../assets/travelInsurance/image1.svg";
import image2 from "../../assets/travelInsurance/image2.svg";
import image3 from "../../assets/travelInsurance/image3.svg";
import LandingPageContent from "@/components/templates/LandingPageContent";
import hero from "../../assets/travelInsurance/hero.jpeg";
export default function Home() {
  const { username } = useSelector((state: any) => state.user);
  console.log(username);
  const caretClasses = "";
  const caretSize = "1.5rem";
  const [selectedId, setSelectedId]: any = useState("");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const insuranceReason = [
    {
      name: "Dwelling coverage",
      text: "Dwelling coverage provides protection for the physical structure of your home, including the walls, roof, foundation and repairs to any damages",
      icon: firstAid,
      aos: "fade-right",
    },
    {
      name: "Personal property coverage",
      text: "Personal property coverage helps protect your belongings, such as furniture, appliances, clothing, and other personal items",
      icon: user,
      aos: "fade-up",
    },
    {
      name: "Mortgage protection",
      text: "Mortgage, which is the largest financial obligations for homeowners. It ensures that your mortgage will be paid off in the event of your death or disability",
      icon: shield,
      aos: "fade-left",
    },
  ];

  const learnMoreItems = [
    {
      header: "Benefits of Life Insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image1,
    },
    {
      header: "Family and Life ",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image2,
    },
    {
      header: "Life Insurance Policies",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image3,
    },
  ];
  return (
    <LandingPageContent
      learnMoreItems={learnMoreItems}
      insuranceReason={insuranceReason}
      hero={hero}
      heroHeader="Travel Insurance for you and your Family"
      offerDetail="Quality and affordable Travel insurance for you and your family, This insurance is designed to provide coverage for unexpected events that may occur when travelling, Also providing financial protection during medical emergencies, Trip cancellation, lost or stolen lugages, and other travel related incidents."
      selectPlanText="Select a suitable plan for your Travel  insurance today"
    />
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
