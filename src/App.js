import { Typography, Container, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Categories from "./components/categories/categories";
import Content from "./components/content/content";
import useStyle from "./style";

//context
export const FiltersContext = createContext();

const App = () => {
  //variable
  const classes = useStyle();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [resetFilters, setResetFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [rating, setRating] = useState();
  const [colors, SetColors] = useState();
  const [selectedColors, setSelectedColors] = useState([]);

  //functions
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("http://test-api.edfa3ly.io/category");
      setCategories(data);
    } catch (error) {
      if (error)
        alert("There was a problem fetching the data, Please reload the page");
    }
  };

  const fetchproducts = async () => {
    try {
      const { data } = await axios.get("http://test-api.edfa3ly.io/product");
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      if (error)
        alert("There was a problem fetching the data, Please reload the page");
    }
  };

  const filterByCategory = () => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => {
          return product.categoryId === selectedCategory;
        })
      );
    }
  };

  const filterByRating = () => {
    if (rating) {
      setFilteredProducts(
        products.filter((product) => {
          return product.rating === rating;
        })
      );
    }
  };

  const filterByColors = () => {
    if (selectedColors.length) {
      setFilteredProducts(
        products.filter((product) => {
          return selectedColors.includes(product.color);
        })
      );
    } else {
      setFilteredProducts(products);
      setResetFilters(false);
    }
  };

  //hooks
  useEffect(() => {
    fetchCategories();
    fetchproducts();
  }, []);

  // a useEffect to get a set of colors from the products
  useEffect(() => {
    if (products) {
      const uniqueColors = new Set(
        products.map((product) => {
          return product.color;
        })
      );
      SetColors(uniqueColors);
    }
  }, [products]);

  useEffect(() => {
    if (products && categories) {
      setResetFilters(true);
      filterByCategory();
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (products && categories) {
      setResetFilters(true);
      filterByRating();
    }
  }, [rating]);

  useEffect(() => {
    if (products && categories) {
      setResetFilters(true);
      filterByColors();
    }
  }, [selectedColors]);

  useEffect(() => {
    if (products && categories && !resetFilters) {
      setFilteredProducts(products);
    }
  }, [resetFilters]);

  return (
    <Container className={classes.root} component="main" maxWidth="lg">
      <Typography gutterBottom align="center" variant="h3" component="h1">
        E-commerce store
      </Typography>
      <Typography align="center" variant="h6">
        Choose one of the categories below
      </Typography>
      {categories ? (
        <Categories
          setResetFilters={setResetFilters}
          resetFilters={resetFilters}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        ></Categories>
      ) : (
        <CircularProgress className={classes.loadingIcon}></CircularProgress>
      )}
      {filteredProducts && categories && (
        <FiltersContext.Provider
          value={{ setRating, colors, setSelectedColors, selectedColors }}
        >
          <Content
            categories={categories}
            products={filteredProducts}
          ></Content>
        </FiltersContext.Provider>
      )}
    </Container>
  );
};

export default App;
