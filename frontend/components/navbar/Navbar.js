import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

const Navbar = () => {
	const [collegeDetails, setCollegeDetails]= useState({
        college_id: 0,
        name: "All",
        region: "India", 
        branch: "All"
    })

	useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/get_colleges").then(res=>res.json())
        .then(res=>{
            setColleges(res.data)
        });
    }, [])

	const [college, setColleges] = useState([]);
    const [college_id, setCollegeId] = useState(1);
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
			<button className='rounded-[5px] shadow-md hover:shadow-xl text-[1.4rem] bg-[#584EFD] px-10 py-5 font-poppins font-md text-white py-2'>My Data</button>
			</div>
			<div className="w-1/3">
			<select className="w-[30%] mr-60 rounded-xl border-0 bg-[#fff] h-[40px] text-[1.5rem]" onChange={e=>{
                        setStatistics(["...", "...", "...", "..."])
                        setCollegeId(e.target.value)
                        }}>
                        {college.map((val, index)=><option value={val.college_id}>{val.name} ({val.state})</option>)}
                    </select>
            </div>
			
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
