import React from 'react';
import ReactWordcloud from 'react-wordcloud';

// import words from './words';

export function Cloud(props) {
  return (
    <div style={{ height: 800, width: 1000 }}>
      <ReactWordcloud words={props.data} />
    </div>
  );
}