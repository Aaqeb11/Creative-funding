import React from "react";
import { FaUserTie, FaRulerCombined, FaSmile } from "react-icons/fa";

const Loans: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-green">
              <FaUserTie className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Qualified & Driven Professionals
            </h3>
            <p className="text-gray-200">
              The core team at DGA consists of qualified and driven professionals comprising of Architects,
              Interior Designers, and Engineers who create a versatile body of work.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-green">
              <FaRulerCombined className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timeless Designs</h3>
            <p className="text-gray-200">
              The firm strives to maintain a balance between aesthetics and functionality in all its designs.
              There is a constant search of exploring the uncharted and concluding beyond the conventional.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-green">
              <FaSmile className="w-12 h-12 mx-auto animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-200">
              DGA maintains trusting and a close working relationship between the designer and the client for
              the success and smooth functioning of any undertaken project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loans;
