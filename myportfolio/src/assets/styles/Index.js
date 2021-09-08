import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(2, 1, 2, 1),
  },
  hello: {
    textAlign: "center",
    color: "rgba(123, 12, 34, 0.8),",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1, 1, 1, 1),
  },
  btn: {
    margin: theme.spacing(0, 1, 0, 1),
  },
  profilePic: {
    alignSelf: "center",
    borderRadius: "2rem",
    borderBottomLeftRadius: "25%",
    // border: "2px solid blue",
    margin: theme.spacing(2),
    boxShadow: " inset 2px 2px 2px 2px black",
    borderBottom: "solid 5px blue",
  },
  card: {
    margin: "0.5rem",
    padding: "1.2rem",
    fontSize: "1.3rem",
  },
  bottomBar: {
    width: "10rem",
    height: "5px",
    background: "red",
    margin: "0 auto",
  },
  skillTitle: {
    letterSpacing: "5px",
    marginBottom: "0",
  },
}))

export default useStyles
