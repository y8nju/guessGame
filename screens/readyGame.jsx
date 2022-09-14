import { Button, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/customButton";
import Hedding from "../components/hedding";

function ReadyGame({onStart}) {
	return ( <View style={styles.readyContainer}>
		<View>
			<Hedding size="5">숫자 야구 게임</Hedding>
		</View>
		<View>
			<CustomButton onPress={onStart} bgColor="#6c63ff">START</CustomButton>
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