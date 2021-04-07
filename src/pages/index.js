import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

import {
  Blogs,
  PostContainer,
  PostData,
  PostShort,
  StyledThumb,
  PostTitle,
  AuthorHeader,
  ReadMore,
} from "../style/home"

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo />
      <Blogs>
        {blogs.map(blog => {
          return (
            <PostContainer key={blog.id}>
              <StyledThumb
                fluid={blog.frontmatter.thumb.childImageSharp.fluid}
              />
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
    </Layout>
  )
}

export const blogsQuery = graphql`
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
`
