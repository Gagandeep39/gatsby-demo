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
import blogStyles from './blog.module.scss'

const Blog = () => {
  const blogPosts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            id
            publishedDate (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const fetchAllData = () => {
    console.log(blogPosts.allContentfulBlogPost.edges);
    return <ol className={blogStyles.posts}>
      {blogPosts.allContentfulBlogPost.edges.map(edge => (
        <li key={edge.node.id} className={blogStyles.post}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title} </h2>
            <p> {edge.node.publishedDate} </p>
          </Link>
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
