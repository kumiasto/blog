import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import GlobalStyle from "../style/globalStyle"

import { Header, StyledLink, StyledLogo, Footer } from "../style/layout"

const Layout = ({ children }) => {
  const logo = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "zachlorowani-przezroczyste.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header>
        <StyledLink to="/">
          <StyledLogo fluid={logo.file.childImageSharp.fluid} />
        </StyledLink>
      </Header>
      <main>{children}</main>
      <Footer> © {new Date().getFullYear()} zachlorowani.pl</Footer>
    </>
  )
}

export default Layout
