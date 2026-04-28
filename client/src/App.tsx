import { useEffect } from 'react'

import "./App.css"
import { MyHeader } from './components/MyHeader'
import { SignupLoginCard } from './components/SignupLoginCard'

function App() {

  const getTwoRandomPokemon = (allPokemon: []) => {
    let pokemon1 = Math.floor(Math.random() * allPokemon.length)
    let pokemon2 = Math.floor(Math.random() * allPokemon.length)
    let poke1data = allPokemon[pokemon1]
    let poke2data = allPokemon[pokemon2]
    console.log(poke1data, poke2data)
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res => res.json())
    .then((data) => {
      getTwoRandomPokemon(data.results)
      console.log(data)
    })
  }, [])

  return (
    <>

      <MyHeader />
      <SignupLoginCard />

    </>

  )
}

export default App