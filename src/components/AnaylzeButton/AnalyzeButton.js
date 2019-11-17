import React from 'react'

import './AnalyzeButton.css'

// import { analyze } from '../../../analyze'


export const AnalyzeButton = (state) => {
    console.log(state.text)
    const handleOnClick = () => {
        console.log('lol clicked')
    }
    return (
        <button onClick={() => handleOnClick() }
         className='Button'
        >
            {state.text}
        </button>
    );
  }