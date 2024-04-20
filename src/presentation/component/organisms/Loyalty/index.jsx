// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const Loyalty = (props) => {
	return (
		<section className={style.loyalty}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img src={props.image} alt={props.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{props.title}</h2>
						{props.description !== undefined ? (
							<p className={style.desc}>{props.description}</p>
						) : null}
						<Button to="loyality">
							<span data-title={props.btnText}>{props.btnText}</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Loyalty;
