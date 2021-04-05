import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

export const ImageWrapper = styled.div`
  width: 100%;
  height: 70vh;
`

export const StyledImage = styled(props => <Img {...props} />)`
  height: 100%;
  background-position: contain !important;
`

export const PostContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1280px) {
    margin-top: 5vh;
    width: 70%;
  }
`

export const PostTitle = styled.h1`
  font-size: 1.7rem;
  color: #ada996;

  @media screen and (min-width: 760px) {
    font-size: 2.6rem;
  }
  @media screen and (min-width: 960px) {
    font-size: 2.9rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 2.7rem;
    text-align: center;
    margin-top: 0;
  }
`
export const PostAuthor = styled.p`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
  padding: 3vh 0;

  @media screen and (min-width: 760px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 960px) {
    width: 40%;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1280px) {
    width: 25%;
    margin: 0 auto;
    padding: 3vh 0;
    font-size: 1.1rem;
  }
`
