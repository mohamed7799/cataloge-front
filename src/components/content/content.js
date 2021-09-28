import Filters from "./filters/filtres";
import Products from "./products/products";
import useStyle from "./style";

const Content = ({ products, categories }) => {
  //variables
  const classes = useStyle();

  return (
    <section className={classes.root}>
      <Filters></Filters>
      <Products categories={categories} products={products}></Products>{" "}
    </section>
  );
};

export default Content;
