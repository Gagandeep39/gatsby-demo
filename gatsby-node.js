const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNode, createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    // See all nodes
    // Lock for JSON structure to find node in which we have to add a new field
    // console.log(JSON.stringify(node, undefined, 4));
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log('---------------------');
        console.log(slug);
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// Create dynamic routes with as /blog/<mdfile name>
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplete = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplete,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
    // Create pages here
}
