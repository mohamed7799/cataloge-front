import { Typography, Container, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Categories from "./components/categories/categories";
import Content from "./components/content/content";
import useStyle from "./style";

const App = () => {
  //variable
  const classes = useStyle();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => {
          return product.categoryId === selectedCategory;
        })
      );
    }
  };

  //hooks
  useEffect(() => {
    fetchCategories();
    fetchproducts();
  }, []);

  useEffect(() => {
    if (products && categories) {
      filterByCategory();
    }
  }, [selectedCategory]);

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
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        ></Categories>
      ) : (
        <CircularProgress className={classes.loadingIcon}></CircularProgress>
      )}
      {filteredProducts && <Content products={filteredProducts}></Content>}
    </Container>
  );
};

export default App;
