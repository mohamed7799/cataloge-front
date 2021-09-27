import Product from "./product/product";
import useStyle from "./style";
const Products = ({ products }) => {
  const classes = useStyle();
  return (
    <ul className={classes.root}>
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </ul>
  );
};

export default Products;
