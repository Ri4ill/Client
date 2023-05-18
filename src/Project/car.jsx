import React from 'react'
import CarMain from './carMain'
import Carfoother from './carfoother'
import Carheader from './carheader'
import Cartop from './cartop'
import Carfind from './carfind'
import CarAQ from './carAQ'

const Car = () => {
  return (
    <div>
        <Carheader/>
        <Cartop/>
        <Carfind/>
        <CarMain/>
        <CarAQ/>
        <Carfoother/>
    </div>
  )
}

export default Car
