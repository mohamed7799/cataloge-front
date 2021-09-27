import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    textAlign: "center",
    "& img": {
      display: "block",
      width: "70%",
      margin: "1rem auto",
    },
  },
});

export default useStyle;
