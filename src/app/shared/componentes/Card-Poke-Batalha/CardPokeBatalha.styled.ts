import styled from "styled-components"; 
import { Habilidades } from "../../types/LadoPerson";

export const Vida = styled.div<{vida: number}>`
height: 100%;
width: ${props => props.vida}%;
background-color: red;
position: absolute;
border-radius: 8px;
transition: all ease .9s;

`

export const pokeImage = styled.div<{skil: Habilidades}>`
animation: ${props => props.skil} .5s linear;
`