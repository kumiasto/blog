import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-top: 2vh;
  padding-bottom: 6vh;
`

export const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: center;
`

export const StyledLogo = styled(props => <Img {...props} />)`
  min-height: 60%;
  width: 60%;

  @media screen and (min-width: 1280px) {
    min-height: 30%;
    width: 30%;
  }
`
export const Footer = styled.footer`
  text-align: center;
  margin-top: 10vh;
  padding: 2vh 0;
  font-weight: 700;
  color: #fff;
  background: #1488cc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2b32b2,
    #1488cc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2b32b2,
    #1488cc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
