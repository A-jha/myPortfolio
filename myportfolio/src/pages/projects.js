import React from "react"
import Layout from "../components/layout/Layout"
import useStyles from "../assets/styles/project"
import { Container, Typography, Grid, Button } from "@material-ui/core"
import { graphql, Page } from "gatsby"
const Projects = ({ data }) => {
  const classes = useStyles()
  const {
    site: {
      Meta: { description, title },
    },
  } = data
  return (
    <Layout title={"Projects"}>
      <div className={classes.main}>
        <h1>{description}</h1>
        <h2>{title}</h2>
      </div>
    </Layout>
  )
}

const Project = () => {
  return
}

export const data = graphql`
  {
    site {
      Meta: siteMetadata {
        description
        title
        complexData {
          name
          age
        }
      }
    }
  }
`
export default Projects
