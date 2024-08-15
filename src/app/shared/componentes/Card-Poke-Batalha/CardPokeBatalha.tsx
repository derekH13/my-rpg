import React, { useEffect, useRef } from "react";
import './CardPokeBatalha.css'
import * as C from './CardPokeBatalha.styled'
import { Habilidades } from "../../types/LadoPerson";

import imagem from '../../../../../public/assets/burguer.png'
import { Util } from "../../../Util/Util";
import { dadosPoke } from "../../types/LadoPerson";


//lembrar de sempre fazer a tipagem das props
interface PropsDados {
    acao: Habilidades;
    data: dadosPoke;
    hp: number;
    dano: number;
}




//vai aceitar parametros
function CardPokeBatalha( {acao, data, hp, dano}: PropsDados){

    useEffect(() => {
        
    })


    return(
        <div className="alinhar-flex">
            <div className="info-poke">
                <div className="flex1">
                    <h1 className="name">{data.name}</h1>
                    <h1 className="level">Lvl {data.base_experience}</h1>
                </div>

                <div className="tipos">
                    {
                        data.types.map((item) => <span className={`tipo ${item.type.name}`}>{item.type.name}</span>)
                    }
                    
                </div>

                <div className="container-vida"> <h1>{data.stats.hp - dano}</h1>  <C.Vida vida={hp} /></div>
            </div>


        <C.pokeImage skil={acao}>
          <img className="img-poke" src={data.spritesFrente} alt="" />  
        </C.pokeImage>
            
        </div>
    )
}


export default CardPokeBatalha