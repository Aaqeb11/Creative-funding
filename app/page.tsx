import Testimonials from "@/components/Testimonials";
import Loans from "../components/Loans";
import NavBar from "../components/Navbar";
import ProgressBar from "../components/Progress";
import { SpecialityComponent } from "../components/SpecialityComponent";
import Teams from "../components/Team";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <NavBar />
      <main className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <div className="relative text-center">
          <h1 className="text-5xl lg:text-8xl font-light p-4 mb-4 text-center">
            CREATIVE FUNDING
          </h1>
          <p className="text-md md:text-xl p-4 mb-6 max-w-lg mx-auto">
            A description about the website and how it has helped people uplift
            their business — basically a generic description.
          </p>
          <button className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition">
            Contact Us
          </button>
        </div>
      </main>

      {/* New Section */}
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section className="relative flex flex-col items-center text-white my-16">
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center">
          Type Of Loans We Offer
        </h2>
        <p className="text-md md:text-xl lg:max-w-2xl max-w-lg px-2 mt-2 text-center">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Loans />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section className="min-h-screen relative flex flex-col justify-center items-center lg:my-16 lg:mb-[20vh] mb-[40vh] my-16">
        <div className="mb-4 bg-custom-gradient px-6 py-2 rounded-full">
          <span className="text-white font-semibold rounded-full ">
            PROCESS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-white text-center">
          Our process makes funding easier
        </h2>
        <p className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <ProgressBar />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white "></div>
      <section className="relative flex flex-col items-center text-white mt-16">
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TEAM
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center">
          The Dream Team
        </h2>
        <Teams />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section className="relative  flex flex-col items-center text-white mt-16 ">
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center">
          Type Of Loans We Offer
        </h2>
        <p className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <SpecialityComponent />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section className="relative  flex flex-col items-center text-white mt-16 ">
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TESTIMONIAL
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center">
          Our projects speak our proof
        </h2>
        <p className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Testimonials />
      </section>
    </div>
  );
}
