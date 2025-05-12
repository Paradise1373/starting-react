import PropTypes from 'prop-types'

const PokemonType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    'SP. Attack': PropTypes.number.isRequired,
    'SP. Defense': PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
})

export default PokemonType
