import React from 'react'

import './AnalyzeButton.css'



export const AnalyzeButton = (state) => {
    const handleOnClick = () => {
        console.log('lol clicked')
        // console.log(data)
    }
    return (
        <button onClick={() => handleOnClick() }
         className='Button'
        >
            {state.text}
        </button>
        
    );
  }