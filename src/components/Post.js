import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"

import {
  StyledImage,
  ImageWrapper,
  PostContainer,
  PostTitle,
  PostAuthor,
  PostNav,
  PostTitleNav,
  StyledNav,
  PreviousIcon,
  NextIcon,
} from "../style/post"

const Post = ({ data, pageContext }) => {
  const { html } = data.markdownRemark
  const { title, author, date, thumb } = data.markdownRemark.frontmatter

  const { next, previous } = pageContext

  return (
    <Layout>
      <>
        <PostContainer>
          <PostTitle>{title}</PostTitle>
          <PostAuthor>
            <h4>{author}</h4>
            <strong>-</strong>
            <h4>{date}</h4>
          </PostAuthor>
        </PostContainer>
        <ImageWrapper>
          <StyledImage fluid={thumb.childImageSharp.fluid} />
        </ImageWrapper>
        <PostContainer
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ textAlign: "left", padding: "5vh 0" }}
        />
        <PostNav>
          {next && (
            <StyledNav to={`/${next.frontmatter.slug}`}>
              <PreviousIcon />
              <PostTitleNav>{next.frontmatter.title}</PostTitleNav>
            </StyledNav>
          )}
          {previous && (
            <StyledNav to={`/${previous.frontmatter.slug}`}>
              <PostTitleNav>{previous.frontmatter.title}</PostTitleNav>
              <NextIcon />
            </StyledNav>
          )}
        </PostNav>
      </>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query PostQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date(formatString: "DD-MM-YYYY")
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
