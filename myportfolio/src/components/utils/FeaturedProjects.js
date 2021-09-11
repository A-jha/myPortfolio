import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectList from "./ProjectList"
import { Grid, Typography, makeStyles } from "@material-ui/core"
const query = graphql`
  {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        description {
          description
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 300)
        }
        featured
        content {
          tags
          link
        }
      }
    }
  }
`

const FeaturedProjects = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
  return (
    <div>
      <Grid
        container
        spacing={3}
        className={classes.header}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            className={classes.featuredHeader}
          >
            Featured projects
          </Typography>
          <div className={classes.headBar}></div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.bottomBar}></div>
        </Grid>
      </Grid>
      <ProjectList projects={projects} />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  featuredHeader: {
    marginTop: "2rem",
  },
}))

export default FeaturedProjects
