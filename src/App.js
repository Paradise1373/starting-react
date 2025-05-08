import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
// import pokemon from './pokemon.json'

import './App.css'

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select!</button>
      </td>
    </tr>
  )
}

PokemonRow.propType = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
}

const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        {Object.keys(base).map((key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{base[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

PokemonInfo.prototype = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'SP. Attack': PropTypes.number.isRequired,
    'SP. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((res) => res.json())
      .then((data) => setPokemon(data))
  }, [])

  return (
    <div
      style={{
        margin: 'auto',
        width: '800px',
        paddingTop: '1rem',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          ColumnGap: '1rem',
        }}
      >
        <table width='100%'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon
              .filter((pokemon) =>
                pokemon.name.english
                  .toLocaleLowerCase()
                  .includes(filter.toLocaleLowerCase())
              )
              .slice(0, 17)
              .map((pokemon) => {
                return (
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                )
              })}
          </tbody>
        </table>
        <div>{selectedItem && <PokemonInfo {...selectedItem} />}</div>
      </div>
    </div>
  )
}

export default App
