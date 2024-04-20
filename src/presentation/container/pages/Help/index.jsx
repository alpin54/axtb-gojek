// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HelpBanner from "presentation/component/organisms/HelpBanner";
import HelpSection from "presentation/component/organisms/HelpSection";

// -- dummy data
import helpData from "./helpData";

const Help = () => {
	return (
		<Default activeMenu="help">
			<HelpBanner title="Need some help?" />
			<HelpSection {...helpData} />
		</Default>
	);
};

export default Help;
