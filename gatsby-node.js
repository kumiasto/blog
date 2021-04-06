const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blog {
      allMarkdownRemark(sort: { fields: frontmatter___date }) {
        edges {
          next {
            frontmatter {
              slug
              title
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/components/Post.js"),
      context: {
        slug: node.frontmatter.slug,
        next,
        previous,
      },
    })
  })
}
