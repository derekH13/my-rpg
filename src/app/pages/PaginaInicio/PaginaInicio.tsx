import React from "react";
import './PaginaInicio.css'
import PostEvolução from "../../shared/componentes/PostEvolução/PostEvolução";
import { useNavigate } from "react-router-dom";


export function PaginaInicio(){
    const navegar = useNavigate()


    return(
        <div className="pagina-inicio">
            <img className="fundo-ladding" src="./assets/rpg-image.png" alt="" />
            <div className="ladding-page">
                <div className="title-pokerpg">
                    <img src="./assets/POKERPG.png" alt="" />
                </div>
                <div className="flex-just">

                    <img src="./assets/ash.png" alt="" />
                    <button
                    className="btn-jogar"
                    onClick={() => navegar('/Dashboard')}
                    >JOGAR</button>
                </div>
            </div>

            <div className="title-projeto">Evolução do Projeto</div>

    <div className="conteudo-p">
            <PostEvolução 
            img={'./assets/post/post1.png'} 
            title={'Combate'} 
            conteudo={'Na verdade, eu comecei o projeto trabalhando no mapa do Vilarejo, onde defini a base do cenário e como tudo deveria se parecer. Mas a primeira imagem que eu tenho para mostrar é do estilo de combate. Essa imagem mostra como eu comecei a desenvolver a mecânica de combate do jogo, que foi um passo importante depois de trabalhar no mapa. Então, embora eu tenha começado com o mapa, foi a parte do combate que realmente tomou forma primeiro.'}
            flex={'Row'}/>

            <PostEvolução 
            img={'./assets/post/post2.png'} 
            title={'PokeApi'} 
            conteudo={'Enquanto desenvolvia o projeto, tive a ideia de usar a API de Pokémon para os monstros do jogo. Achei que seria super útil porque a API fornece os stats de cada Pokémon, e cada um tem suas próprias características e imagens. Isso me ajudaria a criar uma variedade de monstros com diferentes habilidades e aparências, tornando o jogo mais interessante e dinâmico.'}
            flex={'Row-reverse'}/>

            <PostEvolução 
            img={'./assets/post/post3.png'} 
            title={'Meu Status e Pokemon'} 
            conteudo={'Também adicionei animações tanto para o ataque do meu Pokémon quanto para o do oponente, e incluí uma animação para a vida dos Pokémon. Além disso, implementei a lógica de dano, que leva em conta o ataque/especial ataque do seu Pokémon, a defesa do oponente e a vida restante. Isso ajuda diferenciar os stats de cada pokemon.'}
            flex={'Row'}/>

            <PostEvolução 
            img={'./assets/post/post4.png'} 
            title={'Mapa e Ideia Inicial'} 
            conteudo={`Tudo realmente começou com o mapa. Enquanto assistia a um projeto de mapa de RPG no YouTube, Esse vídeo no YouTube ensinava a fazer mapas e a implementar colisão baseada em um array. Foi exatamente isso que me deu a ideia de pegar aquele conceito e adaptá-lo ao meu projeto, criando um mapa que se ajustasse ao meu próprio estilo.
            Logo depois, adicionei a possibilidade de interação quando você se aproxima de elementos do vilarejo. Agora, quando o jogador chega perto de certos itens ou personagens, ele pode interagir com eles, tornando o mapa mais dinâmico e envolvente.`}
            flex={'Row-reverse'}/>

            <PostEvolução 
            img={'./assets/post/post5.png'} 
            title={'Iterações'} 
            conteudo={`Tudo realmente começou com o mapa. Enquanto assistia a um projeto de mapa de RPG no YouTube, Esse vídeo no YouTube ensinava a fazer mapas e a implementar colisão baseada em um array. Foi exatamente isso que me deu a ideia de pegar aquele conceito e adaptá-lo ao meu projeto, criando um mapa que se ajustasse ao meu próprio estilo.
            Logo depois, adicionei a possibilidade de interação quando você se aproxima de elementos do vilarejo. Agora, quando o jogador chega perto de certos itens ou personagens, ele pode interagir com eles, tornando o mapa mais dinâmico e envolvente.`}
            flex={'Row'}/>

            <PostEvolução 
            img={'./assets/post/post6.png'} 
            title={'Historia'} 
            conteudo={'Basicamente, foi aqui que decidi misturar Pokémon com elementos medievais. Desenvolvi uma história baseada nas minhas ideias e, com a ajuda do ChatGPT, construí as falas dos personagens para dar vida a esse universo único.'}
            flex={'Row-reverse'}/>
        </div>

        </div>
    )
}

