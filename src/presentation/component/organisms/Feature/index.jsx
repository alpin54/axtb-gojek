// -- molecules
import FeatureCard from "presentation/component/molecules/FeatureCard";

// -- style
import style from "./style.module.scss";

const Feature = (props) => {
	return (
		<section className={style.feature}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.item} key={`fc-${idx}`}>
							<FeatureCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Feature;
