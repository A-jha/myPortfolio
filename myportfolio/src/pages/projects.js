import React from "react"
import Layout from "../components/layout/Layout"
import AllProjects from "../components/utils/AllProjects"
import { Grid, Typography, makeStyles } from "@material-ui/core"
const Projects = () => {
  const classes = useStyles()
  return (
    <Layout title={"Projects"}>
      <div className={classes.main}>
        <Grid
          container
          spacing={3}
          className={classes.header}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              All Projects
            </Typography>
            <div className={classes.headBar}></div>
          </Grid>
        </Grid>
        <AllProjects />
      </div>
    </Layout>
  )
}

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "81vh",
    marginTop: "2rem",
  },
  headBar: {
    margin: "1rem auto",
    width: "8rem",
    height: "10px",
    background: "red",
  },
}))

export default Projects
