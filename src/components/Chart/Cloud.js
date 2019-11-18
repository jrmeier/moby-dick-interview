import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import './Chart.css'


export function Cloud(props) {
  return (
    <div className={'CloudContainer'}>
      <ReactWordcloud words={props.data} />
    </div>
  );
}