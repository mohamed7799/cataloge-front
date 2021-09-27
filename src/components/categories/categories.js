import { Typography } from "@material-ui/core";
import Category from "./category/category";
import useStyle from "./styles";

const Categories = ({ categories, setSelectedCategory }) => {
  const classes = useStyle();
  return (
    <ul className={classes.root}>
      <li onClick={() => setSelectedCategory("All")} className={classes.all}>
        <Typography variant="h6">All Products</Typography>
      </li>
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