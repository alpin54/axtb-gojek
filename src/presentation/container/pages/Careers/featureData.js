import goride from "core/assets/img/icon/goride.svg";
import gocar from "core/assets/img/icon/gocar.svg";
import gosend from "core/assets/img/icon/gosend.svg";
import gobox from "core/assets/img/icon/gobox.svg";

const featureData = {
	title: "What drives you?",
	list: [
		{
			image: goride,
			description: "Ride your customers on safe and steady two-wheelers.",
			btn: {
				to: "/goride",
				text: "Know More",
			},
		},
		{
			image: gocar,
			description: "Drive the four-wheeler for comfortable trips.",
			btn: {
				to: "/gocar",
				text: "Know More",
			},
		},
		{
			image: gosend,
			description: "Deliver packages safely and quickly.",
			btn: {
				to: "/gosend",
				text: "Know More",
			},
		},
		{
			image: gobox,
			description: "Help customers move heavy items.",
			btn: {
				to: "/gobox",
				text: "Know More",
			},
		},
	],
};

export default featureData;
