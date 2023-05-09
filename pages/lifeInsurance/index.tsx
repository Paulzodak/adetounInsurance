import { useSelector } from "react-redux";
import dollarShield from "../../assets/lifeInsurance/dollarShield.svg";
import dollarDoc from "../../assets/lifeInsurance/dollarDoc.svg";
import card from "../../assets/lifeInsurance/card.svg";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import image1 from "../../assets/lifeInsurance/image1.svg";
import image2 from "../../assets/lifeInsurance/image2.svg";
import image3 from "../../assets/lifeInsurance/image3.svg";
import LandingPageContent from "@/components/templates/LandingPageContent";
import hero from "../../assets/lifeInsurance/hero.jpeg";
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
      icon: dollarShield,
      aos: "fade-right",
    },
    {
      name: "Personal Accident coverage",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: dollarDoc,
      aos: "fade-up",
    },
    {
      name: "Third party liability",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: card,
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
    <LandingPageContent
      learnMoreItems={learnMoreItems}
      insuranceReason={insuranceReason}
      hero={hero}
      heroHeader="Affordable Life Insurance for you and your Family"
      offerDetail="Quality and affordable life insurance for you and your family, This insurance is designed to provide financial support for your loved ones in the event of unexpected death, helping to cover expenses such as funeral cost, outstanding debts and daily living expenses."
      selectPlanText="Select a suitable plan for your Life insurance today"
    />
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
