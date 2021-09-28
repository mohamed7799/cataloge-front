import { Typography } from "@material-ui/core";

import useStyle from "./style";

const Category = ({ category, setSelectedCategory }) => {
  const classes = useStyle();

  return (
    <li
      onClick={() => setSelectedCategory(category.id)}
      style={{
        backgroundImage: `url(https://source.unsplash.com/600x600/?${category.name})`,
      }}
      className={classes.root}
    >
      <div className={classes.overlay}>
        <Typography style={{ zIndex: "1", color: "white" }} variant="h6">
          {category.name}
        </Typography>
      </div>
    </li>
  );
};

export default Category;
