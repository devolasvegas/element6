import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div class="post-banner">
      <img src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} />
      </div>
      <div id="blog">
      <div class="container">
      <article class="blog-post">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.subtitle}</h3>
          <p>{post.frontmatter.date}</p>
        </header>
        <section className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <nav class="next-previous-blogs">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
      }
    }
  }
`