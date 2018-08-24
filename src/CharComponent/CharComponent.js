import React from 'react';

const CharComponent = (props) => {
	return (
		<div style={props.charStyle} onClick={props.removeClick}>
			<h2>{props.char}</h2>
		</div>
	);
}

export default CharComponent;