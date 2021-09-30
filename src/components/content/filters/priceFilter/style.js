import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    padding: "2rem 1rem",
  },
  slider: {
    display: "block",
    width: "90%",
    margin: "1.5rem auto",
    color: "black",
    "& .MuiSlider-track,& .MuiSlider-rail": {
      height: "5px",
    },
    "& .MuiSlider-thumb": {
      marginTop: "-4px",
    },
  },
});

export default useStyle;
