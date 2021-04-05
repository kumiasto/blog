import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"
import {
  StyledImage,
  ImageWrapper,
  PostContainer,
  PostTitle,
  PostAuthor,
} from "../style/post"

const Post = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, author, date, thumb } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div>
        <PostContainer>
          <PostTitle>{title}</PostTitle>
          <PostAuthor>
            <h4>{author}</h4>
            <strong>-</strong>
            <h4>{date}</h4>
          </PostAuthor>
        </PostContainer>

        <ImageWrapper>
          <StyledImage
            fluid={thumb.childImageSharp.fluid}
            style={{ objectFit: "contain" }}
          />
        </ImageWrapper>
        <PostContainer
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ textAlign: "left", padding: "5vh 0" }}
        />
      </div>
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
