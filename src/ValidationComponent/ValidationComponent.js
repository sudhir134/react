import React from 'react';

const ValidationComponent = (props) => {
	let message = null;
	if(props.textLength > 5){
		message = "Text is long enough";
	} else {
		message = "Text is too short";
	}
	return (
		<div className="Person">
			<h3>{message}</h3>
		</div>
	);
}

export default ValidationComponent;