import { Button, Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from "../components/customButton.android";
import Hedding from "../components/hedding";

// Dimensions
// 현재 디바이스의 size 제공
	// screen: 상태바, 툴바를 포함한 전체 영역
	// const screen = Dimensions.get('screen');
	// window:상태바와, 툴바를 제외한 실제 view 영역

// app.json 
// orientation을 landscape 혹은 portrait 하나로 고정을 해두었다면
// 이것만 해도 됨
const {width, height} = Dimensions.get('window'); 
console.log(width, height);
// 만일 orientation을 default로 해두었다면
// 동적으로 변경을 해주어야 함

function ReadyGame({onStart}) {
	const curr = useWindowDimensions();
	console.log(curr)

	const size = width < 370 ? 5: 6
	return ( <View style={[styles.readyContainer, {paddingHorizontal: curr.width / 10}]}>
		<View>
			<Hedding size={size} fColor="#1a1c3f">숫자 야구 게임</Hedding>
		</View>
		<View>
			<CustomButton onPress={onStart} bgColor="#1f9978">
				START <Ionicons name="play" size={18} color="#fff" />
			</CustomButton>
		</View>
	</View> );
}
const styles = StyleSheet.create({
	readyContainer: {
		paddingHorizontal: 32,
		flex:1,
		justifyContent: 'center',
	}
});
export default ReadyGame;