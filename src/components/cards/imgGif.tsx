import React from "react";

type CardGifProps = {
    src: string;
    alt: string
}
export  function CardGif(props:CardGifProps){
    return(
        <img
            className="rounded shadow my-3 hover:scale-105 transition-all"
            src={props.src}
            alt={props.alt}
        />
    )
}