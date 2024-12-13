import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import picture from "../public/container.png";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Amazing Service!",
      description: "Pachama releases Project Evaluation Criteria 2.3",
      badge: "ANNOUNCEMENT",
      image: picture,
    },
    {
      title: "Excellent Experience",
      description: "This platform has transformed how I learn.",
      badge: "REVIEW",
      image: picture,
    },
    {
      title: "Highly Recommend!",
      description: "A game-changer for education.",
      badge: "FEATURE",
      image: picture,
    },
    {
      title: "Top-notch Support",
      description: "The team is always ready to help!",
      badge: "SUPPORT",
      image: picture,
    },
    {
      title: "Outstanding Results",
      description: "I've achieved more than I expected.",
      badge: "RESULTS",
      image: picture,
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {testimonials.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-[80%] sm:basis-1/2 lg:basis-1/3 "
          >
            <Card className="rounded-lg border-none mt-10 relative overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="w-full rounded-lg md:h-[70vh] h-[60vh] z-0 object-cover"
              />
              <CardContent className="absolute top-0 left-0 z-10 flex items-end justify-center h-full w-full text-white p-0">
                <div className="w-full h-1/3 bg-white/30 backdrop-blur-md opacity-80 flex flex-col rounded-b-lg p-4">
                  <div className="flex gap-4 items-center min-h-16">
                    <p className="md:text-xl text-sm px-6 py-1 bg-white text-[#0C5304] rounded-lg">
                      {card.badge}
                    </p>
                    <p className="md:text-xl text-sm font-bold">{card.title}</p>
                  </div>
                  <div className="mt-2">
                    <p className="md:text-xl text-lg font-bold">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent md:flex hidden" />
      <CarouselNext className="bg-transparent md:flex hidden" />
    </Carousel>
  );
};

export default Testimonials;
