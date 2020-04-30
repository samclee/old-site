import React from "react"
import { Link } from "gatsby"
import "./navButton.css"

const NavButton = (props) => {
    let classes = "navButton hvr-skew";
    if (props.tabType === props.curTab) {
        classes += " active"
    }
    
    return (
        <Link
            to={props.to}
            className={classes}
        >
            {props.text}
        </Link>
    )
}

export default NavButton