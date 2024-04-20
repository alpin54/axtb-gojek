// -- react
import { Link } from "react-router-dom";

// -- asset image
import gojekLogo from "core/assets/img/logo/logo-gojek.svg";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atoms/SystemIcon";

const Footer = () => {
	const footer = {
		copyright:
			"© 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.",
		menu: [
			{
				title: "Company",
				list: [
					{
						to: "/about",
						name: "About",
					},
					{
						to: "/products",
						name: "Products",
					},
					{
						to: "/blog",
						name: "Blog",
					},
				],
			},
			{
				title: "Join with us",
				list: [
					{
						to: "/partner",
						name: "Drivers Partner",
					},
					{
						to: "/partner",
						name: "Merchant Partner",
					},
				],
			},
			{
				title: "Careers",
				list: [
					{
						to: "/careers",
						name: "Student",
					},
					{
						to: "/careers",
						name: "Profesional",
					},
				],
			},
			{
				title: "Get in touch",
				list: [
					{
						to: "/help",
						name: "Help Center",
					},
					{
						to: "/help",
						name: "Our Location",
					},
				],
			},
		],
		sosmed: [
			{
				title: "Connect with us",
				list: [
					{
						to: "facebook.com",
						icon: "facebook",
					},
					{
						to: "twitter.com",
						icon: "twitter",
					},
					{
						to: "instagram.com",
						icon: "instagram",
					},
					{
						to: "youtube.com",
						icon: "youtube",
					},
				],
			},
			{
				title: "Download the app",
				list: [
					{
						to: "playstore.com",
						icon: "playstore",
					},
					{
						to: "apple.com",
						icon: "apple",
					},
				],
			},
		],
	};

	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.inner}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to="/" className={style.logoLink}>
							<img
								src={gojekLogo}
								alt="Gojek Logo"
								className={style.logoImage}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{footer.menu.map((val, idx) => (
							<div className={style.column} key={`fc-${idx}`}>
								<h4 className={style.title}>{val.title}</h4>
								<ul className={style.list}>
									{val.list.map((item, itx) => (
										<li className={style.item} key={`fm-${itx}`}>
											<Link to={item.to} className={style.link}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
						<div className={style.column}>
							{footer.sosmed.map((val, idx) => (
								<div className={style.sosmed} key={`fs-${idx}`}>
									<h4 className={style.title}>{val.title}</h4>
									<ul className={style.sosmedList}>
										{val.list.map((item, its) => (
											<li
												className={`${style.sosmedItem} ${item.icon}`}
												key={`sl-${its}`}
											>
												<a href={item.to} className={style.sosmedLink}>
													<SystemIcon name={item.icon} />
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className={style.copyright}>
						<p className={style.copyrightText}>{footer.copyright}</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
