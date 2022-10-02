import Link from "next/link";
import Image from "next/image";
import Button from "../../components/button/Button";
import { useState, useEffect } from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w mx-auto px-4">
        <div className="flex">
          <div className="hidden md:flex nav-left w-1/2 justify-center space-x-16 p-6 mt-12 font-['poppins'] text-[2.4rem] font-[600]">
            <p className="cursor-pointer"><Link href="/"><div>Home</div></Link></p>
            <p className="cursor-pointer"><Link href="/"><div>About Us</div></Link></p>
            <p className="cursor-pointer"><Link href="/"><div>Contact Us</div></Link></p>
          </div>
          <div className="brand-name ">
            <Image
              src="/1t-logo.png"
              width={150}
              height={200}
              alt="PlaceINDIA Logo"
			  draggable="false"
            ></Image>
          </div>
          <div className="nav-right w-1/2 flex justify-center space-x-16 p-16 m-6">
            <div className="flex justify-center">
            <Link href="/resume"><button className='font-["poppins"] rounded-[5px] shadow-md hover:shadow-xl text-[1.4rem] bg-blue px-4 mx-3 text-white'>Resume Checker</button></Link>
            <Link href="/india"><button className='font-["poppins"] rounded-[5px] shadow-md hover:shadow-xl text-[1.4rem] bg-brown px-6 text-white'>Unemployment Rate</button></Link>
            
			</div>
			<div className="w-1/3">
			
            </div>
			
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
