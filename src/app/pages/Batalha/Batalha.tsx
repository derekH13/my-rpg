import React, { useRef, useState } from "react";
import './Batalha.styled'
import './Batalha.css'
import CardPokeBatalha from "../../shared/componentes/Card-Poke-Batalha/CardPokeBatalha";

//type
import { Habilidades } from "../../shared/types/LadoPerson";





export function Batalha(){
    const [habilidade, sethabilidade] = useState<Habilidades>("")




    function ataque(){
       sethabilidade("ataque")
       
       setTimeout(() => {
        sethabilidade("")
       }, 3000)
    }





    

    return(
        <div className="container">
            <div className="map-combate">

                    <CardPokeBatalha acao={habilidade} />


                <div className="controle">

                 <button 
                 className="btn-17"
                 onClick={() => ataque()}
                 >
                    <span className="text-container">
                        <span className="text">ATAQUE</span>
                    </span>
                </button>

                <button className="btn-17">
                    <span className="text-container">
                        <span className="text">ATAQUE2</span>
                    </span>
                </button>

                <button className="btn-17">
                    <span className="text-container">
                        <span className="text">ATAQUE3</span>
                    </span>
                </button>

                <button className="btn-17">
                    <span className="text-container">
                        <span className="text">ATAQUE4</span>
                    </span>
                </button>



                </div>
            </div>
        </div>
    )
}
