"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const cardData = [
  {
    id: 1,
    title: "1",
    content: "Prequalification",
  },
  {
    id: 2,
    title: "2",
    content: "Complete Loan Application",
  },
  {
    id: 3,
    title: "3",
    content: "Underwriting and Appraisal",
  },
  {
    id: 4,
    title: "4",
    content: "Conditional Approval",
  },
  {
    id: 5,
    title: "5",
    content: "Loan Closing",
  },
];

const ProgressBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (containerRef.current) {
      // Ensure refs are properly typed and not undefined
      const validCardRefs = cardRefs.current.filter(
        (ref): ref is HTMLDivElement => ref !== null
      );
      const validProgressLines = progressLineRefs.current.filter(
        (ref): ref is HTMLDivElement => ref !== null
      );

      validCardRefs.forEach((card, index) => {
        // Animate each card
        gsap.set(card, {
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
          y: 50,
        });

        // Only create ScrollTrigger for cards before the last one
        if (index < validCardRefs.length - 1) {
          const progressLine = validProgressLines[index];

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
              // Card animation
              gsap.to(card, {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power3.out",
              });

              // Progress line animation
              if (progressLine) {
                const dynamicProgress = progressLine.querySelector(
                  ".dynamic-progress"
                ) as HTMLDivElement;
                gsap.to(dynamicProgress, {
                  height: "100%",
                  duration: 1,
                  ease: "power3.out",
                });
              }
            },
            onLeaveBack: () => {
              // Reset animations when scrolling back
              if (progressLine) {
                const dynamicProgress = progressLine.querySelector(
                  ".dynamic-progress"
                ) as HTMLDivElement;
                gsap.to(dynamicProgress, {
                  height: "0%",
                  duration: 0.5,
                  ease: "power3.in",
                });
              }
            },
          });
        }
      });
    }
  }, []);

  return (
    <div
      className="w-full flex justify-center items-center min-h-screen mt-10"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center">
        {cardData.map((card, index) => (
          <div key={index} className="w-full flex relative progress_line">
            <div className="flex flex-col gap-0">
              <div className="h-5 w-5 rounded-full bg-custom-gradient"></div>
              {index !== cardData.length - 1 && (
                <div
                  ref={(el) => {
                    if (progressLineRefs.current) {
                      progressLineRefs.current[index] = el;
                    }
                  }}
                  className="h-40 w-1 bg-gray-600 relative overflow-hidden mx-auto"
                >
                  {/* Dynamic Progress Overlay */}
                  <div
                    className="dynamic-progress absolute top-0 left-0 w-full bg-green-800"
                    style={{
                      height: "0%",
                      transition: "height 1.3s ease",
                    }}
                  ></div>
                </div>
              )}
            </div>
            <div
              ref={(el) => {
                if (cardRefs.current) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`absolute lg:w-[20vw] w-[40vw] attend_card ${
                index % 2 === 0
                  ? "lg:left-[100px] left-[35px]"
                  : "lg:right-[100px] right-[35px]"
              }`}
            >
              <Card className="flex bg-gray-600 flex-col items-center justify-center text-center">
                <CardHeader>
                  <CardTitle className="text-5xl text-bold text-white">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
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
