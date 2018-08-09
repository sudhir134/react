import React from 'react';

const person = (props) => {
return (
	<div className="person">
		<p>Name:{props.name}</p>
		<p>Age:{props.age}</p>
	</div>
	);
}

export default person;