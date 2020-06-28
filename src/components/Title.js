import React from "react";

const Title = (props) => {
    return (
        <h3 className={props.className}>{props.children}</h3>
    )
}

export default Title;