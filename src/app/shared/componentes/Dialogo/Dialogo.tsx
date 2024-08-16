import React from "react";
import './Dialogo.css'
import { CharacterLugar } from "../../types/LadoPerson";

type props = {
    texto: string,
    person: string
}


function Dialogo({texto, person}: props){



    return(
        <div className="container-dialogo">
            <h1>{person}</h1>
            <div className="flex-texto">
                <img src={`./assets/${person}.png`} alt="" />
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default Dialogo