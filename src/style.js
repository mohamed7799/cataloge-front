import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    minHeight: "100vh",
    padding: "1rem",
  },
  title: {
    border: "2px solid",
    width: "fit-content",
    margin: "1rem auto",
    padding: "1rem",
  },
  loadingIcon: {
    display: "block",
    margin: "2rem auto",
  },
});

export default useStyle;
