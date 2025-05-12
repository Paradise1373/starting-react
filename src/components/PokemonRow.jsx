import PropTypes from 'prop-types'
import { Button } from '@mui/material'

import PokemonType from '../PokemonType'

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <>
      <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
        <td>
          <Button
            variant='contained'
            color='primary'
            onClick={() => onSelect(pokemon)}
          >
            More Information
          </Button>
        </td>
      </tr>
    </>
  )
}

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
  onSelect: PropTypes.func.isRequired,
}

export default PokemonRow
