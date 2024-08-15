import { useNavigate } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'

import './Dashboard.css'
import { Character } from '../../shared/componentes/Character/Character'


//============== types ===========
import { CharacterLugar } from '../../shared/types/LadoPerson'

//============== hooks ===========
import { useCharacter } from '../../shared/hooks/useCharacter'
import { useEffect, useRef } from 'react'



//aqui é uma pagina
export const Dashboard = () => {

    //usando o hook personalizado / personagens com habilidade de movimentação
    const char = useCharacter()

    const navegar = useNavigate()

    //usando useRef
    const lugar = useRef<CharacterLugar>('')


    //adicionando event click assim que a pagina é carregada
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
    }, [])


    //sair da vila
    const direcionarParaFora = () => {
        navegar('/Batalha')
    }



    //recebe a tecla e compara a posição clicada
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.code === 'KeyA' || e.code === 'ArrowLeft') return char.moveLeft()

        if(e.code === 'KeyD' || e.code === 'ArrowRight') return char.moveRight()

        if(e.code === 'KeyW' || e.code === 'ArrowUp') return char.moveUp()

        if(e.code === 'KeyS' || e.code === 'ArrowDown') return char.moveDown()


        //para sair
        if((e.code === 'Space') && (lugar.current === 'sair')){
            direcionarParaFora()
        }

        if((e.code === 'Space') && (lugar.current === 'elfa')){
            console.log('elfa')
        }

        if((e.code === 'Space') && (lugar.current === 'criança')){
            console.log('criança')
        }

        if((e.code === 'Space') && (lugar.current === 'tarefas')){
            console.log('tarefas')
        }

        if((e.code === 'Space') && (lugar.current === 'tenda')){
            console.log('tenda')
        }

        if((e.code === 'Space') && (lugar.current === 'vovo')){
            console.log('vovo')
        }

        if((e.code === 'Space') && (lugar.current === 'estatua')){
            console.log('estatua')
        }

    }


    console.log(char.x, char.y);
    


    //verificando o lugara
    if((char.x === 12 && char.y === 7) || (char.x === 14 && char.y === 7) || (char.x === 13 && char.y === 8)){
        lugar.current = 'elfa'

    }else if((char.x === 8 && char.y === 8) || (char.x === 9 && char.y === 8) || (char.x === 10 && char.y === 8)){
        lugar.current = 'tenda'

    }else if((char.x === 12 && char.y === 18) || (char.x === 13 && char.y === 17) || (char.x === 13 && char.y === 19)){
        lugar.current = 'criança'

    }else if((char.x === 14 && char.y === 19) || (char.x === 15 && char.y === 18)){
        lugar.current = 'vovo'

    }else if((char.x === 24 && char.y === 12) || (char.x === 25 && char.y === 12)){
        lugar.current = 'tarefas'

    }else if((char.x === 25 && char.y === 14) || (char.x === 3 && char.y === 11) || (char.x === 25 && char.y === 13)){
        lugar.current = 'sair'

    }else if((char.x === 16 && char.y === 16) || (char.x === 16 && char.y === 17) || (char.x === 13 && char.y === 16)){
        lugar.current = 'estatua'

    }else{
        lugar.current = ''

    }




console.log(lugar);






    return(
        <Provider>
            <div className='container'>
                <div className="map">

                <Character  x={char.x} y={char.y} side={char.side} />

            {
            lugar.current === 'tarefas'? <div className="tarefas comente"><h2>TAREFAS</h2> Aperte <br /> <div>ESPAÇO</div> Para Ver As Tarefas!</div> : ''
            }

            {
            lugar.current === 'vovo'? <div className="vovo comente"><h2 className='red'>????</h2> Aperte <br /> <div>ESPAÇO</div> Para Ouvir o senhor!</div> : ''
            }

            {
            lugar.current === 'tenda'?  <div className="tenda comente"><h2 className='red'>TENDA</h2> APERTE <br /> <div>ESPAÇO</div> Para Ver os Produtos da Tenda!</div> : ''
            }

            {
            lugar.current === 'criança'? <div className="criança comente"><h2 className='red'>CRINAÇA</h2> APERTE <br /> <div>ESPAÇO</div> Para Falar com á criança!</div> : ''
            }

            {
            lugar.current === 'elfa'? <div className="elfa comente"><h2 className='red'>Elfa</h2> APERTE <br /> <div>ESPAÇO</div> Para Falar com á Elfa!</div> : ''
            }

            {
            lugar.current === 'sair'? <div className="sair comente">Ao sair desse vilarejo é possivel que encontre monstros perigosos, se estiver decidido....<br />  APERTE <div className='espaco'>ESPAÇO</div> Para Sair</div> : ''
            }

            {
            lugar.current === 'estatua'?<div className="estatua comente">Tem Estatua algo escrito....<br /><div className='espaco'>ESPAÇO</div> Se Quiser Ler APERTE</div> : ''
            }



            

                </div>
            </div>
        </Provider> 
    )

}