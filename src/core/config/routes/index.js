// -- pages
import Home from "presentation/container/pages/Home";
import Partner from "presentation/container/pages/Partner";
import Careers from "presentation/container/pages/Careers";
import Company from "presentation/container/pages/Company";
import Products from "presentation/container/pages/Products";
import Blog from "presentation/container/pages/Blog";
import Help from "presentation/container/pages/Help";
import Login from "presentation/container/pages/Login";
import Register from "presentation/container/pages/Register";
import NotFound from "presentation/container/pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/partner",
		element: <Partner />,
		errorElement: <NotFound />,
	},
	{
		path: "/careers",
		element: <Careers />,
		errorElement: <NotFound />,
	},
	{
		path: "/company",
		element: <Company />,
		errorElement: <NotFound />,
	},
	{
		path: "/products",
		element: <Products />,
		errorElement: <NotFound />,
	},
	{
		path: "/blog",
		element: <Blog />,
		errorElement: <NotFound />,
	},
	{
		path: "/help",
		element: <Help />,
		errorElement: <NotFound />,
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <NotFound />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <NotFound />,
	},
];

export default routes;
