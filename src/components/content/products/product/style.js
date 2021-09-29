import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    textAlign: "center",
    padding: "1rem",
    "& img": {
      display: "block",
      width: "70%",
      margin: "1rem auto",
    },
  },
  productDetails: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export default useStyle;
