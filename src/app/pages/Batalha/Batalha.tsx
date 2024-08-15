import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import './Batalha.styled'
import './Batalha.css'
import CardPokeBatalha from "../../shared/componentes/Card-Poke-Batalha/CardPokeBatalha";
import { objetopoke } from "../../shared/data/data";
import MeuCardPoke from "../../shared/componentes/MeuCardPoke/MeuCardPoke";


//type
import { Habilidades, dadosPoke } from "../../shared/types/LadoPerson";


//class
import { Util } from "../../Util/Util";
import { Pokemon } from "../../../class/PokemonClass";

let chave = 1




export function Batalha(){
    const [habilidade, sethabilidade] = useState<Habilidades>("")
    const [pokeInimigo, setPokeInimigo] = useState<dadosPoke>(objetopoke)
    const [pokeMeu, setPokeMeu] = useState<dadosPoke>(objetopoke)
    const [meuatk, setMeuAtk] = useState(0)

     //essa é a porcentagem para controlara a animação da vida
    const [myLife, setMyLife] = useState(100)
    const [InimigoLife, setInimigoLife] = useState(100)


    const navegar = useNavigate()


    //ao iniciar fazer um monstro oponente aleatorio
    useEffect(() => {
        Util.requisicao(Util.randomNumber(1, 700)).then(data => {
            if(!data)return
            
            //vai virar uma instancia de uma class
            setPokeInimigo(data)
            
        })
        Util.requisicao(392).then(dados => {
            if(!dados)return
            
            //vai virar uma instancia de uma class
            setPokeMeu(dados)
        })
        
    }, [])


    

//atacar / instancia o pokemon inimigo / logica de atack
    function ataque(){
        const MeuPoke = new Pokemon(pokeMeu)
        const pokeI = new Pokemon(pokeInimigo)
        console.log(pokeI.stats.hp);
        
        //function de atacar, recebe hp e def inimigo
        const valorAtacar = MeuPoke.atacar(pokeI.stats.hp, pokeI.Mdef())
        setMeuAtk( meuatk + valorAtacar.meuatk)
        
        //porcentagem de vida atual do inimigo
        setInimigoLife( InimigoLife - valorAtacar.tirou)

        //animação de atacar
        sethabilidade("ataqueMeu")
       



        setTimeout(() => {
            sethabilidade("")
       }, 3000)
    }









    

    return(
        <div className="container">
            <div className="map-combate">

                    <CardPokeBatalha acao={''} data={pokeInimigo} hp={InimigoLife} dano={meuatk}/>

                    <MeuCardPoke acao={habilidade} data={pokeMeu} hp={myLife} />

                <div className="controle">

                 <button 
                 className="btn-17"
                 onClick={() => ataque()}
                 >
                    <span className="text-container">
                        <span className="text">{pokeMeu.moves.move}</span>
                    </span>
                </button>

                <button 
                className="btn-17"
                onClick={() => ataque()}
                >
                    <span className="text-container">
                        <span className="text">{pokeMeu.moves.move2}</span>
                    </span>
                </button>

                <button 
                className="btn-17"
                >
                    <span className="text-container">
                        <span className="text">POKEMONS</span>
                    </span>
                </button>

                <button 
                className="btn-17"
                onClick={() => navegar("/pagina-inicial")}
                >
                    <span className="text-container">
                        <span className="text">SAIR</span>
                    </span>
                </button>



                </div>
            </div>
        </div>
    )
}
