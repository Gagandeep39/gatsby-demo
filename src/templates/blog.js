/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 22:17:00
 * @modify date 2020-12-06 22:17:00
 * @desc Home Page
 */
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

// Gtsy will actualy fetch this query
// It will run it and put the response in props
export const query = graphql`
query (
    $slug: String!
) {
    markdownRemark (
        fields: {
        slug: {
            eq: $slug
        }
    }
    ) {
        frontmatter {
            title
            date
        }
        html
    }
}
`

const Blog = (props) => {
    return (
        <Layout>
            <h1> {props.data.markdownRemark.frontmatter.title} </h1>
            <p> {props.data.markdownRemark.frontmatter.date} </p>
            <hr />
            {/* Render HTML */}
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog