"use client";
import React from "react";
import { SpecialityStore } from "../store/SpecialityStores";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const SpecialityComponent = () => {
  // Use Pullstate hook to access store
  const selectedButton = SpecialityStore.useState((s) => s.selectedButton);
  const buttonData = SpecialityStore.useState((s) => s.buttonData);

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4">
      <div className="w-[40%] rounded-full bg-[#999999] flex justify-evenly">
        {(["button1", "button2", "button3"] as const).map((button) => (
          <button
            key={button}
            className={`w-1/3 py-2 rounded-full ${
              selectedButton === button
                ? "bg-custom-gradient hover:none"
                : "bg-transparent hover:bg-custom-gradient hover:opacity-30"
            }`}
            onClick={() => {
              // Update store state
              SpecialityStore.update((state) => {
                state.selectedButton = button;
              });
            }}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center ">
        <Card className="w-[70%] bg-opacity-70 bg-[#999999] flex justify-between">
          <div>
            <CardHeader>
              <CardTitle>{buttonData[selectedButton].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{buttonData[selectedButton].content}</p>
            </CardContent>
          </div>
          <div>
            <Image src="/pace.png" alt="pic" width={100} height={100} />
          </div>
        </Card>
      </div>
    </div>
  );
};
