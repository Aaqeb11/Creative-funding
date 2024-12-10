import Loans from "./components/Loans";
import NavBar from "./components/Navbar";
import { SpecialityComponent } from "./components/SpecialityComponent";
import Teams from "./components/Team";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <NavBar />
      <main className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <div className="relative text-center">
          <h1 className="text-5xl lg:text-8xl font-light p-4 mb-4">
            CREATIVE FUNDING
          </h1>
          <p className="text-lg p-4 mb-6 max-w-lg mx-auto">
            A description about the website and how it has helped people uplift
            their business — basically a generic description.
          </p>
          <button className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition">
            Contact Us
          </button>
        </div>
      </main>

      {/* New Section */}
      <section className="relative flex flex-col items-center text-white py-16">
        <div className="absolute top-0 left-6 right-6 h-1 bg-gray-400 shadow-blurred-white"></div>
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4">
          Type Of Loans We Offer
        </h2>
        <p className="text-lg max-w-2xl mt-2 text-center">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <Loans />
      </section>
      <section className="relative flex flex-col items-center text-white py-16">
        <div className="absolute top-0 left-6 right-6 h-1 bg-gray-400 shadow-blurred-white"></div>
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TEAM
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4">
          The Dream Team
        </h2>
        <Teams />
      </section>
      <section className="relative flex flex-col items-center text-white py-16 gap-8">
        <div className="absolute top-0 left-6 right-6 h-1 bg-gray-400 shadow-blurred-white"></div>
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-4">
          Type Of Loans We Offer
        </h2>
        <p className="text-lg max-w-2xl mt-2 text-center">
          Technology brings new vision to nature. With satellite data and AI,
          you can see the many benefits of protecting critical ecosystems and
          share their growth over time.
        </p>
        <SpecialityComponent />
      </section>
    </div>
  );
}
