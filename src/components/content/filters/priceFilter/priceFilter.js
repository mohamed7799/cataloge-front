import { Paper, Slider, Typography } from "@material-ui/core";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";

const PriceFilter = () => {
  const classes = useStyle();
  const { priceRange, selectedPriceRange, setSelectedPriceRange } =
    useContext(FiltersContext);
  const handleChange = (_, newValue) => {
    setSelectedPriceRange(newValue);
  };
  return (
    <section>
      <Typography gutterBottom align="center" variant="h6">
        Price
      </Typography>
      <Paper variant="outlined" className={classes.root}>
        <Slider
          step={5}
          min={priceRange[0]}
          max={priceRange[1]}
          className={classes.slider}
          value={selectedPriceRange}
          onChange={handleChange}
          valueLabelDisplay="on"
        />
      </Paper>
    </section>
  );
};

export default PriceFilter;
