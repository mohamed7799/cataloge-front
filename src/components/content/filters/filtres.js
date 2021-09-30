import ColorsFilter from "./colorsFilter/colorsFilter";
import PriceFilter from "./priceFilter/priceFilter";
import RatingFilter from "./ratingFilter/ratingFilter";
import useStyle from "./style";

const Filters = () => {
  //variables
  const classes = useStyle();

  return (
    <section className={classes.root}>
      <PriceFilter></PriceFilter>
      <ColorsFilter></ColorsFilter>
      <RatingFilter></RatingFilter>
    </section>
  );
};

export default Filters;
