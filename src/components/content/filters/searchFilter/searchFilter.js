import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";

const SearchFilter = () => {
  const { searchedProducts, setSearchedProducts } = useContext(FiltersContext);
  const classes = useStyle();
  return (
    <TextField
      value={searchedProducts}
      onChange={(e) => setSearchedProducts(e.target.value)}
      className={classes.root}
      placeholder="Search product"
    ></TextField>
  );
};

export default SearchFilter;
