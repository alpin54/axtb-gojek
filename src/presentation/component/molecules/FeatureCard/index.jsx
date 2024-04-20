// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const FeatureCard = (props) => {
	let classNameStyle = style.card;
	if (props.bg === "white") {
		classNameStyle += " " + style.cardWhite;
	}
	let buttonEl = (
		<Button to={props.btn.to}>
			<span data-title={props.btn.text}>{props.btn.text}</span>
		</Button>
	);
	if (props.button === "arrow") {
		buttonEl = (
			<Button to={props.btn.to} category="arrow" icon="arrow-right">
				{props.btn.text}
			</Button>
		);
	}
	return (
		<div className={classNameStyle}>
			{props.image && (
				<div className={style.img}>
					<img src={props.image} alt={props.title} />
				</div>
			)}
			{props.title && <h4 className={style.title}>{props.title}</h4>}
			<p className={style.desc}>{props.description}</p>
			{buttonEl}
		</div>
	);
};

export default FeatureCard;
