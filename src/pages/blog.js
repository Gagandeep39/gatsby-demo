/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:02:12
 * @modify date 2020-12-06 09:02:12
 * @desc Blog Page
 */
import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

const Blog = () => {

  const blogPosts = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const fetchAllData = () => {
    return <ol>
      {blogPosts.allMarkdownRemark.edges.map(edge => (
        <li key={edge.node.frontmatter.title}>
          <h2> <Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link> </h2>
          <h2> {edge.node.frontmatter.date} </h2>
        </li>
      ))}
    </ol>
  }

  return (
    <Layout>
      <h1>Blog Page</h1>
      {fetchAllData()}
    </Layout>
  )
}

export default Blog;
