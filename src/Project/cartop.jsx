import React from 'react'
import CarOk from '../img/car/carMain_OK.png'

const Cartop = () => {
  return (
    <div className='car_top'>
        <div className='car_top_text'>
            <div className='car_top_text_h'>
                <h3>Plan your trip now</h3>
                <h2>
                    Save big with our
                </h2>
                <h2>
                    car rental
                </h2>
                <p>Rent the car of your dreams</p>
            </div>
            <div className='car_top_button'>
                <button>RESERVE NOW</button>
            </div>
        </div>
        <div>
            <img src={CarOk} alt="Car" className='car_top_png'/>
        </div>
    </div>
  )
}

export default Cartop