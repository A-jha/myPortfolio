import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  projectCard: {
    margin: theme.spacing(3, 3, 3, 3),
    background: "#eee",
    boxShadow: "2px 2px 2px rgba(123,12,125,.6)",
    padding: "0",
    borderRadius: "1rem",
  },
  projectBtn: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2, 1, 1, 1),
  },
  projectImg: {
    boxShadow: "inset 2px 2px black",
  },
  projectContainer: {
    margin: theme.spacing(3),
  },
  bottomButton: {
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  button: {
    fontWeight: "700",
    margin: theme.spacing(2, 5, 5, 5),
  },
  bottomBar: {
    width: "10rem",
    height: "5px",
    background: "red",
    margin: "0 auto",
  },
}))
