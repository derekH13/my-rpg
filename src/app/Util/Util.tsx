import { error } from "console";
import { dadosPoke } from "../shared/types/LadoPerson";



export class Util {



    static randomNumber(min: number, max: number){
        //Math floor aredonda o numero para baixo
        //Math random retorna um numero de 0 á 1
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }




    static async requisicao( poke: string | number ){
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)

            if(!response.ok){
               throw new Error(`Falha na requisição ${response.status}`)
               return
            }

            const result = await response.json()

            const dados: dadosPoke = {
                name: result.name,
                spritesFrente: result.sprites.other.showdown.front_default,
                spritesCosta: result.sprites.other.showdown.back_default,
                types: result.types,
                moves: {
                    move: result.moves[this.randomNumber(1, 30)].move.name,
                    move2: result.moves[this.randomNumber(1, 30)].move.name,
                },
                base_experience: result.base_experience,
                stats: {
                    hp : result.stats[0].base_stat,
                    atk: result.stats[1].base_stat,
                    def: result.stats[2].base_stat,
                    satk: result.stats[3].base_stat,
                    sdef: result.stats[4].base_stat,
                    speed: result.stats[5].base_stat,
                }
            }


            
            return dados

        }catch(error){

        }
    }
}