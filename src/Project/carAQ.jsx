import React, { useState } from 'react'
import arrow from '../img/car/arrow.png'

const CarAQ = () => {
    const [isActive,setIsActive] = useState([0,0,0])
    function AQ(x){
        let b = [0,0,0]
        b[x] = 1 
        setIsActive(b);
    }
  return (
    <div className='car_FAQ'>
        <h2>FAQ</h2>
        <h3>Answers to frequently asked questions</h3>
        <div>
            <button className={isActive[0] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(0)}>
                1. About us?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[0] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>we understand the importance of having access to reliable and cost-effective transportation. That's why we strive to provide you with an exceptional car rental experience that offers unbeatable value. Our commitment to customer satisfaction, competitive pricing, and a wide range of vehicles makes us the preferred choice for all your car rental needs.</p>
            </div>

            <button className={isActive[1] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(1)}>
                2. Why Such a Low Value?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[1] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>We know that affordability is a top priority for our customers, which is why we have designed our pricing structure to offer you the lowest possible rates without compromising on quality or service.</p>
            </div>

            <button className={isActive[2] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(2)}>
                3. Advantages Over Competitors?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[2] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>Exceptional Customer Service: Our dedicated team of car rental professionals is committed to providing you with exceptional customer service. From the moment you reach out to us until you return the vehicle, we're here to assist you at every step of the way. We prioritize your satisfaction and strive to exceed your expectations.</p>
            </div>
        </div>
    </div>
  )
}

export default CarAQ