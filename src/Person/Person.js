import React from 'react';

const person = (props) => {
return (
	<div className="Person">
		<button onClick={props.click}>person click</button>
		<p>Name:{props.name}</p>
		<p>Age:{props.age}</p>
		<input type="text" onChange={props.changed} value={props.name}/>
	</div>
	);
}

export default person;