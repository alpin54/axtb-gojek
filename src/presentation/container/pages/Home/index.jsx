import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import Scale from "presentation/component/organisms/Scale";
import Join from "presentation/component/organisms/Join";
import Loyalty from "presentation/component/organisms/Loyalty";
import MovieCarousel from "presentation/component/organisms/MovieCarousel";

// -- dummy data
import bannerData from "./bannerData";
import scaleData from "./scaleData";
import carouselData from "./carouselData";
import loyalityData from "./loyalityData";
import joinData from "./joinData";

// -- hooks
import useFetch from "core/hooks/useFetch";

const Home = () => {
	const [startDate, setStartDate] = useState(new Date());

	const movieConfig = {
		autoplaySpeed: 1500,
	};

	const datePickerConfig = {
		monthsShown: 2,
		selected: startDate,
		onChange: (date) => setStartDate(date),
		minDate: new Date(),
	};

	const { data: dataPosts } = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const { data: dataComments } = useFetch(
		"https://jsonplaceholder.typicode.com/comments"
	);

	return (
		<Default activeMenu="home">
			<HeroBanner {...bannerData} />
			<Scale {...scaleData} />
			<MovieCarousel data={carouselData} config={movieConfig} />
			<Loyalty {...loyalityData} />
			<Join {...joinData} />
			<DatePicker {...datePickerConfig} />
			<h2>API POST</h2>
			<ul>
				{dataPosts.map((val, idx) => (
					<li key={`po-${idx}`}>
						<h3>{val.title}</h3>
						<p>{val.body}</p>
					</li>
				))}
			</ul>
			<h2>API Comments</h2>
			<ul>
				{dataComments.map((val, idx) => (
					<li key={`po-${idx}`}>
						<h3>{val.title}</h3>
						<p>{val.body}</p>
					</li>
				))}
			</ul>
		</Default>
	);
};

export default Home;
