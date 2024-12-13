"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const cardData = [
  {
    id: 1,
    title: "Loan Type 1",
    content: "This is the type of loan that we offer, and there are plenty.",
  },
  {
    id: 2,
    title: "Loan Type 2",
    content: "This is the type of loan that we offer, and there are plenty.",
  },
  {
    id: 3,
    title: "Loan Type 3",
    content: "This is the type of loan that we offer, and there are plenty.",
  },
  {
    id: 4,
    title: "Loan Type 4",
    content: "This is the type of loan that we offer, and there are plenty.",
  },
  {
    id: 5,
    title: "Loan Type 5",
    content: "This is the type of loan that we offer, and there are plenty.",
  },
];

const ProgressBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      if (containerRef.current) {
        // Animate Cards
        const elements = gsap.utils.toArray(".attend_card");
        elements.forEach((element: any, index: number) => {
          gsap.set(element, {
            clipPath: "inset(0 0 100% 0)",
            opacity: 0,
            y: 50,
          });

          ScrollTrigger.create({
            trigger: element,
            start: "top 80%",
            onEnter: () => {
              gsap.to(element, {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                y: 0,
                duration: 1.3,
                delay: index * 0.3, // Add stagger effect
                ease: "power3.out",
              });
            },
            once: true,
          });
        });

        // Animate Progress Lines
        const progressLines = gsap.utils.toArray(".progress_line");
        progressLines.forEach((line: any, index: number) => {
          gsap.set(line, {
            height: "0%", // Start collapsed
            opacity: 0,
          });

          ScrollTrigger.create({
            trigger: line,
            start: "top 80%",
            onEnter: () => {
              gsap.to(line, {
                height: "100%",
                opacity: 1,
                duration: 1.3,
                delay: index * 0.2, // Stagger effect for progress lines
                ease: "power3.out",
              });
            },
            once: true,
          });
        });
      }
    }
  }, []);

  return (
    <div
      className="w-full flex justify-center items-center min-h-screen mt-10"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center ">
        {cardData.map((card, index) => (
          <div key={index} className="w-full flex relative progress_line">
            <div className="flex flex-col gap-0 ">
              <div className="h-5 w-5 rounded-full bg-green-400"></div>
              {index !== cardData.length - 1 && (
                <div className="h-40 w-1 bg-white mx-auto "></div>
              )}
            </div>
            <div
              className={`absolute lg:w-[20vw] w-[40vw] attend_card ${
                index % 2 === 0
                  ? "lg:left-[100px] left-[35px]"
                  : "lg:right-[100px] right-[35px]"
              }`}
            >
              <Card className="flex flex-col items-center justify-center text-center">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.content}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
