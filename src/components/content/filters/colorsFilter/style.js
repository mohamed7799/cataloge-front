import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    padding: "1rem",
    height: "300px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(202, 202, 202,.5)",
      borderRadius: "30px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "black",
      borderRadius: "30px",
    },
  },
  button: {
    margin: ".5rem",
  },
});

export default useStyle;
