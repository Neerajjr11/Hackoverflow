import HomeBanner from "../components/homeBanner/HomeBanner";
import TopInstitutes from "../components/institutes/TopInstitutes";
import Navbar from "../components/navbar/Navbar";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
  } from "@chakra-ui/react"

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