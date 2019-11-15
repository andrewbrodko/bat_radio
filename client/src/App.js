import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

let n = 1;
function GetNextTrack() {
	return n++;
}

function App(props) {
	const [src, setSrc] = useState('https://ib17.hip-hop.ru//upload/music/ib17_r1_Iamjmarr_d8b5f17.mp3');

	return (
		<div className="App">
			<audio controls autoPlay id="audio" src={src} onEnded={
				_ => {
					fetch('/api/trackinfo?id=' + GetNextTrack())
						.then(info => info.json())
						.then(data => {
							setSrc('https://ib17.hip-hop.ru/' + data.path);
						});
				}
			}>
			</audio>
		</div>
	);
}

export default App;
