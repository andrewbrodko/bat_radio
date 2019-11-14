import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	fetch(`/api/data?round_id=1&page=2&sort=-judge_rating_sum`)
	.then(resp => resp.json())
	.then(resp => console.log(resp))
	.catch(err => console.error(err))
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
