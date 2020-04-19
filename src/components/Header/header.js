import PropTypes from "prop-types"
import React from "react"

import NavBar from "../NavBar/navBar"

const Header = (props) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center" }}>
          {props.siteTitle}
      </h1>
      <NavBar
        curTab={props.curTab}
        setTab={props.setTab}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
