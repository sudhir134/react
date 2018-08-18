import React from 'react';
import './UserOutput.css'
const useroutput = (props) => {
	return (
		<div className="UserOutput">
			<span className="username">Username is : </span> {props.username}
			<p> {props.content}</p>
		</div>
	);
}

export default useroutput;