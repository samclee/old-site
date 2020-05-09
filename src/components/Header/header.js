import PropTypes from "prop-types"
import React from "react"

import NavBar from "../NavBar/navBar"

require("typeface-raleway")

const Header = (props) => {
  const dec = createDecoration()
  const fullTitle = `${dec} ${props.siteTitle} ${reverseString(dec)}`

  return (
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
        <h1 style={{ margin: 0, textAlign: "center", fontFamily: "Raleway", fontWeight: 300 }}>
            {fullTitle}
        </h1>
        <NavBar curTab={props.curTab} />
      </div>
    </header>
  )
}

const createDecoration = () => {
  const symbols = "!#$%^&*()_+~-=[]|{}[];:<>?,."
  let dec = ""
  for (let i = 0; i < 4; i++) {
    dec += symbols.charAt(Math.floor(Math.random() * symbols.length))
  }
  
  return dec
}

const reverseString = str => {
  let reversedAry = str.split("").reverse()
  for (let i = 0; i < reversedAry.length; i++) {
    const char = reversedAry[i]
    if (bracketMap.hasOwnProperty(char)) {
      reversedAry[i] = bracketMap[char]
    }
  }

  return reversedAry.join("");
}

const bracketMap = {
  '{': '}',
  '[': ']',
  '(': ')',
  '<': '>',
  '}': '{',
  ']': '[',
  ')': '(',
  '>': '<'
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
