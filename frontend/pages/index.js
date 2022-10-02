import HomeBanner from "../components/homeBanner/HomeBanner";
import TopInstitutes from "../components/institutes/TopInstitutes";
import Navbar from "../components/navbar/Navbar";
import DatamapsIndia from 'react-datamaps-india'
import Image from 'next/image'
import { useState } from "react";

const HomePage = () => {
	return (
		<>
			<Navbar/>
			<HomeBanner/>
			<TopInstitutes/>
			
		</>
	);
}

export default HomePage;