// -- molecules
import HelpCard from "presentation/component/molecules/HelpCard";

// -- style
import style from "./style.module.scss";

const HelpSection = (props) => {
	return (
		<section className={style.help}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.card} key={`hc-${idx}`}>
							<HelpCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HelpSection;
