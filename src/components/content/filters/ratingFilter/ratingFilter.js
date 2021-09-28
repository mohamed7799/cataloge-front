import { Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useContext, useState } from "react";
import { FiltersContext } from "../../../../App";
import useStyle from "./style";

const RatingFilter = () => {
  //variables
  const classes = useStyle();
  const { setRating } = useContext(FiltersContext);
  const [ratings] = useState([5, 4, 3, 2, 1]);

  return (
    <section>
      <Typography gutterBottom align="center" variant="h6">
        Ratings
      </Typography>
      <Paper variant="outlined" className={classes.root}>
        {ratings.map((item) => (
          <div key={item} onClick={() => setRating(item)}>
            <Rating name="rating" value={item} readOnly />
          </div>
        ))}
      </Paper>
    </section>
  );
};

export default RatingFilter;
