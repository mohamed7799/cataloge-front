import {
  Paper,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useContext, useState } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";

const RatingFilter = () => {
  //variables
  const classes = useStyle();
  const { selectedRating, setSelectedRating, products, selectedCategory } =
    useContext(FiltersContext);
  const [ratings] = useState([5, 4, 3, 2, 1]);

  //functions
  const addRating = (e) => {
    if (e.target.checked) {
      setSelectedRating([...selectedRating, parseFloat(e.target.value)]);
    } else {
      setSelectedRating(
        selectedRating.filter((rate) => {
          return rate !== parseFloat(e.target.value);
        })
      );
    }
  };

  return (
    <section>
      <Typography gutterBottom align="center" variant="h6">
        Ratings
      </Typography>

      <Paper variant="outlined" className={classes.root}>
        <FormControl component="fieldset">
          <FormGroup>
            {ratings.map((item) => (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox
                    onClick={(e) => addRating(e)}
                    color="primary"
                    name={`${item}-rating`}
                    value={item}
                  />
                }
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                    key={item}
                  >
                    <Rating name="rating" value={item} readOnly />
                    <Typography variant="subtitle2">
                      {`(${
                        products.filter((pro) => {
                          return (
                            pro.rating === item &&
                            pro.categoryId === selectedCategory
                          );
                        }).length
                      })`}
                    </Typography>
                  </div>
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </section>
  );
};

export default RatingFilter;
