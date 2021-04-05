const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blog {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/components/Post.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
