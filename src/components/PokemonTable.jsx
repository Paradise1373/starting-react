import useStore from '../store'

import PokemonRow from '../components/PokemonRow'

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon)
  const filter = useStore((state) => state.filter)
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon)
  
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
                onSelect={setSelectedPokemon}
              />
            )
          })}
      </tbody>
    </table>
  )
}

export default PokemonTable
