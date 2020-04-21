import React, {useState} from "react"

import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"
import AboutPanel from "../components/AboutPanel/aboutPanel"
import SEO from "../components/seo"

const IndexPage = () => {
  const [curTab, setTab] = useState(TabTypes.GAMES);

  return (
    <Layout
    curTab={curTab}
    setTab={setTab}
    >
      <SEO title="Home" />
      <div style={{display: "flex", justifyContent: "center"}}>
        <AboutPanel
          curTab={curTab}
          tabType={TabTypes.ABOUT}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
