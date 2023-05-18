import React, { useState } from 'react'
import IconCar from '../img/car/iconCar.png'
const Carheader = () => {
    const [burger,setBurger] = useState(0)
    function Burger(x){
        setBurger(x)
    }
  return (
    <div className='car_header'>
        <div className='car_header_logo'>
            <img src={IconCar} alt="logo"/>
        </div>
        <div className='car_header_buttons'>
            <button>Home</button>
            <button>About</button>
            <button>Cars</button>
            <button>Contact</button>
        </div>
        <div className='car_header_loginBox'>
            <button className='car_header_sign'>Sign in</button>
            <button className='car_header_reg'>Register</button>
        </div>
        <button onClick={()=>Burger(1)} className={burger ? "car_burger_but_activ": "car_burger_but"}>X</button>
        <div className={burger ? "car_burger_activ": "car_burger"}>
                <button onClick={()=>Burger(0)} className='car_burger_exit'>X</button>
                <button>Home</button>
                <button>About</button>
                <button>Cars</button>
                <button>Contact</button>
        </div>
    </div>
  )
}

export default Carheader