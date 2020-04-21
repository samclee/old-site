import React from "react"

const AboutPanel = (props) => {
    let style = {}
    style.display = (props.curTab === props.tabType) ? "block" : "none"

    return (
        <div style={style}>
            <h1>About me</h1>
            hlo hlo hlo
        </div>
    )
}

export default AboutPanel