import * as React from "react";
import LandingPageContent from "@/components/templates/LandingPageContent";
import analytics from "../../assets/businessInsurance/analytics.svg";
import bag from "../../assets/businessInsurance/bag.svg";
import key from "../../assets/businessInsurance/key.svg";
import hero from "../../assets/businessInsurance/homeHero.jpeg";
import image1 from "../../assets/businessInsurance/image1.svg";
import image2 from "../../assets/businessInsurance/image2.svg";
import image3 from "../../assets/businessInsurance/image3.svg";
import Helmet from "react-helmet";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const insuranceReason = [
    {
      name: "Business finance protection",
      text: "Protect your business from financial losses resulting from various risks, such as property damage, lawsuits, injuries, or other unexpected events. ",
      icon: bag,
      aos: "fade-right",
    },
    {
      name: "Legal protection",
      text: "Providing legal protection by covering the costs of legal defense and potential damages in case of lawsuits or legal claims",
      icon: key,
      aos: "fade-up",
    },
    {
      name: "Business continuity",
      text: "Business insurance maintains business continuity in the face of unexpected events. It helps businesses recover financially from losses or damages",
      icon: analytics,
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
  const learnMore = [];
  return (
    <div>
      <Helmet>
        <title> Business Insurance </title>
        <meta name="description" content="Home page" />
      </Helmet>
      <LandingPageContent
        learnMoreItems={learnMoreItems}
        insuranceReason={insuranceReason}
        hero={hero}
        heroHeader="Smart and Concise Business Insurance Plans for you"
        offerDetail="Business insurance is a type of insurance coverage that provides financial protection to businesses against potential losses or damages caused by various risks and liabilities. We help businesses manage risk and safeguard their assets, operations, employees, and customers from unexpected events that could result in financial losses or legal liabilities."
        selectPlanText="Select a suitable plan for your Business insurance today"
      />
    </div>
  );
}
