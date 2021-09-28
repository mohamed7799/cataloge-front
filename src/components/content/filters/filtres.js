import ColorsFilter from "./colorsFilter/colorsFilter";
import RatingFilter from "./ratingFilter/ratingFilter";
import useStyle from "./style";

const Filters = () => {
  //variables
  const classes = useStyle();

  return (
    <section className={classes.root}>
      <ColorsFilter></ColorsFilter>
      <RatingFilter></RatingFilter>
    </section>
  );
};

export default Filters;
