import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    padding: "1rem",
    "& > *": {
      cursor: "pointer",
      display: "flex",
      marginBottom: "1rem",
    },
  },
});

export default useStyle;
