// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import Overview from "presentation/component/organisms/Overview";
import Loyalty from "presentation/component/organisms/Loyalty";

// -- dummy data
import bannerData from "./bannerData";
import overviewData from "./overviewData";
import loyalityData from "./loyalityData";

const Company = () => {
	return (
		<Default activeMenu="company">
			<HeroBanner {...bannerData} />
			<Overview {...overviewData} />
			<Loyalty {...loyalityData} />
		</Default>
	);
};

export default Company;
