// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import BlogSection from "presentation/component/organisms/BlogSection";

// -- dummy data
import blogData from "./blogData";

const Blog = () => {
	return (
		<Default activeMenu="blog">
			<BlogSection {...blogData} />
		</Default>
	);
};

export default Blog;
