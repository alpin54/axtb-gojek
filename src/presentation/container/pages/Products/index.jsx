// -- tempaltes
import Default from "presentation/component/templates/Default";

// -- components
import HeroBanner from "presentation/component/organisms/HeroBanner";
import ProductSection from "presentation/component/organisms/ProductSection";
import Loyalty from "presentation/component/organisms/Loyalty";
import ProductCategory from "presentation/component/organisms/ProductCategory";

// -- dummy data
import bannerData from "./bannerData";
import productData from "./productData";
import loyalityData from "./loyalityData";
import productCategoryData from "./productCategoryData";

const Products = () => {
	return (
		<Default activeMenu="products">
			<HeroBanner {...bannerData} />
			<ProductSection {...productData} />
			<Loyalty {...loyalityData} />
			<ProductCategory {...productCategoryData.food} />
			<ProductCategory {...productCategoryData.business} />
		</Default>
	);
};

export default Products;
