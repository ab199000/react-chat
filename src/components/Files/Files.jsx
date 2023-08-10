import React from "react";

function Files ({type,img}) {
    return (
        <span>
            <img src={img}/>{type}
        </span>
    )
}

export default Files