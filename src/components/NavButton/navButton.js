import React from "react"

import "./navButton.css"

const NavButton = (props) => {
    let classes = "navButton";
    if (props.tabType === props.curTab) {
        classes += " active"
    }

    const clickCallback = () => {
        props.setTab(props.tabType)
    }
    
    return (
    <button
        className={classes}
        onClick={clickCallback}
    >
        {props.text}
    </button>
    )
}

export default NavButton