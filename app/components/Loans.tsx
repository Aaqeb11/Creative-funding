import React from "react";
import { FaHome, FaHammer, FaMountain, FaMoneyBillWave, FaUserTie, FaHandshake, FaBriefcase, FaUser, FaFileInvoiceDollar } from "react-icons/fa";

const Loans: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: DSCR Loans */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaHome className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">DSCR Loans</h3>
            <p className="text-gray-600">
              A DSCR Rental Loan is a long-term rental loan designed for real estate investors to purchase or refinance rental properties. These loans are based on the property’s cash flow, ensuring that the net operating income exceeds or covers the mortgage payments.
            </p>
          </div>

          {/* Card 2: Rehab Loans */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaHammer className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rehab Loans</h3>
            <p className="text-gray-600">
              Rehab Loans are ideal for those aiming to fix and flip properties or improve rental properties to increase their income potential.
            </p>
          </div>

          {/* Card 3: Ground Up Loans */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaMountain className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ground Up Loans</h3>
            <p className="text-gray-600">
              Ground Up Loans cover the costs of land acquisition and construction, providing the necessary capital to bring new residential projects to life.
            </p>
          </div>

          {/* Card 4: Bridge Loans */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaMoneyBillWave className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Bridge Loans</h3>
            <p className="text-gray-600">
              Bridge Loans are short-term financing options designed to help real estate investors bridge the gap between the purchase of a new property and the sale of an existing one.
            </p>
          </div>

          {/* Card 5: Second Position DSCR Loans */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaHome className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Second Position DSCR Loans</h3>
            <p className="text-gray-600">
              This is a long-term rental loan designed for real estate investors to refinance rental properties when there is already existing debt on the property.
            </p>
          </div>

          {/* Card 6: PML */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaHandshake className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">PML</h3>
            <p className="text-gray-600">
              A PML (Private Money Lender) loan provides flexible, short-term financing for real estate investors, offering fast approvals, competitive rates, and tailored solutions.
            </p>
          </div>
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaFileInvoiceDollar className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">EMD Lender</h3>
            <p className="text-gray-600">
              An Earnest Money Deposit loan provides short-term financing for real estate investors to cover the earnest money required to secure a property under contract.
            </p>
          </div>

          {/* Card 8: Personal Lending */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaUser className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Lending</h3>
            <p className="text-gray-600">
              Personal real estate lending offers flexible financing for individuals looking to purchase, renovate, or improve their personal property.
            </p>
          </div>

          {/* Card 9: Business Funding */}
          <div className="bg-gray-400 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="mb-4 text-white">
              <FaBriefcase className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Funding</h3>
            <p className="text-gray-600">
              Looking to buy an existing business? Our business acquisition loans offer flexible financing solutions to help you secure the capital you need to purchase and grow an established business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loans;
