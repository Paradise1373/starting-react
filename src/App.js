import pokemon from './Pokemon.json'

import './App.css'

const App = () => {
  return (
    <div
      style={{
        margin: 'auto',
        width: '800px',
        paddingTop: '1rem',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon) => {
            ;<tr>
              <td>{pokemon.name.english}</td>
              <td>{pokemon.type.join(', ')}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
