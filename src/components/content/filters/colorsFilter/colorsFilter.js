import {
  Paper,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useContext } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";
import { useState } from "react";

const ColorsFilter = () => {
  //variables
  const classes = useStyle();
  const [clearFlag, setClearFlag] = useState(false);
  const { colors, setSelectedColors, selectedColors } =
    useContext(FiltersContext);

  //functions

  const addColor = (e) => {
    if (e.target.checked) {
      setClearFlag(true);
      setSelectedColors([...selectedColors, e.target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => {
          return color !== e.target.value;
        })
      );
    }
  };

  const clear = () => {
    setSelectedColors([]);
    setClearFlag(false);
  };

  return (
    <section>
      <Typography gutterBottom align="center" variant="h6">
        Colors
      </Typography>
      {clearFlag && (
        <Button
          onClick={clear}
          variant="text"
          className={classes.button}
          endIcon={<CloseIcon />}
        >
          Clear
        </Button>
      )}

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
                    checked={selectedColors.includes(color)}
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
