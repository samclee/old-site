import React from "react"
import { Link } from "gatsby"

import "./articleList.css"

const ArticleList = (props) => {
    const display = (props.curMediaType === props.mediaType) ? "block" : "none";
    console.log(props.curMediaType === props.mediaType)

    return (
        <div className={"articleList"} style={{display}}>
            <ul>
                {props.items.map(item => {
                    return(
                        <li><Link to={`/${item[1]}`}>{item[0]}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ArticleList