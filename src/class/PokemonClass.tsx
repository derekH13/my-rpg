import { dadosPoke } from "../app/shared/types/LadoPerson";



export class Pokemon{

    name: string
    spritesFrente: string
    spritesCosta: string
    types: [
        {type: {name: string}},
    ]
    moves: {
        move: string,
        move2: string,
    }
    base_experience: number
    stats: {
        hp : number,
        atk: number,
        def: number,
        satk: number,
        sdef: number,
        speed: number
    }



constructor(dados: dadosPoke){
    this.name = dados.name
    this.spritesFrente = dados.spritesFrente
    this.spritesCosta = dados.spritesFrente
    this.types = dados.types
    this.moves = {
        move: dados.moves.move,
        move2: dados.moves.move2,
    }
    this.base_experience = dados.base_experience
    this.stats = {
        hp: dados.stats.hp,
        atk: dados.stats.atk,
        def: dados.stats.def,
        satk: dados.stats.satk,
        sdef: dados.stats.sdef,
        speed: dados.stats.speed,
}
}

Matk(): number{
    if(this.stats.atk > this.stats.satk){
        return Math.floor(this.stats.atk / 4 ) 
    }else{
        return Math.floor(this.stats.satk / 4) 
    }
}


Mdef(): number{
    if(this.stats.def > this.stats.sdef){
        return Math.floor(this.stats.def / 8 ) 
    }else{
        return Math.floor(this.stats.sdef / 8) 
    }
}


atacar( vidaInimigo: number, defesa: number){
const vida = Math.floor(vidaInimigo - (this.Matk() - defesa / 8)) 

// Evita divisão por zero, caso o número seja 0
const x =  vidaInimigo !== 0 ? (this.Matk() / vidaInimigo) * 100 : 0;
 
const meuatk = Math.floor(this.Matk() - defesa / 8)

const tirou = Math.floor(x)

return { vida,  tirou, meuatk}
}

}