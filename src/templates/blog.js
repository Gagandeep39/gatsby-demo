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
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Gtsy will actualy fetch this query
// It will run it and put the response in props
export const query = graphql`
query (
    $slug: String!
) {
    contentfulBlogPost (
        slug: {
            eq: $slug
        }
    ) {
        title
        publishedDate (formatString: "MMMM Do, YYYY")
        body {
            json
        }
    }
}
`

const Blog = (props) => {

    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'] ||''
                const url = node.data.target.fields.file['en-US'].url ||''
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <h1> {props.data.contentfulBlogPost.title} </h1>
            <p> {props.data.contentfulBlogPost.publishedDate} </p>
            {/* Convert json to markdown */}
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog