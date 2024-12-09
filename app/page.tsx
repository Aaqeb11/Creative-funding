import Image from "next/image";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <NavBar />
      <main className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <div className="relative text-center">
          <h1 className="text-5xl lg:text-8xl font-light  p-4 mb-4">CREATIVE FUNDING</h1>
          <p className="text-lg p-4 mb-6 max-w-lg mx-auto">
            A description about the website and how it has helped people uplift their business — basically a generic description.
          </p>
          <button className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition">
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
}
