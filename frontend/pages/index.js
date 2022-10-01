import HomeBanner from "../components/homeBanner/HomeBanner";
import TopInstitutes from "../components/institutes/TopInstitutes";
import Navbar from "../components/navbar/Navbar";
import DatamapsIndia from 'react-datamaps-india'

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