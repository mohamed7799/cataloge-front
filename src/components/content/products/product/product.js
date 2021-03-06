import { Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyle from "./style";

const Product = ({ product, category }) => {
  //variables
  const classes = useStyle();

  //functions
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Paper variant="outlined" className={classes.root} component="li">
      <img src={`${product.image}`} alt="" />
      <Typography variant="h6">{product.name}</Typography>
      <Rating name="rating" value={product.rating} readOnly />
      <Typography variant="subtitle1">
        {formatter.format(product.price)}
      </Typography>
      <div className={classes.productDetails}>
        <Typography
          color="textSecondary"
          variant="subtitle2"
        >{`Color: ${product.color}`}</Typography>
        <Typography
          color="textSecondary"
          variant="subtitle2"
        >{`Category: ${category}`}</Typography>
      </div>
    </Paper>
  );
};

export default Product;
