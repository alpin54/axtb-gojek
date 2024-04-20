// -- style
import style from "./style.module.scss";

const OverviewCard = (props) => {
	let classNameStyle = style.card;
	if (props.color === "green") {
		classNameStyle += " " + style.cardGreen;
	} else if (props.color === "red") {
		classNameStyle += " " + style.cardRed;
	} else if (props.color === "orange") {
		classNameStyle += " " + style.cardOrange;
	}
	return (
		<div className={classNameStyle}>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.description}</p>
			</div>
			<div className={style.img}>
				<img src={props.image} alt={props.title} />
			</div>
		</div>
	);
};

export default OverviewCard;
