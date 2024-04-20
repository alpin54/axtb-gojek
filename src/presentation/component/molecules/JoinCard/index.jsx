// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const JoinCard = (props) => {
	return (
		<div className={style.card}>
			<div className={style.img}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.description}</p>
				<Button to={props.btn.to}>
					<span data-title={props.btn.text}>{props.btn.text}</span>
				</Button>
			</div>
		</div>
	);
};

export default JoinCard;
