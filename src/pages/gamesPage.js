import React from "react"

import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"

import SEO from "../components/seo"

const GamesPage = () => {
  return (
    <Layout curTab={TabTypes.GAMES}>
      <SEO title="Games" />
      <div style={{display: "flex", justifyContent: "center"}}>
        games go here
      </div>
    </Layout>
  )
}

export default GamesPage
