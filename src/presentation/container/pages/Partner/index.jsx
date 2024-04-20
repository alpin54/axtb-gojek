// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import Feature from "presentation/component/organisms/Feature";
import Join from "presentation/component/organisms/Join";

// -- dummy data
import bannerData from "./bannerData";
import joinData from "./joinData";
import featureData from "./featureData";

const Partner = () => {
	return (
		<Default activeMenu="partner">
			<HeroBanner {...bannerData} />
			<Feature {...featureData} />
			<Join {...joinData} />
		</Default>
	);
};

export default Partner;
