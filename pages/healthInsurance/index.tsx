import * as React from "react";
import LandingPageContent from "@/components/templates/LandingPageContent";
import firstAid from "../../assets/healthInsurance/firstAid.svg";
import call from "../../assets/healthInsurance/call.svg";
import plus from "../../assets/healthInsurance/plus.svg";
import hero from "../../assets/healthInsurance/hero.jpeg";
import image1 from "../../assets/healthInsurance/image1.svg";
import image2 from "../../assets/healthInsurance/image2.svg";
import image3 from "../../assets/healthInsurance/image3.svg";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const insuranceReason = [
    {
      name: "Medical Emergency",
      text: "Travel insurance covers any unforseen medical emergency that may come up during travel as it helps cover the cost of treatment and loss ",
      icon: firstAid,
      aos: "fade-right",
    },
    {
      name: "Health risks and infections",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: call,
      aos: "fade-up",
    },
    {
      name: "Prescriptions Coverage",
      text: "Travel insurance covers damages and losses incurred against a third party during trip, A third party is compensated for damages incurred",
      icon: plus,
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
  //   const hero = "url(../assets/healthInsurance/homeHero.svg)";

  return (
    <LandingPageContent
      learnMoreItems={learnMoreItems}
      insuranceReason={insuranceReason}
      hero={hero}
      heroHeader="Affordable Health Insurance for you and your Family"
      offerDetail="Health insurance is a type of insurance policy that covers the cost of medical expenses, such as doctor visits, hospitalization, and prescription drugs. It is designed to protect individuals and families from financial hardship in the event of an unexpected illness or injury."
      selectPlanText="Select a suitable plan for your health insurance today"
    />
  );
}
