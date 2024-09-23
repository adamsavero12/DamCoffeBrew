import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './Icon/facebook.png'
import instagram from './Icon/instagram.png'
import youtube from './Icon/youtube.png'
import tiktok from './Icon/tiktok.png'
import Icon from './Icon/coffee-bean-solid-24.png';

const Footer = () => {
  return (
    <footer className="bg-[#664343] text-white pt-12">
      <div className="container mx-auto max-w-8xl text-center">
        <div className="mb-6">
          <div className='flex justify-center'>
            <img src={Icon} alt="DamCoffeeBrew Logo" className="mr-2" />
            <h2 className="text-2xl font-bold text-[#FFF0D1]">DamCoffeeBrew</h2>
          </div>
          <p className="mt-5 text-[#FFF0D1] max-w-2xl mx-auto">
            DamCoffeeBrew adalah blog website yang menyajikan informasi tentang dunia kopi. Di sini, setiap artikel dijelaskan secara rinci dan mudah dipahami.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-10">
          
          <a href="https://www.youtube.com/@adamsavero3650" className="text-gray-400 hover:text-white">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.facebook.com/adam.savero.71/" className="text-gray-400 hover:text-white">
          <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/admsvro/" className="text-gray-400 hover:text-white">
          <img src={instagram} alt="" />
          </a>
          
          <a href="https://www.tiktok.com/@adamsavero5" className="text-gray-400 hover:text-white">
          <img src={tiktok} alt="" />
          </a>
        </div>
      </div>
      <div className="bg-[#3B3030] pt-6 pb-6 flex container mx-auto max-w-8xl justify-between  ">
          <p className="text-[#FFF0D1]">&copy; 2024 DamCoffeeBrew. All rights reserved.</p>
          <div className="">
            <Link to="/" className="text-[#FFF0D1] hover:text-white mx-2">
              Home
            </Link>
            <Link to="/about" className="text-[#FFF0D1] hover:text-white mx-2">
              About
            </Link>
            <Link to="/contact" className="text-[#FFF0D1] hover:text-white mx-2">
              Contact
            </Link>
          </div>
        </div>
    </footer>
  );
}     

export default Footer;
