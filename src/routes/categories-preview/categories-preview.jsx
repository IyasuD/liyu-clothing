import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
//import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectcategoriesIsLoading,
} from "../../store/categories/categories.select";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectcategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
          // return (
          //   <Fragment key={title}>
          //     <h2>{title}</h2>
          //     <div className="products-container">
          //       {categoriesMap[title].map((product) => (
          //         <ProductCard key={product.id} product={product} />
          //       ))}
          //     </div>
          //   </Fragment>
          // );
        })
      )}
    </>
  );
};
export default CategoriesPreview;
