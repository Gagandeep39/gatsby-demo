<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

# Gatsby

- [Gatsby](#gatsby)
  - [Deployment](#deployment)
  - [Steps to Create a project in preset directory](#steps-to-create-a-project-in-preset-directory)
  - [Pages](#pages)
  - [Routing](#routing)
  - [Styling](#styling)
  - [Plugins](#plugins)
  - [CSS](#css)
    - [Global CSS](#global-css)
    - [Scoped CSS](#scoped-css)
  - [Graphql](#graphql)
  - [Graphql Playground](#graphql-playground)
  - [Filesystem Plugin](#filesystem-plugin)
  - [Markdown plugin](#markdown-plugin)
  - [Packages](#packages)
  - [TODO](#todo)
  - [GraphQL Nodes API](#graphql-nodes-api)
  - [Images support](#images-support)
  - [Contentful (Online CMS)](#contentful-online-cms)
    - [Tasks to do on website](#tasks-to-do-on-website)
    - [Create api token](#create-api-token)
    - [Client Implementation](#client-implementation)
  - [404](#404)

## Deployment

- Deployment at https://gagandeep39.github.io/gatsby-demo/

## Steps to Create a project in preset directory

1. Create a new folder
2. Run gatsby new `../<folder_name>`

## Pages

- Index.js is the starting point of application

## Routing

- Create a file inside `src/pages`
- Append the page name in browser to access it

## Styling

- Create a folder `src/styles`
- Create a file `index.css`
- import it wherever we have to use css `import '../styles/index.css'`

## Plugins

- Visit the [link](https://www.gatsbyjs.com/plugins/) for more info
- Plugins used in project
  - `gatsby-plugin-sass` Add sass support
  - `gatsby-source-filesystem` Add reading data from filesystem, Docs [link](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
  - `gatsby-transformer-remark` Used to interpret Markdown using Remark
  - `gatsby-plugin-sharp` Image support, Refer docs at [link](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/)
  - `gatsby-remark-images` Markdown image support, docks [link](https://www.gatsbyjs.com/plugins/gatsby-remark-images/)
  - `gatsby-remark-relative-images` Position images relatively, docs [link](https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images)
  - `gatsby-source-contentful` Connect to contentful site

## CSS

### Global CSS

- Import `file-name.css` as `import file-name.css` to any `.js` file, it will be appplied everywhere
- Apply it using standard method `class='class-name'`

### Scoped CSS

- **Scoped CSS** files can be created using `file-name.module.css`
- `import anyName from 'file-name.css'` Import a scoped css file
- Apply it `class={anyName.class-name}`
- Internally it creates a class name specifically for the component its applied
- **Always** use Camel case
  - eg. `nav-list` in `.css` will become `anyName.navList` in `.js`

## Graphql

- Graphql server availble by dfault at `localhost:8000/__graphql`
- Only availbale in development mode
- Allows querying of data
- Queries can be later moved to react app
- Docs can be found at top right corner of graphql server
- A simple query

```graphql
query {
  site {
    siteMetadata {
      title
    }
  }
}
```

- Variable based query

```graphql
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date
    }
    html
    excerpt
  }
}
```

## Graphql Playground

- Kind of successor to Graphql IDE
- Accessed by changing an env variable `GATSBY_GRAPHQL_IDE=playground`
- Better UI
- **NOTE** Env in this format **doesn't** work in windows
  - `"develop": "GATSBY_GRAPHQL_IDE=playground gatsby develop"`

## Filesystem Plugin

- Refer docs for adding [plugin](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem)
- Update `gatsby-config.js` by dding files to be accssible
- Test the access using graphql playground (New queries will be available in graphql docs)
- Graphql query

```qraphql
query {
  allFile {
    edges {
      node {
				name
        extension
        dir
      }
    }
  }
}
```

## Markdown plugin

- Plugin name `gatsby-transformer-remark`

## Packages

- `env-cmd` Environemnt in Commandline

## TODO

1. Generate a slug for each post (Path for each post)
2. Generate a blog post template

## GraphQL Nodes API

- Structure to store graphql data
- `onCreateNode` Allows attaching additioanl data t existing node

## Images support

- `gatsby-plugin-sharp` plugin eables image processing functionality
- `gatsby-remark-images` Enables Image support in markdown
- Snippet to add image support in markdown

```graphql
`gatsby-plugin-sharp`,
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-relative-images`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 730,
        },
      },
    ],
  },
},
```

- Transformer plugin requires additional config
- Relative image is a plugin for markdown plugin (transfer remark plugin)

## Contentful (Online CMS)

### Tasks to do on website

- Link: https://app.contentful.com/
- Used to create content
- Steps To Create CMS
  1. Create account -> Get Started -> Try for free -> Create Wkspace
  2. Content Model -> Add content type -> Enter `Blog Post`
  3. Add fiels 
     1. Title - Text
     2. Slug - Text
     3. Published Date - Date
     4. Body - Rich text
  4. Save
- Steos to add Content
  1. Content -> Add entry 
  2. Enter all fields
  3. Save

### Create api token

1. Settings
2. API Key
3. Add API key
4. Fill name and description
   1. Copy `Space ID`
   2. Copy `Content Delivery API - access token`

### Client Implementation

1. Add plugin `gatsby-source-contentful`, package`@contentful/rich-text-react-renderer` for converting json to markdown
2. Ad below snippet in `gatsby-config.js`
   ```js
   {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dann6e6efegd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
   ```
3. Fetch data aas json from server
4. Add query to fetch render json in marldown in Templates stored in `template` 
```js
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
```

## 404

- Page shown when we enter an invalid page
- Must be created in `pages/404.js`
- Snippet
  ```js
  const NotFound = () => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p> <Link to='/'> Head Home </Link> </p>
        </Layout>
    )
  }
  ```
- Accessed by entering url as `/<anything>`
