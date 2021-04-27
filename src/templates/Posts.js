import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Blogs,
  PostContainer,
  PostData,
  PostShort,
  StyledThumb,
  PostTitle,
  AuthorHeader,
  ReadMore,
} from "../style/home.js"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query BlogsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
            date(formatString: "DD-MM-YYYY")
            title
            author
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          excerpt(format: PLAIN, pruneLength: 500)
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.nodes

  return (
    <Blogs>
      {blogs.map(blog => {
        return (
          <PostContainer key={blog.id}>
            <StyledThumb fluid={blog.frontmatter.thumb.childImageSharp.fluid} />
            <PostData>
              <PostTitle>{blog.frontmatter.title}</PostTitle>
              <AuthorHeader>{blog.frontmatter.author}</AuthorHeader>
              <AuthorHeader>{blog.frontmatter.date}</AuthorHeader>
              <PostShort>{blog.excerpt}</PostShort>
              <ReadMore to={blog.frontmatter.slug}>Czytaj więcej...</ReadMore>
            </PostData>
          </PostContainer>
        )
      })}
    </Blogs>
  )
}

export default Posts
