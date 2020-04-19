import React from "react"
import NavButton from "../NavButton/navButton"
import TabTypes from "../../types/tabTypes"

import "./navBar.css"

const NavBar = (props) => {

    return (
        <div id="navBar">
            <NavButton
                curTab={props.curTab}
                setTab={props.setTab}
                tabType={TabTypes.ABOUT}
                text="about me"
            />
            <NavButton
                curTab={props.curTab}
                setTab={props.setTab}
                tabType={TabTypes.GAMES}
                text="games portfolio"
            />
            <NavButton
                curTab={props.curTab}
                setTab={props.setTab}
                tabType={TabTypes.THOUGHTS}
                text="my opinions"
            />
        </div>
    )
}

export default NavBar