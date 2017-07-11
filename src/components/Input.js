import React from 'react';
import './Search.css';

/** Input component for receiving the user input  */
let Input = ({ value, handleMathStringChange, getSteps }) => {
	return (
    <div className='field has-addons adjust-top'>
      <p className='control'>
        <input
          className='input'
          type='text'
          placeholder='Start here'
          value={value}
          onChange={handleMathStringChange}
        />
      </p>
      <p className='control'>
        <button
          className='button is-info'
          onClick={getSteps}
        >
          Get steps
        </button>
      </p>
    </div>
	);
}

export default Input;
