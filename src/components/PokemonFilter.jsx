import { useContext } from 'react'
import styled from '@emotion/styled/macro'

import PokemonContext from '../PokemonContext'

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
`

const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext)

  return (
    <Input
      type='text'
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  )
}

export default PokemonFilter
