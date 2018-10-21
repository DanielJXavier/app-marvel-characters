import React from 'react'
import './Loading.sass'
import icon from '../assets/images/marvel.png'

export default () => (
  <div className="loading">
    <div className="load"></div>
    <div className="load reverse"></div>
    <img className="icon" alt="Marvel's icon" src={icon} />
  </div>
)
