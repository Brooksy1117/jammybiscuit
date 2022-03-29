import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Jammy Biscuit</h1>
    <h3>Web & Wordpress<h3>
    <p>Coming Soon.</p>
  </Layout>
)

export default IndexPage
