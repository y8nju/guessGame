import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import PlayGame from './screens/playGame';
import ReadyGame from './screens/readyGame';
import EndGame from './screens/endGame';
import { Jua, useFonts }  from '@expo-google-fonts/inter';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Jua': require('./assets/fonts/Jua-Regular.ttf')
	});

	const [target, setTarget] = useState(null);
	const [startAt, setStartAt] = useState(0);
	const [count, setCount] = useState(0);
	const [onGame, setOnGame] = useState(true);

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
		setOnGame(true);

		console.log(ar);
	}

	const endHandle = (triedCount) => {
		setCount(triedCount);
		setOnGame(false);
	}

	let currentScreen = null
	if(!target) {
		currentScreen = <ReadyGame onStart={targetCreateHandle} />
	}else {
		if(onGame) {
			currentScreen =<PlayGame target={target} oneEnd={endHandle}/>
		}else {
			const elapsed = ((Date.now() - startAt) / 1000).toFixed(1);
			currentScreen =<EndGame target={target} count={count} elapsed={elapsed}
			onRestart={()=> setTarget(null)} />
		}
	}

	if(!fontsLoaded) {
		return <StatusBar />
	}
	return (<>
		<StatusBar style='auto' />
		<KeyboardAvoidingView style={{flex:1}}>
			<View style={styles.container}>
				<ImageBackground source={require('./assets/images/bgImg.png')}
					resizeMode="cover"  style={styles.bgImg} imageStyle={{opacity:0.4}}>
					{currentScreen}
				</ImageBackground>
			</View>
		</KeyboardAvoidingView>
	</>
	)
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
