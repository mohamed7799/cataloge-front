import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "1.5rem",
  },
});

export default useStyle;
