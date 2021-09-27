import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    textTransform: "uppercase",
    backgroundPosition: "center",
    backgroundSize: "100%",
    position: "relative",
    "&:hover": {
      backgroundSize: "150%",
    },
  },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    inset: "0",
    background: "rgba(0,0,0,.3)",
  },
});

export default useStyle;
