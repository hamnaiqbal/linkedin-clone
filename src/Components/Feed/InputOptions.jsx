import React from 'react';
import "./Inputopt.css";

function InputOptions({title,Icon,color}) {
  return (
    <div className='input_options'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
      
    </div>
  )
}

export default InputOptions
