import { useDispatch, useSelector } from 'react-redux'

import PokemonRow from '../components/PokemonRow'

const PokemonTable = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.pokemon)
  const filter = useSelector((state) => state.filter)

  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 17)
          .map((pokemon) => {
            return (
              <PokemonRow
                key={pokemon.id}
                pokemon={pokemon}
                onSelect={(pokemon) =>
                  dispatch({
                    type: 'SET_SELECTED_POKEMON',
                    payload: pokemon,
                  })
                }
              />
            )
          })}
      </tbody>
    </table>
  )
}

export default PokemonTable
