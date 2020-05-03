import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import TabTypes from "../types/tabTypes"
import "./articleTemplate.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout curTab={TabTypes.THOUGHTS}>    
      <div style={{display: "flex", justifyContent: "center"}}>
          <div
              id="articlePanel"
              dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`