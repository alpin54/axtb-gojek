// -- asset image
import helpBg from "core/assets/img/bg/help-bg.png";

// -- style
import style from "./style.module.scss";

const HelpBanner = (props) => {
	return (
		<section className={style.banner}>
			<div className={style.inner}>
				<div className={style.img}>
					<img src={helpBg} alt={props.title} />
				</div>
				<div className={style.text}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.img}>
					<img src={helpBg} alt={props.title} />
				</div>
			</div>
		</section>
	);
};

export default HelpBanner;
