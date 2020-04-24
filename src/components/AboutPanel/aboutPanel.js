import React from "react"
import "./aboutPanel.css"

const AboutPanel = (props) => {
    let style = {}
    style.display = (props.curTab === props.tabType) ? "block" : "none"

    return (
        <div id="aboutPanel" style={style}>
            <h1>About me</h1>
            <div>Hi hi hi hi hi! I'm Sam, I like making games! I wish I had more to write here but I'm pretty much just a game dev hobbyist!</div>
            <ul id="contactList">
                <li><a href="https://samclee.itch.io/"
                    className="hvr-grow-shadow">
                    itch.io</a></li>
                <li><a href="https://github.com/samclee"
                    className="hvr-grow-shadow">
                    Github</a></li>
            </ul>
        </div>
    )
}

export default AboutPanel