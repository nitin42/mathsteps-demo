import React from 'react';
import styled from 'styled-components';

const Error = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin-bottom: 5px;
`

const styles = {
	noerror: {
		outline: 'none',
		marginTop: '30px',
	},
	error: {
		borderColor: 'red',
		marginTop: '30px',
	},
};

let Search = ({ value, handleChange, handleClick, error }) => {
	return (
		<div>
			<div className="field has-addons">
				<p className="control">
					<input
						style={error ? styles.error : styles.noerror}
						className="input"
						type="text"
						placeholder="Start here"
						value={value}
						onChange={handleChange}
					/>
				</p>
				<p className="control">
					<button className="button is-info" style={{ marginTop: '30px' }} onClick={handleClick}>
						Get steps
					</button>
				</p>
			</div>
			<Error>
				{error ? <p><span role="img" aria-label="warning">⚠️</span>{" "}Invalid equation</p> : null}
			</Error>
		</div>
	);
};

export default Search;
