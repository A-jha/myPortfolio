import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
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

const FetchData = () => {
  const {
    site: {
      Meta: { title, description },
    },
  } = useStaticQuery(query)
  return <p>{title}</p>
}

export default FetchData
