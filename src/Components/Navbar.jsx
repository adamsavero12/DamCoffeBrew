import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon/coffee-bean-solid-24.png'

const Navbar = () => {
  return (
    <nav className="bg-[rgb(121,87,87)] px-4 py-3">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={Icon} alt="" />
          <span className="text-[#FFF0D1] text-lg font-bold">
            DamCoffeeBrew
          </span>
        </div>
        {/* Menu di sebelah kanan */}
        <div className="flex space-x-9">
          <Link to="/" className="text-[#FFF0D1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-[#FFF0D1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About 
          </Link>
          <Link to="/contact" className="text-[#FFF0D1] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
