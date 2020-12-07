/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-07 07:32:39
 * @modify date 2020-12-07 07:32:39
 * @desc Head
 */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head
