import Category from "./category/category";
import useStyle from "./styles";

const Categories = ({ categories, setSelectedCategory }) => {
  const classes = useStyle();
  return (
    <ul className={classes.root}>
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
