// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import Scale from "presentation/component/organisms/Scale";
import Join from "presentation/component/organisms/Join";
import Loyalty from "presentation/component/organisms/Loyalty";

// -- dummy data
import bannerData from "./bannerData";
import scaleData from "./scaleData";
import loyalityData from "./loyalityData";
import joinData from "./joinData";

const Home = () => {
	return (
		<Default activeMenu="home">
			<HeroBanner {...bannerData} />
			<Scale {...scaleData} />
			<Loyalty {...loyalityData} />
			<Join {...joinData} />
		</Default>
	);
};

export default Home;
