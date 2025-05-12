import { useState, useEffect, useReducer } from 'react'
import styled from '@emotion/styled/macro'
import { CssBaseline } from '@mui/material'

import PokemonContext from './PokemonContext'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'

import './App.css'

const Title = styled.h1`
  text-align: center;
`
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    default:
      throw new Error('No action!')
  }
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [pokemon, setPokemon] = useState(null)
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  })

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      )
  }, [])

  if (!state.pokemon) {
    return <div>Loading Data</div>
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        setFilter,
        selectedPokemon,
        setSelectedPokemon,
        pokemon,
        setPokemon,
        state,
        dispatch,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  )
}

export default App
