import React from 'react';
import './Radio.css';

/** Radio component for switching between simplify and solve option*/
let Radio = ({ simplify, handleSimplify, solve, handleSolve }) => {
	return (
    <div className='field has-addons'>
      <label className='radio options'>
        <input
          name='simplify'
          type='radio'
          checked={simplify}
          onChange={handleSimplify}
        />
        <span className='option-name'>Simplify Expression</span>
      </label>
      <label className='radio options'>
        <input
          name='solve'
          type='radio'
          checked={solve}
          onChange={handleSolve}
        />
        <span className='option-name'>Solve Equation</span>
      </label>
    </div>
	);
}

export default Radio;
