import React, { useRef } from "react";
import './CardPokeBatalha.css'
import * as C from './CardPokeBatalha.styled'
import { Habilidades } from "../../types/LadoPerson";

import imagem from '../../../../../public/assets/burguer.png'


//vai aceitar parametros
function CardPokeBatalha( { acao }: { acao: Habilidades }){




    return(
        <div className="alinhar-flex">
            <div className="info-poke">
                <div className="flex1">
                    <h1 className="name">Chinchar</h1>
                    <h1 className="level">Lvl 25</h1>
                </div>
                <div className="container-vida"> <h1>39</h1>  <C.Vida vida={100} /></div>
            </div>


        <C.pokeImage skil={acao}>
          <img className="img-poke" src="/assets/burguer.png" alt="" />  
        </C.pokeImage>
            
        </div>
    )
}


export default CardPokeBatalha