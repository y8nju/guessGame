import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomButton from "./customButton";

function NumberInput({onEnter}) {
	const [num, setNum] = useState("");
	const changeHandle = (txt) => {
		if(/^\d{1,3}$/.test(txt) || txt === "") {
			setNum(txt)
		}
	}
	const pressHandle = (txt) => {
		if(num.length === 3) {
			onEnter(txt);
			setNum("");
		}
	}
	return ( <View style={styles.numberContainer}>
		<View>
			<TextInput maxLength={3} keyboardType="number-pad" 
				value={num}
				onChangeText={changeHandle}
				style={styles.textInput}/>
		</View>
		<View>
			<CustomButton onPress={()=>pressHandle(num)} bgColor="#2f2e41">CHECK</CustomButton>
		</View>
	</View> );
}
const styles = StyleSheet.create({
	numberContainer: {
		marginTop: 48,
		alignItems: 'center',
		backgroundColor: '#6c63ff33',
		paddingVertical: 16
	},
	textInput: {
		width: 200,
		fontSize: 48,
		textAlign: 'center',
		borderBottomColor: "#2f2e41",
		color: '#2f2e41',
		borderBottomWidth: 2, 
		padding: 6,
	}
})

export default NumberInput;