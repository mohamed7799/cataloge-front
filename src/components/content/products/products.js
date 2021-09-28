import Product from "./product/product";
import useStyle from "./style";
const Products = ({ products, categories }) => {
  //variables
  const classes = useStyle();

  return (
    <ul className={classes.root}>
      {products.map((product) => (
        <Product
          category={categories[product.categoryId - 1].name}
          key={product.id}
          product={product}
        ></Product>
      ))}
    </ul>
  );
};

export default Products;
