import React from "react"
import { Grid, Typography, Button, IconButton } from "@material-ui/core"
import useStyles from "./style"
import featuredProjects from "../../data/featuredProjects.json"
import { StaticImage } from "gatsby-plugin-image"
import SourceCode from "@material-ui/icons/CodeRounded"
import ViewCode from "@material-ui/icons/WebAsset"
import Liked from "@material-ui/icons/PlusOne"
const ProjectsSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            Featured Projects
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.bottomBar}></div>
        </Grid>
        {featuredProjects["projects"].map((project, index) => {
          return (
            <Grid
              item
              xs={12}
              md={3}
              xl={2}
              className={classes.projectCard}
              key={index}
            >
              <Typography variant="h6" align="center" className={classes.title}>
                {project["title"]}
              </Typography>
              <StaticImage
                src="../assets/images/2.jpg"
                alt={project["title"]}
                placeholder="tracedSVG"
                layout="constrained"
                objectFit="contain"
                className={classes.projectImg}
              />
              <div className={classes.projectBtn}>
                <IconButton>
                  <Liked color="secondary" />
                </IconButton>
                <IconButton>
                  <ViewCode fontSize="large" />
                </IconButton>
                <IconButton>
                  <SourceCode />
                </IconButton>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} className={classes.bottomButton}>
          <Button variant="outlined" fullWidth className={classes.button}>
            View All
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectsSection
