import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    padding: "1rem",
    flex: "1",
    alignSelf: "baseline",
    minWidth: "350px",
    "& > *": {
      marginBottom: "2rem",
    },
  },
});

export default useStyle;
