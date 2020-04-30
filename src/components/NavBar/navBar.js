import React from "react"
import NavButton from "../NavButton/navButton"
import TabTypes from "../../types/tabTypes"

import "./navBar.css"

const NavBar = (props) => {

    return (
        <div id="navBar">
            <NavButton
                curTab={props.curTab}
                tabType={TabTypes.ABOUT}
                to="/"
                text="about me"
            />
            <NavButton
                curTab={props.curTab}
                tabType={TabTypes.GAMES}
                text="games portfolio"
                to="/gamesPage/"
            />
            <NavButton
                curTab={props.curTab}
                tabType={TabTypes.THOUGHTS}
                text="my opinions"
                to="/thoughtsPage/"
            />
        </div>
    )
}

export default NavBar