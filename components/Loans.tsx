import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  FaHome,
  FaHammer,
  FaMountain,
  FaMoneyBillWave,
  FaUserTie,
  FaHandshake,
  FaFileInvoiceDollar,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

const servicesData = [
  {
    icon: FaHome,
    title: "DSCR Loans",
    description:
      "A DSCR Rental Loan is a long-term rental loan designed for real estate investors to purchase or refinance rental properties.",
  },
  {
    icon: FaHammer,
    title: "Rehab Loans",
    description:
      "Rehab Loans are ideal for those aiming to fix and flip properties or improve rental properties to increase their income potential.",
  },
  {
    icon: FaMountain,
    title: "Ground Up Loans",
    description:
      "Ground Up Loans cover the costs of land acquisition and construction, providing the necessary capital to bring new residential projects to life.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Bridge Loans",
    description:
      "Bridge Loans are short-term financing options designed to help real estate investors bridge the gap between the purchase of a new property and the sale of an existing one.",
  },
  {
    icon: FaHome,
    title: "Second Position DSCR Loans",
    description:
      "This is a long-term rental loan designed for real estate investors to refinance rental properties when there is already existing debt on the property.",
  },
  {
    icon: FaHandshake,
    title: "PML",
    description:
      "A PML (Private Money Lender) loan provides flexible, short-term financing for real estate investors, offering fast approvals, competitive rates, and tailored solutions.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "EMD Lender",
    description:
      "An Earnest Money Deposit loan provides short-term financing for real estate investors to cover the earnest money required to secure a property under contract.",
  },
  {
    icon: FaUser,
    title: "Personal Lending",
    description:
      "Personal real estate lending offers flexible financing for individuals looking to purchase, renovate, or improve their personal property.",
  },
  {
    icon: FaBriefcase,
    title: "Business Funding",
    description:
      "Looking to buy an existing business? Our business acquisition loans offer flexible financing solutions to help you secure the capital you need to purchase and grow an established business.",
  },
];

const Loans: React.FC = () => {
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(servicesData.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={flippedStates[index]}
              flipDirection="vertical"
            >
              {/* Front of the card */}
              <Card className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform lg:hover:scale-105 duration-300 border-none flex flex-col justify-evenly gap-2 md:h-[40vh] h-[55vh] ">
                <div>
                  <div className="mb-4 text-white">
                    <service.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl text-white font-semibold mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-200">{service.description}</p>
                  </CardContent>
                </div>
                <div className="items-center justify-center">
                  <button
                    className="p-4 rounded-full bg-green-800 text-white"
                    onClick={() => handleFlip(index)}
                  >
                    More Info
                  </button>
                </div>
              </Card>

              {/* Back of the card */}
              <Card className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform lg:hover:scale-105 duration-300 border-none flex flex-col justify-evenly gap-2 md:h-[40vh] h-[55vh]">
                <div>
                  <CardContent className="p-0">
                    <p className="text-gray-200">{service.description}</p>
                  </CardContent>
                </div>
                <div className="items-center justify-center">
                  <button
                    className="p-4 rounded-full bg-green-800 text-white"
                    onClick={() => handleFlip(index)}
                  >
                    Less Info
                  </button>
                </div>
              </Card>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loans;
