import employees from "core/assets/img/dummy/employee.svg";
import driver from "core/assets/img/dummy/driver.svg";
import merchant from "core/assets/img/dummy/merchant.svg";

const joinData = {
	title: "Join the Ride",
	list: [
		{
			image: employees,
			title: "Employees",
			description:
				"Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
			btn: {
				text: "Join as employees",
				to: "/employees",
			},
		},
		{
			image: driver,
			title: "Drivers partner",
			description:
				"We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
			btn: {
				text: "Join as driver",
				to: "/driver",
			},
		},
		{
			image: merchant,
			title: "Merchants",
			description:
				"We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
			btn: {
				text: "Join as merchant",
				to: "/merchant",
			},
		},
	],
};

export default joinData;
