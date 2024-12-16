import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Rehab Loan",
      description:
        "Quick funding for property renovation. ",
      backDescription:
        "I found a distressed property in a prime location, but I lacked the funds for renovation. SubTo Money Hub for help, and they provided me with a Rehab Loan that covered both the purchase and the renovation.",
      badge: "Adam M",
      image: "/test1.jpg",
    },
    {
      title: "DCSR Loan",
      description: "Fast, flexible financing for rentals.",
      backDescription:
        "I wanted to expand my rental portfolio and needed a reliable financing option. SubTo Money Hub offered me a DSCR Rental Loan, which enabled me to purchase a new rental property. The loan terms were flexible, and the approval process was fast.",
      badge: "Karl T",
      image: "/test2.jpg",
    },
    {
      title: "Rehab Loan",
      description: "Financed renovations for community revitalization.",
      backDescription:
        "I purchased an old, run-down property with the vision of revitalizing it and improving the local community. With a Rehab Loan, I was able to finance extensive renovations.",
      badge: "Maria S",
      image: "/test3.jpg",
    },
    {
      title: "Bridge Loan",
      description: "Immediate funding for prime opportunity",
      backDescription:
        "When I came across a prime investment opportunity, I knew I had to act fast. However, my capital was tied up in another property that hadn't sold yet. SubTo Money Hub came through with a Bridge Loan that gave me the immediate funds I needed.",
      badge: "Michael W",
      image: "/test4.jpg",
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

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
            className="basis-[80%] sm:basis-1/2 lg:basis-1/3"
          >
            <ReactCardFlip
              isFlipped={flippedStates[index]}
              flipDirection="horizontal"
            >
              {/* Front Face */}
              <Card className="rounded-lg border-none mt-10 relative overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="w-full rounded-lg md:h-[75vh] h-[80vh] z-0 object-cover"
                />
                <CardContent className="absolute top-0 left-0 z-10 flex items-end justify-center h-full w-full text-white p-0">
                  <div className="w-full h-1/3 bg-white/30 backdrop-blur-md opacity-80 flex flex-col rounded-b-lg p-4 justify-between">
                    <div>
                      <div className="flex gap-4 items-center min-h-16">
                        <p className="md:text-xl text-sm px-6 py-1 bg-white text-[#0C5304] rounded-lg">
                          {card.badge}
                        </p>
                        <p className="md:text-xl text-sm font-bold">
                          {card.title}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="md:text-xl text-lg font-bold">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mt-2 px-4 py-2 bg-green-800 text-white rounded"
                        onClick={() => handleFlip(index)}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back Face */}
              {/* Back Face */}
<Card className="rounded-lg border-none mt-10 relative overflow-hidden md:h-[75vh] h-[80vh]">
  <CardContent className="absolute top-0 left-0 z-10 flex justify-start h-full w-full p-4">
    <div className="w-full bg-white/30 backdrop-blur-md opacity-80 flex flex-col rounded-lg p-4">
      <div>
        <div className="flex gap-4 items-center">
          <p className="md:text-5xl text-sm px-6 py-1 bg-white text-[#0C5304] rounded-lg">
            {card.badge}
          </p>
         
        </div>
        <div className="mt-4">
          <p className="md:text-xl text-base font-normal">
            "{card.backDescription}"
          </p>
        </div>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-green-800 text-white rounded"
        onClick={() => handleFlip(index)}
      >
        Back
      </button>
    </div>
  </CardContent>
</Card>

            </ReactCardFlip>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent md:flex hidden" />
      <CarouselNext className="bg-transparent md:flex hidden" />
    </Carousel>
  );
};

export default Testimonials;
