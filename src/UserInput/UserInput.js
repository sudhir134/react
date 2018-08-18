import React from 'react';

const userinput = (props) => {
	return (
		<div className="UserInput">
			<input type="text" onChange={props.changeName} value={props.username}/>
		</div>
	);
}

export default userinput;