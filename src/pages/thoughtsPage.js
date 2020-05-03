import React, { useState } from "react"

import ArticleList from "../components/ArticleList/articleList"
import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"
import MediaTypes from "../types/mediaTypes"

import SEO from "../components/seo"

const ThoughtsPage = () => {
  const gamesItems = [
    ["Test file", "test"],
  ]

  const [curMediaType] = useState(MediaTypes.GAMES)

  return (
    <Layout curTab={TabTypes.THOUGHTS}>
      <SEO title="Thoughts" />
      <div style={{display: "flex", justifyContent: "center"}}>
        <ArticleList 
          mediaType={MediaTypes.GAMES}
          curMediaType={curMediaType}
          items={gamesItems}/>
      </div>
    </Layout>
  )
}

export default ThoughtsPage
