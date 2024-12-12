import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { FaUserTie, FaRulerCombined, FaSmile } from "react-icons/fa";

const servicesData = [
  {
    icon: FaUserTie,
    title: "Qualified & Driven Professionals",
    description:
      "The core team at DGA consists of qualified and driven professionals comprising of Architects, Interior Designers, and Engineers who create a versatile body of work.",
  },
  {
    icon: FaRulerCombined,
    title: "Timeless Designs",
    description:
      "The firm strives to maintain a balance between aesthetics and functionality in all its designs. There is a constant search of exploring the uncharted and concluding beyond the conventional.",
  },
  {
    icon: FaSmile,
    title: "Happy Customers",
    description:
      "DGA maintains trusting and a close working relationship between the designer and the client for the success and smooth functioning of any undertaken project.",
  },
];

const Loans: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 border-none"
            >
              <div className="mb-4 text-green">
                <service.icon className="w-12 h-12 mx-auto" />
              </div>
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-xl font-semibold mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-200">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loans;
