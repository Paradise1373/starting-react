import { useContext } from 'react'

import PokemonContext from '../PokemonContext'

import PokemonRow from '../components/PokemonRow'

const PokemonTable = () => {
  const {
    state: { filter, pokemon },
    dispatch,
  } = useContext(PokemonContext)

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
