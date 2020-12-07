/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-12-06 12:53:25
 * @modify date 2020-12-06 12:53:25
 * @desc About page
 */
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p> <Link to='/'> Head Home </Link> </p>
        </Layout>
    )
}

export default NotFound
