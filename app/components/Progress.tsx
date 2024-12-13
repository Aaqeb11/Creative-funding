"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "this is the type of loan that we",
    description: "offer and and there are plenty",
    content: "this is the type of loan that we offer and and there are plenty",
  },
  {
    id: 2,
    title: "this is the type of loan that we",
    description: "offer and and there are plenty",
    content: "this is the type of loan that we offer and and there are plenty",
  },
  {
    id: 3,
    title: "this is the type of loan that we",
    description: "offer and and there are plenty",
    content: "this is the type of loan that we offer and and there are plenty",
  },
  {
    id: 4,
    title: "this is the type of loan that we",
    description: "offer and and there are plenty",
    content: "this is the type of loan that we offer and and there are plenty",
  },
];

const ProgressBar = () => {
  const progressRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  //   useEffect(() => {
  //     const cards = cardsRef.current;

  //     // GSAP Scroll Animation
  //     gsap.fromTo(
  //       cards,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: progressRef.current,
  //           start: "top center+=100", // Adjust start position
  //           end: "bottom center",
  //           scrub: true,
  //           markers: false, // Enable for debugging scroll positions
  //         },
  //         stagger: 0.3,
  //       }
  //     );
  //   }, []);

  return (
    <div className=" w-full flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        {cardData.map((card, index) => (
          <div key={index} className="w-full flex relative">
            <div className="flex flex-col gap-0 mr-4">
              <div className="h-5 w-5 rounded-full bg-custom-gradient"></div>
              {index !== cardData.length - 1 && (
                <div className="h-40 w-1 bg-white mx-auto "></div>
              )}
            </div>
            <div
              className={`absolute lg:w-[20vw]  w-[40vw]  ${
                index % 2 === 0
                  ? "lg:left-[100px] left-[40px]"
                  : "lg:right-[100px] right-[50px]"
              }`}
            >
              <Card className="flex flex-col  bg-gray-500 items-center justify-center text-center">
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
