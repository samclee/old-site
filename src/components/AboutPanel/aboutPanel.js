import React from "react"
import "./aboutPanel.css"

const AboutPanel = (props) => {
    return (
        <div id="aboutPanel">
            <h1>About me</h1>
            <div>Hi hi hi hi hi! I'm Sam, I like making games!</div>
            <ul id="contactList">
                <li><a href="https://samclee.itch.io/"
                    className="hvr-grow-shadow">
                    itch.io</a></li>
                <li><a href="https://github.com/samclee"
                    className="hvr-grow-shadow">
                    Github</a></li>
                <li><a href="https://twitter.com/sam_c_lee"
                    className="hvr-grow-shadow">
                    Twitter</a></li>
            </ul>
        </div>
    )
}

export default AboutPanel