// Forma larga de crear una clase
// export class Pokemon {  
//     public id: number;
//     public name: string;
//     constructor(id:number, name:string) {
//         this.id = id
//         this.name = name
//     }
// }
import axios from 'axios'
import { Move, PokeapiResponse } from '../intefaces/pokeapi-response.interface';


// Creando una clase de forma abreviada
export class Pokemon {

    get imageUrl():string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number, //readonly hace que la propiedad no pueda ser modificada
        public name:string
    ) {}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
        bulbasaur.speak() 
    }
    private speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{

        //const moves = 10
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/1')
        console.log(data.moves)
        return data.moves;

    }

}   

export const bulbasaur = new Pokemon(1, 'Bulbasaur')

bulbasaur.getMoves()
// bulbasaur.scream()
//bulbasaur.speak() da error porque speak solo se puede usar dentro de la clase

