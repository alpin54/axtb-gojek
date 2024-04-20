// -- style
import style from "./style.module.scss";

const HeroBanner = (props) => {
	return (
		<section className={style.banner}>
			<div className={style.box}>
				{props.image && (
					<div className={style.img}>
						<img src={props.image} alt={props.title} />
					</div>
				)}
				{props.embed && (
					<div className={style.video}>
						<iframe
							title="Gojek - The Flow"
							className={style.videoel}
							src={`https://www.youtube.com/embed/${props.embed}?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${props.embed}&amp;playsinline=1`}
							allowFullScreen=""
							data-gtm-yt-inspected-6="true"
							id="396715755"
						></iframe>
					</div>
				)}
			</div>
			<div className={style.text}>
				<div className="container">
					<h2 className={style.title}>{props.title}</h2>
					{props.description && (
						<p className={style.desc}>{props.description}</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
