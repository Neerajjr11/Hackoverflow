import HomeBanner from "../components/homeBanner/HomeBanner";
import TopInstitutes from "../components/institutes/TopInstitutes";
import Navbar from "../components/navbar/Navbar";

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