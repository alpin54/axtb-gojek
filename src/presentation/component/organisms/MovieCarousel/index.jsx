// -- react
import React from "react";
import Slider from "react-slick";

// -- slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

const MovieCarousel = (props) => {
	const { data, config } = props;
	const configSlick = {
		dots: true,
		arrows: false,
		SwipeToSlide: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		...config,
	};

	return (
		<div className="apple-tv">
			<div className={style.appleTVContainer}>
				<Slider {...configSlick}>
					{data.map((val, idx) => (
						<div key={`sc-${idx}`} className={style.appleTVItem}>
							<a href={val.to} className={style.appleTVLink}>
								{val.title}
							</a>
							<img
								src={val.image}
								alt={val.title}
								className={style.appleTVImage}
							/>
							<div className="apple-tv__text">
								<button className={style.appleTBtn}>Stream now</button>
								<h3 className={style.appleTVTitle}>
									<strong>{val.category}</strong> &middot; {val.title}
								</h3>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default MovieCarousel;
