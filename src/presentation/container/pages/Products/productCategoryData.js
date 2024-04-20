import gofood from "core/assets/img/icon/gofood-red.svg";
import gomed from "core/assets/img/icon/gomed-red.svg";
import gomart from "core/assets/img/icon/gomart-red.svg";
import goshop from "core/assets/img/icon/goshop-red.svg";
import gobiz from "core/assets/img/icon/gobiz.svg";
import midtrans from "core/assets/img/icon/midtrans.svg";
import moka from "core/assets/img/icon/moka.svg";
import selly from "core/assets/img/icon/selly.svg";

const productCategoryData = {
	food: {
		color: "red",
		title: "Food & Shopping",
		description:
			"Fill your cart with food, electronics, medicines, and more. Without stepping out!",
		list: [
			{
				image: gofood,
				description: "Hungry? Order in.",
				btn: {
					to: "/gofood",
					text: "Know more",
				},
			},
			{
				image: gomed,
				description: "Groceries delivered from stores nearby.",
				btn: {
					to: "/gomed",
					text: "Know more",
				},
			},
			{
				image: gomart,
				description: "Chat with doctors, order in medicines.",
				btn: {
					to: "/gomart",
					text: "Know more",
				},
			},
			{
				image: goshop,
				description: "Buy anything from anywhere",
				btn: {
					to: "/goshop",
					text: "Know more",
				},
			},
		],
	},
	business: {
		color: "purple",
		title: "Business",
		description:
			"Manage your restaurants, run ads, create promos, and do more.",
		list: [
			{
				image: gobiz,
				description: "A Gojek app to run and grow your business.",
				btn: {
					to: "/gobiz",
					text: "Know more",
				},
			},
			{
				image: midtrans,
				description: "Accept payments and make payouts easily",
				btn: {
					to: "/midtrans",
					text: "Know more",
				},
			},
			{
				image: moka,
				description: "Cloud based POS that made selling easy",
				btn: {
					to: "/moka",
					text: "Know more",
				},
			},
			{
				image: selly,
				description: "Keyboard for online sellers",
				btn: {
					to: "/selly",
					text: "Know more",
				},
			},
		],
	},
};

export default productCategoryData;
