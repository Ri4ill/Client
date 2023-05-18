import React from 'react'
import { Link } from 'react-router-dom'
import CAR from '../img/CAR.png'

const Project = () => {
  return (
    <div className='Portfolio' id='Project'>
      <h2>Portfolio</h2>
      <h3>Each project is unique in development</h3>
      <div className='container_portfolio'>
        <div className='project_flex'>
            <div>
                <div className='imgCAR'><img src={CAR} alt="CarProject" /></div>
                <div className='project_text'>
                  <h3>Car</h3>
                  <Link to="/Car">Demo </Link> 
                  <a href="https://github.com/Ri4ill/Car"> Code</a>
                </div>
            </div>
            <div >
                <div>
                  <h3>Car</h3>
                </div>
                <div>photo</div>
            </div>
            <div>
                <div>photo</div>
                <div>
                  <h3>Car</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project