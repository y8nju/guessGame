import { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import CheckResult from "../components/checkResult";
import NumberInput from "../components/numberInput";

function PlayGame({target}) {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([]);
	const enterNumberHandle = (input) => {
		setInput(input);
		if(history.find((data) => data.number === input)){
			Alert.alert("다시 입력하세요", `${input}은 이미 확인하셨습니다`);
			return;
		}
		const inputArr = Array.from(input.toString()).map(Number);
		let strike = 0;
		let ball = 0;
		let out = 0;
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
		setHistory((curr) => {
			return [log, ...curr];
		})
	}
	console.log(target)
	console.log(history);
	return ( <View>
		<NumberInput onEnter={enterNumberHandle}/>
		<FlatList data={history} renderItem={({index, item}) => {
			return <CheckResult key={index} result={item} />
		}} style={{padding: 20}}></FlatList>
	</View> );
}

export default PlayGame;