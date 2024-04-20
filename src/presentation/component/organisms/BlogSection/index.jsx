// -- molecules
import BlogCard from "presentation/component/molecules/BlogCard";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atoms/SystemIcon";

const BlogSection = (props) => {
	return (
		<section className={style.blog}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
					<p className={style.desc}>{props.description}</p>
				</div>
				<div className={style.body}>
					{props.list.map((val, idx) => (
						<div className={style.card} key={`bc-${idx}`}>
							<BlogCard {...val} />
						</div>
					))}
				</div>
				<div className={style.foot}>
					<ul className={style.page}>
						<li className={style.item}>
							<SystemIcon name="arrow-left" />
						</li>
						<li className={style.item}>
							<SystemIcon name="arrow-right" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
