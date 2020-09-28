import React, {useState} from 'react';
import './App.css';

const App = () => {

	const [binario, setBinario] = useState('');
	const [decimal, setDecimal] = useState(0);

	const resultTheBin = (value) => {
		if(value.length < 9){
			let val = value.replace(/[2-9]/g,'')
			let dec = 0

			setBinario(val)

			for(let i = val.length - 1; i >= 0; i--){
				dec += parseInt(val[i]) * Math.pow(2, val.length - 1 - i)
			}

			setDecimal(dec)
		}else{
			alert("Ops! digite somente 8 dígitos em binário")
		}
	}
	
	return (
		<div className="container">
			<div className="container-form">
				<label>Digite o binário</label>
				<input onChange={(e) => resultTheBin(e.target.value)} type="number" maxLength="8" value={binario} />
			</div>
			<div className="container-result">
				<span>{decimal}</span>
			</div>
		</div>
  	);
}

export default App;
