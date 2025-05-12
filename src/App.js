import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { CssBaseline } from '@mui/material'

import styled from '@emotion/styled/macro'

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

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedPokemon: null,
  },
  action
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload,
      }
    default:
      return state
  }
}

const store = configureStore({ reducer: pokemonReducer})

const App = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon)

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

  if (!pokemon) {
    return <div>Loading Data</div>
  }

  return (
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
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
