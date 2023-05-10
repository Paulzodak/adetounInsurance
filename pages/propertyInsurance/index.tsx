import { useSelector } from "react-redux";
import home from "../../assets/propertyInsurance/Home.svg";
import Chair from "../../assets/propertyInsurance/Chair.svg";
import Document from "../../assets/propertyInsurance/Document.svg";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useState } from "react";
import image1 from "../../assets/propertyInsurance/image1.svg";
import image2 from "../../assets/propertyInsurance/image2.svg";
import image3 from "../../assets/propertyInsurance/image3.svg";
import LandingPageContent from "@/components/templates/LandingPageContent";
import hero from "../../assets/propertyInsurance/hero.jpeg";
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
      name: "Dwelling coverage",
      text: "Dwelling coverage provides protection for the physical structure of your home, including the walls, roof, foundation and repairs to any damages",
      icon: home,
      aos: "fade-right",
    },
    {
      name: "Personal property coverage",
      text: "Personal property coverage helps protect your belongings, such as furniture, appliances, clothing, and other personal items",
      icon: Chair,
      aos: "fade-up",
    },
    {
      name: "Mortgage protection",
      text: "Mortgage, which is the largest financial obligations for homeowners. It ensures that your mortgage will be paid off in the event of your death or disability",
      icon: Document,
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
        <title> Property Insurance </title>
        <meta name="description" content="Home page" />
      </Helmet>
      <LandingPageContent
        learnMoreItems={learnMoreItems}
        insuranceReason={insuranceReason}
        hero={hero}
        heroHeader="Quality Home and Property Insurance Just a click away"
        offerDetail="This insurance provides important protections for your home, belongings, and liability risks. It offers financial security, peace of mind, and may be required by your mortgage lender. Customizable coverage options allow you to design a policy that fits your needs and budget."
        selectPlanText="Select a suitable plan for your Home/ Property insurance today"
      />
    </>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
