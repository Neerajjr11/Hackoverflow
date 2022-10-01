import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w mx-auto px-4">
        <div className="flex">
          <div className="hidden md:flex nav-left w-1/2 justify-center space-x-16 p-6 font-['poppins'] text-[2.4rem] font-[600]">
            <div>Home</div>
            <div>About Us</div>
            <div>Contact Us</div>
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
          <div className="nav-right w-1/2 flex justify-center space-x-16 p-6">
            <div>
				hello
			</div>
			<div className="w-1/3">
              <input
                type="text"
                id="search-navbar"
                placeholder="Search..."
              />
            </div>
			
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
