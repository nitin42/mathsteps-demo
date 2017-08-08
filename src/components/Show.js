import React from 'react';
import './Show.css';
	
// Show component for displaying the steps
let Show = ({ renderer }) => {
	return (
		<div>
			<div className='show-steps'>
				{renderer}
			</div>
		</div>
	);
};

export default Show;
