import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
    gap: "2rem",
    justifyContent: "space-evenly",
    gridAutoRows: "100px",
    margin: "4rem 0rem",
    "& > *": {
      cursor: "pointer",
      boxShadow: "0px 0px 8px 3px #7d7d7d63",
      transition: "all 0.5s",
    },
  },
  all: {
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
});

export default useStyle;
