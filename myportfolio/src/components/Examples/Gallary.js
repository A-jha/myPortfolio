import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
const query = graphql`
  {
    allFile(filter: { ext: { ne: ".svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        console.log(image)
        return (
          <div key={index}>
            {" "}
            <h1>{image.name}</h1>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={image.name}
            />
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
  div {
    margin: 1rem;
  }
  img {
    width: 500px;
  }
`
export default Gallery
