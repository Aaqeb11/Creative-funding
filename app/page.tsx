"use client";
import Form from "@/components/Form";
import Testimonials from "@/components/Testimonials";
import Loans from "../components/Loans";
import NavBar from "../components/Navbar";
import ProgressBar from "../components/Progress";
import { SpecialityComponent } from "../components/SpecialityComponent";
import Teams from "../components/Team";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import LogoSlider from "@/components/LogoSlider";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Footer } from "@/components/Footer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();
  const scope = useRef(null);
  useGSAP(
    () => {
      t1.from("#intro_main", {
        yPercent: -100,
        duration: 1.3,
        opacity: 0,
        delay: 0.3,
      })
        .from("#intro_content", {
          yPercent: 100,
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        })
        .from("#intro_button", {
          yPercent: 100,
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        });

      // Loan Section Animation
      gsap.from("#loan_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#loan_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#loan_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#loan_sec",
          start: "top center",
        },
      });

      // Process Section Animation
      gsap.from("#process_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#process_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#process_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#process_sec",
          start: "top center",
        },
      });

      // Team Section Animation
      gsap.from("#team_content", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#team_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });

      // Speciality Section Animation
      gsap.from("#speciality_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#speciality_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#speciality_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#speciality_sec",
          start: "top center",
        },
      });

      // Testimonial Section Animation
      gsap.from("#testimonial_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#testimonial_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#testmonial_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#testimonial_sec",
          start: "top center",
        },
      });

      // Form Section Animation
      gsap.from("#form_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#form_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#form_section", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#form_sec",
          start: "top center",
        },
      });
    },
    { scope: scope }
  );

  return (
    <div
      ref={scope}
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <NavBar />
      <main className="relative flex flex-col items-center justify-center min-h-screen text-white ">
        <Image
          src="/dollar2.png"
          width={100}
          height={100}
          alt="dollar"
          className="absolute md:top-0 top-10 w-[300px] -left-8 md:left-20 md:w-[500px]  z-0"
        />
        <Image
          src="/dollar1.png"
          width={100}
          height={100}
          alt="dollar"
          className="absolute z-0 md:top-[300px] md:right-14 md:w-[300px] right-1 w-[180px] bottom-32"
        />
        <div className="relative text-center z-10">
          <h1
            className="text-5xl lg:text-8xl font-light p-4 mb-4 text-center"
            id="intro_main"
          >
            CREATIVE FUNDING
          </h1>
          <p
            className="text-md md:text-xl p-4 mb-6 max-w-lg mx-auto"
            id="intro_content"
          >
            A description about the website and how it has helped people uplift
            their business — basically a generic description.
          </p>
          <div id="intro_button">
            <button className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      {/* New Section*/}
      <section className="flex flex-col justify-center lg:gap-14  gap-6 -mt-16 lg:-mt-0">
        <div className="">
          <LogoSlider />
        </div>
        <div className="w-full flex items-center justify-center  ">
          <Card className="lg:w-[70%] w-[90%] bg-gray-600 gap-4 flex items-center justify-center lg:gap-[14vw]  rounded-full p-2">
            <div className="flex flex-col">
              <p className="lg:text-7xl text-white md:text-4xl text-2xl  text-center">
                48
              </p>
              <p className="text-xl text-white text-center ">Business</p>
            </div>
            <div className="flex flex-col">
              <p className="lg:text-7xl text-white md:text-4xl text-2xl  text-center">
                48
              </p>
              <p className="text-xl text-white text-center ">Business</p>
            </div>
            <div className="flex flex-col">
              <p className="lg:text-7xl text-white md:text-4xl text-2xl text-center">48</p>
              <p className="text-xl text-white text-center">Business</p>
            </div>
          </Card>
        </div>
      </section>
      <div className=" h-1 mt-10 bg-gray-400 shadow-blurred-white"></div>
      <section
        className="relative  flex flex-col items-center text-white mt-16 "
        id="speciality_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            WHY US
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="speciality_heading"
        >
          Why Chose Us
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="speciality_content"
        >
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <SpecialityComponent />
      </section>

      {/* New Section */}
      <div className=" h-1 bg-gray-400 shadow-blurred-white mt-10"></div>
      <section
        className="relative flex flex-col items-center text-white my-16"
        id="loan_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="loan_heading"
        >
          Type Of Loans We Offer
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg px-2 mt-2 text-center"
          id="loan_content"
        >
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Loans />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section
        className="min-h-screen relative flex flex-col justify-center items-center lg:my-16 lg:mb-[20vh] mb-[40vh] my-16"
        id="process_sec"
      >
        <div className="mb-4 bg-custom-gradient px-6 py-2 rounded-full">
          <span className="text-white font-semibold rounded-full ">
            PROCESS
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-white text-center"
          id="process_heading"
        >
          Our process makes funding easier
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="process_content"
        >
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <ProgressBar />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white "></div>
      <section
        className="relative flex flex-col items-center text-white mt-16"
        id="team_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TEAM
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="team_content"
        >
          The Dream Team
        </h2>
        <Teams />
      </section>
      
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section
        className="relative  flex flex-col items-center text-white my-16 "
        id="testimonial_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TESTIMONIAL
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="testimonial_heading"
        >
          Our projects speak our proof
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="testmonial_content"
        >
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Testimonials />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white "></div>
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            FORM
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="form_heading"
        >
          Step closer towards success
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="form_section"
        >
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Form />
      </section>
      <Footer />
    </div>
  );
}
