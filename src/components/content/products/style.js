import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    flex: "2",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gridAutoRows: "max-content",
    gap: "1.5rem",
    height: "1000px",
    overflowY: "scroll",
    minWidth: "300px",
    padding: "0rem 1rem",
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
});

export default useStyle;
