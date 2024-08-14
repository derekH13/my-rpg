import React from "react";

//style, importa tudo do arquivo como 'C'
import * as C from './Character.styled'

//types
import { LadoPerson } from "../../types/LadoPerson";



type Props = {
    x: number;
    y: number;
    side: LadoPerson;
}



export const Character = ({x, y, side}: Props ) => {
const size = 50

//faz um objeto para que a string que chegue sirva com key desse objeto e tenha o seu valor
const sides = {
    down: 0,
    left: -65,
    right: -130,
    up: -195,
}


    return(
        <C.Character size={size} left={ x * 30} top={y * 30} sidePos={sides[side]}>

        </C.Character>
    )
}

