import React from "react"

import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"

import SEO from "../components/seo"

const ThoughtsPage = () => {
  return (
    <Layout curTab={TabTypes.THOUGHTS}>
      <SEO title="Thoughts" />
      <div style={{display: "flex", justifyContent: "center"}}>
        thoughts go here
      </div>
    </Layout>
  )
}

export default ThoughtsPage
