import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby"

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <img src={data.mdx.frontmatter.hero_image} alt={data.mdx.frontmatter.hero_image_alt} />
      {children}
    </Layout>
  )
}

export const data = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
      excerpt
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost