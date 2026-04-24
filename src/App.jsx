import { useEffect } from 'react'

import './App.css'
import { MyHeader } from './components/MyHeader'
import { SignupLoginCard } from './components/SignupLoginCard'

function App() {

  // const getTwoRandomPokemon = (pokemon1, pokemon2) => {
    
  // }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res => res.json())
    .then((data) => {
      // getTwoRandomPokemon(pokemon1, pokemon2)
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
