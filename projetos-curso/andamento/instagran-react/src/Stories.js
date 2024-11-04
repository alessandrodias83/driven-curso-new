import React from "react";

export default function Stories() {
    return (
        <div className="stories">
            <StoriesFoto texto="9gag"  imagem="assets/9gag.svg" />
            <StoriesFoto texto="meowed"  imagem="assets/meowed.svg" />
            <StoriesFoto texto="barked"  imagem="assets/barked.svg" />
            <StoriesFoto texto="nathanwpylestrangeplanet"  imagem="assets/nathanwpylestrangeplanet.svg" />
            <StoriesFoto texto="wawawiwac"  imagem="assets/wawawicomics.svg" />
            <StoriesFoto texto="respondeai"  imagem="assets/respondeai.svg" />
            <StoriesFoto texto="filomoderna"  imagem="assets/filomoderna.svg" />
            <StoriesFoto texto="memeriagourmet"  imagem="assets/memeriagourmet.svg" />
        </div>
    )
}

function StoriesFoto(props) {
    return (
       <div className="story">
        <img src={props.imagem}  className="imagem"/>
        <div className="usuario">{props.texto}</div>
       </div>
    )
}