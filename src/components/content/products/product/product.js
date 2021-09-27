import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyle from "./style";

const Product = ({ product }) => {
  const classes = useStyle();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <li className={classes.root}>
      <img src={`${product.image}`} alt="" />
      <Typography variant="h6">
        {product.name + "--" + product.categoryId}
      </Typography>
      <Rating name="rating" value={product.rating} readOnly />
      <Typography variant="h6">{formatter.format(product.price)}</Typography>
    </li>
  );
};

export default Product;
