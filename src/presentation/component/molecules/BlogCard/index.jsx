// -- react
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const BlogCard = (props) => {
	return (
		<div className={style.card}>
			<div className={style.img}>
				<img src={props.image} alt={props.title} />
			</div>
			<Link href={props.to} className={style.link}></Link>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.date}</p>
			</div>
		</div>
	);
};

export default BlogCard;
