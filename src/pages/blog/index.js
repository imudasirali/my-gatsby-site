import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
                ))
            }
        </Layout>
    )
}

export const data = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
