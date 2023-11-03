import { createContext, useState, useEffect } from "react";
//import PRODUCTS from "../shop-data.json";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  // const [products, setProducts] = useState(PRODUCTS);
  const [categoriesMap, setCategoriesMap] = useState({});
  //run it during initial setup
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
