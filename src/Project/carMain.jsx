import React, { useState } from 'react'
import BMWF22 from '../img/car/bmw.png'
import AudiA4 from '../img/car/Audi.png'
import VWPASSAT from '../img/car/VW.png'
import NISSANJ11 from '../img/car/Nissan.png'
import NISSANJ from '../img/car/NissanJ.png'
import OPEL from '../img/car/Opel.png'


const CarMain = () => {
    const [isActive, setIsActive] = useState([1,0,0,0,0,0]);
    const [carI,setCarI]= useState({
        name:"VW Passat",
        mark:"VW",
        year:"2020",
        door:"4",
        ac:"Yes",
        transmission:"Auto",
        fuel:"Petrol",
        src:VWPASSAT,
        price:"1$"
    })
    const arr = {
        0:{
            name:"VW Passat",
            mark:"VW",
            year:"2020",
            door:"4",
            ac:"Yes",
            transmission:"Auto",
            fuel:"Petrol",
            src:VWPASSAT,
            price:"1$"
        },
        1:{
            name:"Audi A4",
            mark:"Audi",
            year:"2021",
            door:"4",
            ac:"Yes",
            transmission:"Auto",
            fuel:"Petrol",
            src:AudiA4,
            price:"2$"
        },
        2:{
            name:"BMW F22",
            mark:"BMW",
            year:"2021",
            door:"2",
            ac:"Yes",
            transmission:"Manual gearbox",
            fuel:"Petrol",
            src:BMWF22,
            price:"3$"
        },
        3:{
            name:"Nissan qashqai j11",
            mark:"Nissan",
            year:"2020",
            door:"4",
            ac:"Yes",
            transmission:"Manual gearbox",
            fuel:"Petrol",
            src:NISSANJ11,
            price:"4$"
        },
        4:{
            name:"Nissan juke",
            mark:"Nissan",
            year:"2014",
            door:"2",
            ac:"No",
            transmission:"Auto",
            fuel:"Petrol",
            src:NISSANJ,
            price:"5$"
        },
        5:{
            name:"Opel grandland x",
            mark:"Opel",
            year:"2021",
            door:"4",
            ac:"Yes",
            transmission:"Auto",
            fuel:"Petrol",
            src:OPEL,
            price:"6$"
        }
    }

    const CarInfo = (x) =>{
        setIsActive([0,0,0,0,0,0]);
        let b = [0,0,0,0,0,0]
        b[x] = 1 
        setIsActive(b);
        setCarI(Object.assign({},arr[x]));
    }
  return (
    <div className='car_list'>
        <div className='car_buttons'>
            <button onClick={()=>{CarInfo(0)}}  className={isActive[0] ? 'car_button_activ' : 'car_button'}>{arr[0].name}</button><br/>
            <button onClick={()=>{CarInfo(1)}}  className={isActive[1] ? 'car_button_activ' : 'car_button'}>{arr[1].name}</button><br/>
            <button onClick={()=>{CarInfo(2)}}  className={isActive[2] ? 'car_button_activ' : 'car_button'}>{arr[2].name}</button><br/>
            <button onClick={()=>{CarInfo(3)}} className={isActive[3] ? 'car_button_activ' : 'car_button'}>{arr[3].name}</button><br/>
            <button onClick={()=>{CarInfo(4)}}className={isActive[4] ? 'car_button_activ' : 'car_button'}>{arr[4].name}</button><br/>
            <button onClick={()=>{CarInfo(5)}} className={isActive[5] ? 'car_button_activ' : 'car_button'}>{arr[5].name}</button>
            <div className='car_phone_but'><button>RESERVE NOW</button></div>
        </div>
        <div className='car_photo_div'>
        <img src={carI.src} alt={carI.name} className='car_photo'/>
        </div>
        <div className='car_info'>
            <div className='car_price'><h4>{carI.price} / rent per day</h4> </div>
            <div className='car_info_list'>
                <div><p>Model</p>  {carI.name}</div>
                <div><p>Mark</p>   {carI.mark}</div>
                <div><p>Year </p>  {carI.year}</div>
                <div><p>Doors</p>   {carI.door}</div>
                <div><p>AC</p>   {carI.ac}</div>
                <div><p>Transmission</p>   {carI.transmission}</div>
                <div><p>Fuelv</p>  {carI.fuel}</div>
            </div>
            <div className='car_reserve'><h3>RESERVE</h3></div>
        </div>
    </div>
  )
}

export default CarMain