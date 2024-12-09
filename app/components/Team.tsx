import React from "react";

const Teams: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img
              src="/pace.png" // Replace with your image path
              alt="Personal Loan"
              className="w-[70%] h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Personal Loan</h3>
            <p className="text-gray-600">
              Flexible loans for your personal needs with minimal documentation and fast approval.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img
              src="/pace.png" // Replace with your image path
              alt="Business Loan"
              className="w-[70%] h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Business Loan</h3>
            <p className="text-gray-600">
              Boost your business with tailored financial support for growth and expansion.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img
              src="/pace.png" // Replace with your image path
              alt="Home Loan"
              className="w-[70%] h-[70%] mx-auto object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Home Loan</h3>
            <p className="text-gray-600">
              Make your dream home a reality with low-interest rates and flexible EMI options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
