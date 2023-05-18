import React from 'react'
import CarforI from '../img/car/carforI.png'
import Location from '../img/car/location.png'
import Calendar from '../img/car/calendar.png'

const Carfind = () => {
  return (
    <div className='car_find'>
        <h3>Book a car</h3>
        <div className='car_find_box'>
            <div>
            <div>
                <img src={CarforI} alt="car" className='car_find_png'/>
                <p className='car_find_box_text' id='type'>type</p>
                <input type="search" list="type_car"   id='car_find_box_input'/>
                <datalist id="type_car">
                 <option value='BMW' />
                 <option value='MERS' />
                 <option value='VW' />
                 <option value='AUDI' />
                 <option value='NISSAN' />
                 <option value='OPEL' />
                </datalist>
            </div>
            <div>
                <img src={Location} alt="Location" className='car_find_png'/>
                <p className='car_find_box_text'>pick-up</p>
                <input type="search" list="car_siti"  id='car_find_box_input'/>
                <datalist id="car_siti">
                 <option value='Tbilisi' />
                 <option value='Kiev' />
                 <option value='London' />
                 <option value='Minsk' />
                 <option value='Batumi' />
                 <option value='SPB' />
                </datalist>
            </div>
            <div>
                <img src={Location} alt="Location" className='car_find_png'/>
                <p className='car_find_box_text'>drop-of</p>
                <input type="search" list="car_siti"   id='car_find_box_input'/>
            </div>
            </div>
            <div>
            <div>
                <img src={Calendar} alt="Calendar" className='car_find_png'/>
                <p className='car_find_box_text'>pick-up</p>
                <input type="date"  id='car_find_box_input'/>
            </div>
            <div>
                <img src={Calendar} alt="Calendar" className='car_find_png'/>
                <p className='car_find_box_text'>drop-of</p>
                <input type="date"  id='car_find_box_input'/>
            </div>
            <div>
                <button className='car_find_button'>FIND NOW</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Carfind