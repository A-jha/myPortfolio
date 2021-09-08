import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Created and Maintained By<span> Avinash Jha</span>{" "}
        </p>
        <p> &copy; {new Date().getFullYear()} Avinash Jha</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  min-height: 13vh;
  background: rgba(50, 50, 50, 0.3);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  span {
    font-weight: 900;
  }
`
export default Footer
