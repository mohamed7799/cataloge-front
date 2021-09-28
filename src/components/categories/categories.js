import { Typography } from "@material-ui/core";
import Category from "./category/category";
import useStyle from "./styles";

const Categories = ({
  categories,
  setSelectedCategory,
  resetFilters,
  setResetFilters,
}) => {
  const classes = useStyle();
  return (
    <ul className={classes.root}>
      {resetFilters && (
        <li onClick={() => setResetFilters(false)} className={classes.all}>
          <Typography variant="h6">All Products</Typography>
        </li>
      )}

      {categories.map((category) => (
        <Category
          key={category.id}
          setSelectedCategory={setSelectedCategory}
          category={category}
        ></Category>
      ))}
    </ul>
  );
};

export default Categories;
