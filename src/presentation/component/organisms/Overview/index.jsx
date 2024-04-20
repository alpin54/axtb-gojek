// -- style
import style from "./style.module.scss";

// -- molecules
import OverviewCard from "presentation/component/molecules/OverviewCard";

const Overview = (props) => {
	return (
		<section className={style.overview}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.card} key={`oc-${idx}`}>
							<OverviewCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Overview;
