import React, { useState } from 'react';

const Input3 = ({userInputs, handleInputChange}) => {

	return (
		<div className='pages'>
			<div>
				<h3>How did that make you feel?</h3>
				<p>Hopefully not afraid!</p>
			</div>

			<form>
				<textarea
          name={5}
					cols='30'
					rows='10'
					onChange={handleInputChange}
					value={userInputs[5].text}></textarea>
				<button type='submit'>See what we get</button>
			</form>
			<p>pssssst! You can fill in that box too!</p>
		</div>
	);
};

export default Input3;
