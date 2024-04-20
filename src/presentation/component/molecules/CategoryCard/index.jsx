// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const CategoryCard = (props) => {
	return (
		<div className={style.card}>
			<img src={props.image} alt={props.title} className={style.icon} />
			<p className={style.subtitle}>{props.description}</p>
			<Button type="link" arrow={true} href={props.btn.to} icon="arrow-right">
				<span>{props.btn.text}</span>
			</Button>
		</div>
	);
};

export default CategoryCard;
