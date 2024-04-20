// -- style
import style from "./style.module.scss";

// -- molecules
import JoinCard from "presentation/component/molecules/JoinCard";

const Join = (props) => {
	const { title, list } = props;
	return (
		<section className={style.join}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{title}</h2>
				</div>
				<div className={style.body}>
					{list.map((val, idx) => (
						<div className={style.item} key={`jc-${idx}`}>
							<JoinCard {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Join;
