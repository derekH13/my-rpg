import { mapSpots } from '../../data/collisionMap'
import { LadoPerson } from '../../shared/types/LadoPerson'

import React, { useState } from 'react'



//criar hooks personalizados, separando a logica relacionada apenas com um hook especifico
//bem parecido com uma class


export const useCharacter = () => {
    //state da posição / definindo a posição que sera a inicial
    const [posicao, setPosicao] = useState({x: 20, y: 6})
    //state que recebera a direção atual / direção inicial down
    const [side, setSide] = useState<LadoPerson>('down')


    //faz a movimentação
    const moveLeft = () => {
        setPosicao(posicao => ({
            x: canMove(posicao.x - 1, posicao.y)? posicao.x - 1 : posicao.x,
            y: posicao.y
        }))
        setSide('left')
    }

    const moveRight = () => {
        setPosicao(posicao => ({
            x: canMove(posicao.x + 1, posicao.y)? posicao.x + 1: posicao.x,
            y: posicao.y
        }))
        setSide('right')
    }

    const moveUp = () => {
        setPosicao(posicao => ({
            x: posicao.x,
            y: canMove(posicao.x, posicao.y - 1)? posicao.y - 1: posicao.y,
        }))
        setSide('up')
    }

    const moveDown = () => {
        setPosicao(posicao => ({
            x: posicao.x,
            y: canMove(posicao.x, posicao.y + 1)? posicao.y + 1: posicao.y
        }))
        setSide('down')
    }



    //confere se pode andar na posição
    const canMove = (x: number, y: number) => {

        //verifica se saiu do mapa
        if( x < 0 || y < 0 || x > 28 || y > 28) return false

        //verifica se perando ao array map é permitido andar
        if(mapSpots[y][x] === 0) return false
        
        return true

    }


    return{
        x: posicao.x,
        y: posicao.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown
    }

}