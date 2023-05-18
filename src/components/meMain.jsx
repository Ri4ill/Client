import React from 'react'
import photo from '../img/photo.jpeg'
import html from '../img/icons8-html-5-48.png'
import css from '../img/icons8-css3-48.png'
import js from '../img/icons8-javascript-48.png'
import react from '../img/icons8-react-80.png'
import sass from '../img/icons8-sass-avatar-48.png'
const Me = () => {
  return (
    <div className='me' id='Home'>
        <div>
            <div className='me_flex'>
                <div className='me_text'>
                    <h1>Front-End React <br/>
                    Developer</h1>
                    <p>Hi, i'm Richard Safu. <br/>a perspective front-end developer</p>
                </div>
                <div ><img class="ramka-1" src={photo} alt="photoMe" /></div>
            </div>
            <div className='flex me_stack_photo'>
                <h2 className='me_stack'>Tech Stack</h2>
                
                    <img  src={html} alt="html" />
                    <img  src={css} alt="css" />
                    <img  src={js} alt="js" />
                    <img  src={react} alt="react" />
                    <img  src={sass} alt="sass" />
            </div>
        </div>
    </div>
  )
}

export default Me