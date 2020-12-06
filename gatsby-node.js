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