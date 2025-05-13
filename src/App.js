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

const App = () => {
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

export default App
