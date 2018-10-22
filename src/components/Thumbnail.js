import React from 'react'

import './Thumbnail.sass'

const Thumbnail = ({ thumbnail, name }) => (
  <img
    className={`Thumbnail ${thumbnail.path.indexOf('image_not_available') !== -1 ? 'left' : ''} ${thumbnail.path.indexOf('4c002e0305708') !== -1 ? 'right' : ''}`}
    src={`${thumbnail.path}.${thumbnail.extension}`}
    alt={`${name} thumbnail`}
  />
)

export default Thumbnail
