import { useState, useEffect } from "react";
import formatRupiah from "core/util/formatRupiah";

const WidgetProduct = () => {
	const price = 185000;
	const [productNumber, setProductNumber] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleIncremenet = () => {
		setProductNumber((preval) => preval + 1);
	};

	const handleDecremenet = () => {
		if (productNumber > 1) {
			setProductNumber((preval) => preval - 1);
		}
	};

	useEffect(() => {
		setTotalPrice(productNumber * price);
	}, [productNumber]);

	return (
		<div className="widget-product">
			<div className="container">
				<div className="widget-product__box">
					<div className="widget-product__control">
						<button
							className="widget-product__btn"
							onClick={handleDecremenet}
							disabled={productNumber === 1}
						>
							-
						</button>
						<p className="widget-product__number">{productNumber}</p>
						<button className="widget-product__btn" onClick={handleIncremenet}>
							+
						</button>
					</div>
					<div className="widget-product__total">
						<p className="widget-product__total__txt">Subtotal</p>
						<p className="widget-product__total__nominal">
							{formatRupiah(totalPrice)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WidgetProduct;
