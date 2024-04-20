// -- style
import style from "./style.module.scss";

const ProductCard = (props) => {
	let classNameStyle = style.card;
	if (props.color === "green") {
		classNameStyle += " " + style.cardGreen;
	} else if (props.color === "blue") {
		classNameStyle += " " + style.cardBlue;
	} else if (props.color === "red") {
		classNameStyle += " " + style.cardRed;
	} else if (props.color === "purple") {
		classNameStyle += " " + style.cardPurple;
	}
	return (
		<>
			<div className={classNameStyle}>
				<ul className={style.list}>
					{props.list.map((item, itx) => (
						<li className={style.item} key={`pi-${itx}`}>
							<img src={item.image} alt={item.alt} className={style.icon} />
						</li>
					))}
				</ul>
				<div className={style.text}>
					<h4 className={style.title}>{props.title}</h4>
					<p className={style.desc}>{props.description}</p>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
