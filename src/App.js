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
  const [colors, SetColors] = useState();
  const [priceRange, setPriceRange] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState();

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
    } catch (error) {
      if (error)
        alert("There was a problem fetching the data, Please reload the page");
    }
  };

  const filterByCategory = () => {
    setFilteredProducts(
      products.filter((product) => {
        return product.categoryId === selectedCategory;
      })
    );
  };

  const filterByRating = () => {
    if (selectedRating.length) {
      setFilteredProducts(
        products.filter((product) => {
          return (
            product.categoryId === selectedCategory &&
            selectedRating.includes(product.rating)
          );
        })
      );
    } else {
      filterByCategory();
    }
  };

  const filterByColors = () => {
    if (selectedColors.length) {
      setFilteredProducts(
        products.filter((product) => {
          return (
            selectedColors.includes(product.color) &&
            product.categoryId === selectedCategory
          );
        })
      );
    } else {
      filterByCategory();
    }
  };

  const filterByPrice = () => {
    setFilteredProducts(
      products.filter((product) => {
        return (
          parseFloat(product.price) <= selectedPriceRange[1] &&
          parseFloat(product.price) >= selectedPriceRange[0] &&
          product.categoryId === selectedCategory
        );
      })
    );
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
      filterByCategory();
      const tempProducts = products.filter((product) => {
        return product.categoryId === selectedCategory;
      });
      tempProducts.sort((a, b) => {
        return a.price - b.price;
      });

      setPriceRange([
        parseFloat(tempProducts[0].price),
        parseFloat(tempProducts[tempProducts.length - 1].price),
      ]);
      setSelectedPriceRange([
        parseFloat(tempProducts[0].price),
        parseFloat(tempProducts[tempProducts.length - 1].price),
      ]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (products && categories) {
      filterByRating();
    }
  }, [selectedRating]);

  useEffect(() => {
    if (products && categories) {
      filterByColors();
    }
  }, [selectedColors]);

  useEffect(() => {
    if (products && categories) {
      filterByPrice();
    }
  }, [selectedPriceRange]);

  return (
    <Container className={classes.root} component="main" maxWidth="lg">
      <Typography className={classes.title} variant="h3" component="h1">
        E-commerce store
      </Typography>
      <Typography
        style={{ textTransform: "capitalize" }}
        align="center"
        variant="h6"
      >
        Choose one of the categories below
      </Typography>
      {categories ? (
        <Categories
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        ></Categories>
      ) : (
        <CircularProgress className={classes.loadingIcon}></CircularProgress>
      )}
      {filteredProducts && categories && (
        <FiltersContext.Provider
          value={{
            selectedRating,
            setSelectedRating,
            colors,
            setSelectedColors,
            selectedColors,
            priceRange,
            selectedPriceRange,
            setSelectedPriceRange,
            products,
            selectedCategory,
          }}
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
