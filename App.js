import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PlayGame from './screens/playGame';
import ReadyGame from './screens/readyGame';

export default function App() {
	const [target, setTarget] = useState(null);
	const [startAt, setStartAt] = useState(0);
	const targetCreateHandle = () => {
		const ar = [];
		while(ar.length < 3) {
			let val = Math.floor(Math.random()*10);
			if(!ar.includes(val)) {
				ar.push(val);
			}
		}
		setTarget(ar);
		setStartAt(Date.now());
		console.log(ar);
	}
	let currentScreen = <ReadyGame onStart={targetCreateHandle} />
	if(target) {
		currentScreen =<PlayGame target={target}/>
	}
	return (<>
		<StatusBar style='auto' />
		<View style={styles.container}>
			<ImageBackground source={require('./assets/images/bgImg.png')}
				resizeMode="cover"  style={styles.bgImg} imageStyle= {{opacity:0.5}}>
				{currentScreen}
			</ImageBackground>
		</View>
	</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	bgImg: {
		flex: 1,
	}
});
