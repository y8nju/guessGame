import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import CheckResult from "../components/checkResult";
import NumberInput from "../components/numberInput";

function PlayGame({target, onEnd}) {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([]);
	const [outCount, setOutCount] = useState(0);
	
	const enterNumberHandle = (input) => {
		let strike = 0;
		let ball = 0;
		let out = outCount; // useState가 비동기!
		setInput(input);

		if(history.find((data) => data.number === input)){
			Alert.alert("다시 입력하세요", `${input}은 이미 확인하셨습니다`);
			return;
		}
		const inputArr = Array.from(input.toString()).map(Number);
		for(let i = 0; i< target.length; i++) {
			if(target[i] === inputArr[i]) {
				strike++
			}else if(target.includes(inputArr[i])) {
				ball++
			}
		}
		if(ball === 0 && strike === 0) {
			out++
		}
		const log = {
			number: input,
			strike: strike, 
			ball: ball,
			out: out
		}
		setHistory((curr) =>  [log, ...curr]);
		setOutCount(out);
	}
	useEffect(()=> {
		console.log(outCount);
		if(history[0]?.strike === 3 || outCount === 3 ){
			onEnd(history.length, outCount);
		}
	}, [history])
	console.log(target)

	return ( <View style={{flex:1}}>
		<NumberInput onEnter={enterNumberHandle}/>
		<FlatList data={history} renderItem={({index, item}) => {
			return <CheckResult key={index} result={item} />
		}}style={{paddingHorizontal: 20, marginTop:20, flex:1}}></FlatList>
	</View> );
}

export default PlayGame;