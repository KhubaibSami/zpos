import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/', exact: true },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Feature', to: '/feature' },
  { name: 'Blog', to: '/blog' },
  { name: 'Call Us', to: '/call' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center">
          <h1 className="text-left mr-4"> {/* Add margin-right */}
            <span className="text-blue-400 text-3xl">Z</span>
            <span className="text-red-500 text-3xl">POS</span>
            <span className="text-sm"> point of sale</span>
          </h1>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="text-gray-600 md:hidden">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Center section */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              exact={item.exact}
              className="text-gray-600 hover:text-blue-400"
              activeClassName="text-red-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center">
          <span className="cursor-pointer bg-red-500 rounded-full px-4 py-2 text-white hover:bg-blue-400">
            +92-306-4423412
          </span>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 pb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                exact={item.exact}
                className="text-gray-600 hover:text-blue-400"
                activeClassName="text-red-500"
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <span className="cursor-pointer bg-red-500 rounded-full px-4 py-2 text-white hover:bg-blue-400">
              +92-306-4423412
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
