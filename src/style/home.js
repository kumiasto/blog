import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const StyledThumb = styled(props => <Img {...props} />)`
  @media screen and (min-width: 1280px) {
    width: 40%;
  }
`

export const Blogs = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    width: 70%;
  }
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 0px rgba(219, 219, 219, 1);
  margin-top: 15vh;

  &:nth-child(1) {
    margin-top: 5vh;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

export const PostData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 1vh;

  @media screen and (min-width: 1280px) {
    width: 60%;
  }
`

export const PostShort = styled.p`
  padding: 1vh;
  padding-top: 2vh;

  @media screen and (min-width: 760px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 3vh 7vh;

    font-size: 1.1rem;
  }
`

export const PostTitle = styled.h2`
  margin: 0 1.7vh;
  margin-bottom: 1vh;
  text-align: center;
  color: #ada996;

  @media screen and (min-width: 760px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 5vh;
    font-size: 1.7rem;
  }
`

export const AuthorHeader = styled.p`
  font-size: 0.8rem;

  @media screen and (min-width: 760px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 0.7rem;
  }
`

export const ReadMore = styled(props => <Link {...props} />)`
  color: #ada996;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-decoration: none;
  padding: 2vh 0;

  @media screen and (min-width: 760px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    padding: 2vh;
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`
