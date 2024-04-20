// -- style
import style from "./style.module.scss";

// -- molecules
import FeatureCard from "presentation/component/molecules/FeatureCard";

const ProductCategory = (props) => {
	let classNameStyle = style.product;
	if (props.color === "red") {
		classNameStyle += " " + style.productRed;
	} else if (props.color === "purple") {
		classNameStyle += " " + style.productPurple;
	}

	return (
		<section className={classNameStyle}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
					<p className={style.desc}>{props.description}</p>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.card} key={`pcc-${idx}`}>
							<FeatureCard {...val} bg="white" button="arrow" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductCategory;
