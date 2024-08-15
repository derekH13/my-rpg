import './MeuCardPoke.css'
import React from 'react'
import { Habilidades, dadosPoke } from '../../types/LadoPerson';
import * as C from '../Card-Poke-Batalha/CardPokeBatalha.styled'

interface PropsDados {
    acao: Habilidades;
    data: dadosPoke;
    hp: number;
}


function MeuCardPoke( {acao, data, hp}: PropsDados){
    return(
        <div className="alinhar-flex-meu meuPoke">
        <div className="info-poke-meu">
            <div className="flex1">
                <h1 className="name">{data.name}</h1>
                <h1 className="level">Lvl {data.base_experience}</h1>
            </div>

            <div className="tipos">
                {
                    data.types.map((item) => <span className={`tipo ${item.type.name}`}>{item.type.name}</span>)
                }
                
            </div>

            <div className="container-vida"> <h1>{data.stats.hp}</h1>  <C.Vida vida={hp} /></div>
        </div>


    <C.pokeImage skil={acao}>
      <img className="img-poke-meu" src={data.spritesCosta} alt="" />  
    </C.pokeImage>
        
    </div>
    )
}

export default MeuCardPoke