// import { charmander } from './base/04-dependency-injection'
// import { charmander } from './base/05-decorators'
import { charmander } from './base/06-decorators-2'
import './style.css'

//import { name, age, confirmado, templateString } from './base/01-tipos_de_datos'
//import { pokemons, pikachu } from './base/02-objetos'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <h2>Hello ${charmander.name}</h2>
  </div>
`
