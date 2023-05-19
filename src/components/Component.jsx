import React from 'react'
import './Component.css'
import RightFirst from './RightFirst'

function Component() {
  return (
    <div className='body'>
        <div className='containerLeft'>
            <h6>Workflow</h6> <br />
            <h1>Create at <br/> the speed <br/> of thought.</h1> <br />
            <p>Focus on your getting your thoughts out and crafting the best <br /> message while Chronicle does the heavy lifting for you</p>
        </div> 
        <br />
    <RightFirst/>
    </div>
  )
}

export default Component