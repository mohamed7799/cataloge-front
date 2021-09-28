import {
  Paper,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";

const ColorsFilter = () => {
  //variables
  const classes = useStyle();
  const { colors, setSelectedColors, selectedColors } =
    useContext(FiltersContext);

  //functions

  const addColor = (e) => {
    if (e.target.checked) {
      setSelectedColors([...selectedColors, e.target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => {
          return color !== e.target.value;
        })
      );
    }
  };

  return (
    <section>
      <Typography gutterBottom align="center" variant="h6">
        Colors
      </Typography>
      <Paper className={classes.root} variant="outlined">
        <FormControl component="fieldset">
          <FormGroup>
            {[...colors].map((color) => (
              <FormControlLabel
                key={color}
                control={
                  <Checkbox
                    onClick={(e) => addColor(e)}
                    color="primary"
                    name={color}
                    value={color}
                  />
                }
                label={color}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </section>
  );
};

export default ColorsFilter;
