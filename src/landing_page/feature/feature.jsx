import React from "react";
import table from "../../assets/zpos8.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-20">
        <h1 className="text-2xl font-extrabold mb-8" data-aos="fade-down">
          Features <span className="text-blue-500">Analysis</span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-10">
          <img src={table} alt="" className="h-full lg:w-1/2" data-aos="fade-up"/>
          <div className="lg:w-1/2" data-aos="fade-up">
            <h1 className="text-blue-700 text-xl font-bold mt-4 lg:mt-0">Zpos Multiple Business/Shops</h1>
            <ul className="mb-4">
              <li>» Set up multiple businesses in the application.</li>
              <li>» No restriction on numbers of businesses.</li>
              <li>» Inventory & accounting information is kept separately for each business.</li>
            </ul>
            <h1 className="text-blue-700 text-xl font-bold">Products</h1>
            <ul className="mb-4">
              <li>» Manage Single & Variable products.</li>
              <li>» Classify products according to Brands, Category, Sub-Category.</li>
              <li>» Add products having different units</li>
              <li>» Add SKU number or auto-generate SKU number with prefixes.</li>
              <li>» Get stock alerts on low stock.</li>
              <li>» Save time by auto calculating selling price, the system is smart to auto calculate selling price based on purchase price and profit margin.</li>
              <li>» No need to type variations every time, create variation template and use it every time you need to create variable products.</li>
            </ul>
            <h1 className="text-blue-700 text-xl font-bold">Sell</h1>
            <ul className="mb-4">
              <li>» Simplified interface for selling products</li>
              <li>» Default Walk-In-Customer automatically added to a business</li>
              <li>» Add new customer from POS screen.</li>
              <li>» Ajax based selling screen – save reloading time</li>
              <li>» Mark an invoice for draft or final</li>
              <li>» Different options for payments</li>
              <li>» Customize invoice layout and invoice scheme.</li>
            </ul>
            <h1 className="text-blue-700 text-xl font-bold">User & Role Management:</h1>
            <ul>
              <li>» Powerful user and role management system</li>
              <li>» Predefined roles – Admin & Cashier</li>
              <li>» Create different Roles with permission as per your need.</li>
              <li>» Create unlimited users with different roles.</li>
            </ul>
            <h1 className="text-blue-700 text-xl font-bold">Products</h1>
            <ul className="mb-4">
              <li>» Manage Single & Variable products.</li>
              <li>» Classify products according to Brands, Category, Sub-Category.</li>
              <li>» Add products having different units</li>
              <li>» Add SKU number or auto-generate SKU number with prefixes.</li>
              <li>» Get stock alerts on low stock.</li>
              <li>» Save time by auto calculating selling price, the system is smart to auto calculate selling price based on purchase price and profit margin.</li>
              <li>» No need to type variations every time, create variation template and use it every time you need to create variable products.</li>
            </ul>
            <h1 className="text-blue-700 text-xl font-bold">User & Role Management:</h1>
            <ul>
              <li>» Powerful user and role management system</li>
              <li>» Predefined roles – Admin & Cashier</li>
              <li>» Create different Roles with permission as per your need.</li>
              <li>» Create unlimited users with different roles.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
