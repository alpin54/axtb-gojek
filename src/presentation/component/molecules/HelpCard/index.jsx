// -- react
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const HelpCard = (props) => {
	return (
		<div className={style.card}>
			<Link href={props.to} className={style.link}></Link>
			<img src={props.image} alt={props.name} className={style.icon} />
			<p className={style.name}>{props.name}</p>
		</div>
	);
};

export default HelpCard;
