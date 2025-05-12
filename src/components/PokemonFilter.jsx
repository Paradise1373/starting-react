import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled/macro'

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
`

const PokemonFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  return (
    <Input
      type='text'
      value={filter}
      onChange={(evt) =>
        dispatch({
          type: 'SET_FILTER',
          payload: evt.target.value,
        })
      }
    />
  )
}

export default PokemonFilter
