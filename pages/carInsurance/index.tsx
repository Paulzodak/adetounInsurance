import { useSelector } from "react-redux";
import seat from "../../assets/carInsurance/seat.svg";
import car from "../../assets/carInsurance/car.svg";
import user from "../../assets/carInsurance/user.svg";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import image1 from "../../assets/carInsurance/image1.svg";
import image2 from "../../assets/carInsurance/image2.svg";
import image3 from "../../assets/carInsurance/image3.svg";
import LandingPageContent from "@/components/templates/LandingPageContent";
import hero from "../../assets/carInsurance/hero.jpeg";
import Helmet from "react-helmet";
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
      name: "Vehicle Damages",
      text: "Travel insurance covers any unforseen medical emergency that may come up during travel as it helps cover the cost of treatment and loss",
      icon: car,
      aos: "fade-right",
    },
    {
      name: "Personal Accident coverage",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: user,
      aos: "fade-up",
    },
    {
      name: "Third party liability",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: seat,
      aos: "fade-left",
    },
  ];

  const learnMoreItems = [
    {
      header: "Insuring your Home",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image1,
    },
    {
      header: "Benefits of Property Insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image2,
    },
    {
      header: "Family Home Insurance",
      text: "Providing financial protection for your family, debt coverages and flexible investment options...",
      image: image3,
    },
  ];
  return (
    <>
      <Helmet>
        <title> Car Insurance </title>
        <meta name="description" content="Home page" />
      </Helmet>
      <LandingPageContent
        learnMoreItems={learnMoreItems}
        insuranceReason={insuranceReason}
        hero={hero}
        heroHeader="Quality Insurance for your Motor Vehicles"
        offerDetail="Health insurance is a type of insurance policy that covers the cost of medical expenses, such as doctor visits, hospitalization, and prescription drugs. It is designed to protect individuals and families from financial hardship in the event of an unexpected illness or injury."
        selectPlanText="Select a suitable plan for your Motor/ Automobile insurance today"
      />
    </>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
