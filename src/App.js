import { useState } from 'react'

import pokemon from './pokemon.json'
import PropTypes from 'prop-types'

import './App.css'

const PokemonRow = ({ pokemon }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
    </tr>
  )
}

PokemonRow.propType = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
}

const App = () => {
  const [filter, setFilter] = useState('')

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
                return <PokemonRow key={pokemon.id} pokemon={pokemon} />
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
