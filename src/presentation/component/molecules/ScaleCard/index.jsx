// -- style
import style from "./style.module.scss";

const ScaleCard = (props) => {
	return (
		<div className={props.color ? `${style.card} ${props.color}` : style.card}>
			<div className={style.img}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className={style.text}>
				<h4 className={style.name}>{props.title}</h4>
				<p className={style.description}>{props.description}</p>
			</div>
		</div>
	);
};

export default ScaleCard;
