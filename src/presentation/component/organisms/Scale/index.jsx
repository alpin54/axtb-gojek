// -- atoms
import Button from "presentation/component/atoms/Button";

// -- molecules
import ScaleCard from "presentation/component/molecules/ScaleCard";

// -- style
import style from "./style.module.scss";

const Scale = (props) => {
	return (
		<section className={style.scale}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
					<div className={style.btn}>
						<Button type="link" href={props.btn.to}>
							{props.btn.text}
						</Button>
					</div>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.item} key={`sc-${idx}`}>
							<ScaleCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Scale;
