import React from "react"
import TagList from "./TagList"
import ProjectList from "./ProjectList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulProject(sort: { fields: title, order: ASC }) {
      nodes {
        title
        description {
          description
        }
        image {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            width: 400
            height: 300
          )
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

const AllProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
  console.log(projects)
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

export default AllProjects
