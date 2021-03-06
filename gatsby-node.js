const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplete = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplete,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
}


//////////////////////////////////////////////////////////////
// Not needed any more, as we are fething data from Contentful
//////////////////////////////////////////////////////////////
// exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.
//     // See all nodes
//     // Lock for JSON structure to find node in which we have to add a new field
//     // console.log(JSON.stringify(node, undefined, 4));
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }


//////////////////////////////////////////////////////////////
// Not needed any more, as we are fething data from Contentful
//////////////////////////////////////////////////////////////
// Create dynamic routes with as /blog/<mdfile name>
// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const blogTemplete = path.resolve('./src/templates/blog.js')
//     const res = await graphql(`
//     query{
//         allMarkdownRemark{
//             edges{
//                 node{
//                     fields {
//                         slug
//                     }
//                 }
//             }
//         }
//     }
//     `)
//     res.data.allMarkdownRemark.edges.forEach(edge => {
//         createPage({
//             component: blogTemplete,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     });
// }
