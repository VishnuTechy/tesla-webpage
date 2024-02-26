import React from 'react'
import './About.css';
function About() {
  return (
    <div className='about'>
        <h1 >About</h1>
        <p>
Introducing the Tesla Model S: Redefining the Art of Driving.

Embark on a journey of unparalleled innovation with the Tesla Model S. Seamlessly blending cutting-edge technology with exquisite design, the Model S redefines the automotive landscape. Feel the exhilaration of instant acceleration, luxuriate in the meticulously crafted interior, and embrace the sustainable future of driving—all in one remarkable vehicle. Elevate your driving experience with the Model S, where every moment behind the wheel is an invitation to the future.</p>
    <h2 >Feedback</h2>
    <div className="input-container">
      <input type="text" id="input" required />
      <label htmlFor="input" className="label">
        Name
      </label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input type="text" id="input2" required />
      <label htmlFor="input2" className="label">
        email@here.com
      </label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
    <textarea name="" id="feedback" rows="10" cols="50" placeholder='Message...'></textarea>

    </div>
    <div className="input-container">
    <button>Submit</button>

    </div>
    </div>
  )
}

export default About