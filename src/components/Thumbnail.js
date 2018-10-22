import React from 'react'
import PropTypes from 'prop-types'

import './Thumbnail.sass'

const Thumbnail = ({ thumbnail, name }) => (
  <img
    className={`Thumbnail ${thumbnail.path.indexOf('image_not_available') !== -1 ? 'left' : ''} ${thumbnail.path.indexOf('4c002e0305708') !== -1 ? 'right' : ''}`}
    src={`${thumbnail.path}.${thumbnail.extension}`}
    alt={`${name} thumbnail`}
  />
)

Thumbnail.propTypes = {
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string
}

export default Thumbnail
