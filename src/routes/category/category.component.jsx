import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer, Title } from "./Category.styles.jsx";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectcategoriesIsLoading,
} from "../../store/categories/categories.select";
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectcategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={products.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
