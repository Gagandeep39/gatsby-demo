/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 09:10:22
 * @modify date 2020-12-06 09:10:22
 * @desc Footer
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {

  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>Created by {metaData.site.siteMetadata.author}, © 2020</p>
    </footer>
  )
}

export default Footer
