import React from "react";
import './PostEvolução.css'
import * as C from './PostEvolução.styled'

type Props = {
    img: string,
    title: string,
    conteudo: string,
    flex: string,
}


function PostEvolução( {img, title, conteudo, flex}: Props ){
    return(
        <C.ContainerPost flex={flex}>
            <img className="imagem-post" src={img} alt="" />

            <div>
                <h1 className="title-post">{title}</h1>
                <p className="texto-post">
                    {conteudo}
                </p>
            </div>
        </C.ContainerPost>
    )
}

export default PostEvolução