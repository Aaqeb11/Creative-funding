import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Card className="rounded-lg w-1/3 ">
      <Image src="/container.png" alt="bg" width={100} height={100} />
    </Card>
  );
};

export default Testimonials;
