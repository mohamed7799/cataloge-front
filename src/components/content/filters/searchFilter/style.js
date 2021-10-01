import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    width: "100%",
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid black",
    },
    "& .MuiInputBase-root": {
      fontSize: "1.5rem",
    },
  },
});

export default useStyle;
