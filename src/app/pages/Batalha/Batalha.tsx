import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import './Batalha.styled'
import './Batalha.css'
import CardPokeBatalha from "../../shared/componentes/Card-Poke-Batalha/CardPokeBatalha";
import { objetopoke } from "../../shared/data/data";
import MeuCardPoke from "../../shared/componentes/MeuCardPoke/MeuCardPoke";
import Audio from '../../shared/componentes/Audio/Audio'


//type
import { Habilidades, dadosPoke } from "../../shared/types/LadoPerson";


//class
import { Util } from "../../Util/Util";
import { Pokemon } from "../../../class/PokemonClass";

let chave = 1




export function Batalha(){
    const [animacaoI, setAnimacaoI] = useState<Habilidades>("")
    const [pokeInimigo, setPokeInimigo] = useState<dadosPoke>(objetopoke)
    const [pokeMeu, setPokeMeu] = useState<dadosPoke>(objetopoke)

    //valor do atk acumulado
    const [meuatk, setMeuAtk] = useState(0)
    const [InimigoAtk, setInimigoAtk] = useState(0)

     //essa é a porcentagem para controlara a animação da vida
    const [myLife, setMyLife] = useState(100)
    const [InimigoLife, setInimigoLife] = useState(100)

    const animacao = useRef<Habilidades>('')


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
        //logica para dar tempo o pokemon oponente atacar e não ficar atacando sem parar
        if(animacao.current != '') return

        //animação de atacar
        animacao.current = 'ataqueMeu'

        const MeuPoke = new Pokemon(pokeMeu)
        const pokeI = new Pokemon(pokeInimigo)
        console.log(pokeI.stats.hp);
        
        //function de atacar, recebe hp e def inimigo
        const valorAtacar = MeuPoke.atacar(pokeI.stats.hp, pokeI.Mdef())
        setMeuAtk( meuatk + valorAtacar.meuatk)
        
        //porcentagem de vida atual do inimigo
        setInimigoLife( InimigoLife - valorAtacar.tirou)


        
        //logica de animação de atacar tanto do meu poke e de oponente
        setTimeout(() => {
            setAnimacaoI("ataqueInimigo")

            const valorAtacarI = pokeI.atacar(MeuPoke.stats.hp, MeuPoke.Mdef())
            setInimigoAtk( InimigoAtk + valorAtacarI.meuatk)

            //porcentagem da minha vida
            setMyLife( myLife - valorAtacarI.tirou)
            
            animacao.current = ''
       }, 2000)
       setAnimacaoI("")
    }









    

    return(
        <div className="container">
            <div className="map-combate">
            <Audio />

                    <CardPokeBatalha acao={animacaoI} data={pokeInimigo} hp={InimigoLife} dano={meuatk}/>

                    <MeuCardPoke acao={animacao.current} data={pokeMeu} hp={myLife} dano={InimigoAtk}/>

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
