import React from 'react';

const menuItems = [
  { name: 'Home', to: '#', current: true },
  { name: 'About', to: '#' },
  { name: 'Services', to: '#' },
  { name: 'Contact', to: '#' },
];

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="/">
           <h1>
             <span className="text-blue-400 text-3xl">Z</span>
            <span className="text-red-500 text-3xl">POS</span>
            <span className="text-sm"> point of sale</span>
         </h1>
        </a>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
            Get started
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.to}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    item.current ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { RiMenu4Line } from "react-icons/ri";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Service", href: "/service" },
//     { name: "Feature", href: "/feature" },
//     { name: "Blogs", href: "/blogs" },
//     { name: "Call us", href: "/contact" }
//   ];

//   return (
//     <div className="flex justify-center">
//       <nav className="h-20 flex justify-between items-center text-lg lg:px-28 md:px-12 w-full max-w-screen-xl relative font-semibold">
//         <a href="/">
//           <h1>
//             <span className="text-blue-400 text-3xl">Z</span>
//             <span className="text-red-500 text-3xl">POS</span>
//             <span className="text-sm"> point of sale</span>
//           </h1>
//         </a>
//         <ul className="list-none hidden lg:flex space-x-4 lg:space-x-10 md:space-x-3 text-sm">
//           {navItems.map((item, index) => (
//             <li key={index} >
//               <a href={item.href} className="hover:text-red-500 font-normal">
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <span className="cursor-pointer bg-red-500 rounded-full px-4 py-2 text-white hidden md:block hover:bg-blue-400">
//           +92-306-4423412
//         </span>
//         <div className="lg:hidden block">
//           <button onClick={handleClick}>
//             {click ? <FaTimes className="text-2xl" /> : <RiMenu4Line className="text-2xl" />}
//           </button>
//         </div>
//       </nav>
//       {click && (
//         <div className="lg:hidden block absolute z-10 top-20 w-full left-0 right-0 bg-gray-100">
//           <ul className="text-center text-xl p-4">
//             {navItems.map((item, index) => (
//               <li key={index} className="py-2 my-2 mx-4 border-b border-slate-200 hover:bg-slate-300 hover:rounded text-black">
//                 <a href={item.href} onClick={handleClick}>
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;