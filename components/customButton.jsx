import { Pressable, StyleSheet, Text, View } from "react-native";

function CustomButton({children, onPress, bgColor}) {
	//children은 porps 안에 있는 속성 값
	return ( <View style={styles.buttonContainer}>
		<Pressable onPress={onPress} android_ripple={{color: '#111'}}  style={{backgroundColor: bgColor}}>
			<View style={styles.buttonBg}>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</Pressable>
	</View> );
}
const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 8,
		marginVertical: 8,
		overflow: 'hidden'
	},
	buttonBg: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		// elevation: 1
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		textAlign: 'center',
		fontWeight: '900'
	}
})

export default CustomButton;