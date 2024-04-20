// -- react
import { Link } from "react-router-dom";

// -- asset image
import gojekLogo from "core/assets/img/logo/logo-gojek.svg";

// -- style
import style from "./style.module.scss";

const Header = ({ activeMenu }) => {
	const menuList = [
		{
			to: "/",
			active: "home",
			name: "Home",
		},
		{
			to: "/partner",
			active: "partner",
			name: "Partner with us",
		},
		{
			to: "/careers",
			active: "careers",
			name: "Careers",
		},
		{
			to: "/company",
			active: "company",
			name: "Company",
		},
		{
			to: "/products",
			active: "products",
			name: "Products",
		},
		{
			to: "/blog",
			active: "blog",
			name: "Blog",
		},
		{
			to: "/help",
			active: "help",
			name: "Help",
		},
	];

	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.inner}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to="/" className={style.logoLink}>
							<img src={gojekLogo} alt="Gojek Logo" className={style.logoImg} />
						</Link>
					</div>
					{/* Menu */}
					<ul className={style.menu}>
						{menuList.map((val, idx) => (
							<li className={style.item} key={`hm-${idx}`}>
								<Link
									to={val.to}
									className={
										activeMenu === val.active
											? `${style.link} ${style.active}`
											: style.link
									}
								>
									{val.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
