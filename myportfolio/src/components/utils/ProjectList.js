import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, Typography, makeStyles, IconButton } from "@material-ui/core"
import SourceCode from "@material-ui/icons/CodeRounded"
import ViewCode from "@material-ui/icons/WebAsset"
import Liked from "@material-ui/icons/PlusOne"
const ProjectList = ({ projects = [] }) => {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => {
          const { title, description, image } = project
          const pathToImage = getImage(image)
          return (
            <Grid
              item
              xs={8}
              md={3}
              xl={2}
              className={classes.projectCard}
              key={index}
            >
              <Typography variant="h6" align="center" className={classes.title}>
                {title}
              </Typography>
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className={classes.projectImg}
              />
              <div className={classes.projectBtn}>
                <IconButton>
                  <Liked color="secondary" />
                </IconButton>
                <Link to={`${project.content.link}`} target="_blank">
                  <ViewCode fontSize="large" htmlColor="blue" />
                </Link>
                <IconButton>
                  <SourceCode />
                </IconButton>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
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
    width: "100%",
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
export default ProjectList
