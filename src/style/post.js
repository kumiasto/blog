import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { MdArrowBack, MdArrowForward } from "react-icons/md"

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
export const PostAuthor = styled.div`
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
export const PostNav = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 5vh;
  font-size: 0.8rem;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    width: 90%;
  }
  @media screen and (min-width: 960px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1280px) {
    width: 70%;
    font-size: 1.1rem;
  }
`

export const PostTitleNav = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    width: auto;
  }
`

export const StyledNav = styled(props => <Link {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  width: 50%;
  padding: 1vh;

  @media screen and (min-width: 1280px) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const PreviousIcon = styled(props => <MdArrowBack {...props} />)`
  color: #2b32b2;
  width: 15%;
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`

export const NextIcon = styled(props => <MdArrowForward {...props} />)`
  color: #2b32b2;
  width: 15%;
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`
