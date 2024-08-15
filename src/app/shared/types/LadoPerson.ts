export type LadoPerson = 'down' | 'left' | 'right' | 'up'

export type CharacterLugar = 'tenda' | 'elfa' | 'estatua' | 'criança' | 'vovo' | 'tarefas' | 'sair' | ''

export type Habilidades = 'ataqueInimigo' | 'ataqueMeu' | 'stats' | "" 

export type dadosPoke = {
    name: string,
    spritesFrente: string,
    spritesCosta: string,
    types: [
        {type: {name: string}},
    ],
    moves: {
        move: string,
        move2: string,
    },
    base_experience: number,
    stats: {
        hp : number,
        atk: number,
        def: number,
        satk: number,
        sdef: number,
        speed: number
    }
}