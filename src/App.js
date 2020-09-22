import React from 'react';
import './App.css';

const App = () => {
  	return (
		<div className="container">
			<div className="container-form">
				<label>Digite o binário</label>
				<input type="text" maxlength="8" minlength="0" />
			</div>
		</div>
  	);
}

export default App;
