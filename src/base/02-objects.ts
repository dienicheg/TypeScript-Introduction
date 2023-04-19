export const pokemonIds = [1, 21, 20, 30, 48]

pokemonIds.push(+'1')



interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'Pikachu',
    age: 1
}
export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 2
}


export const pokemons: Pokemon[] = [];

pokemons.push(pikachu, charmander)

console.log(pokemons)
