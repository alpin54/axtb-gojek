// -- style
import style from "./style.module.scss";

// -- molecules
import ProductCard from "presentation/component/molecules/ProductCard";

const ProductSection = (props) => {
	return (
		<section className={style.product}>
			<div className="container">
				<div className={style.inner}>
					{props.list.map((val, idx) => (
						<div className={style.card} key={`pc-${idx}`}>
							<ProductCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
