import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
console.log(Platform.OS)

function CustomButton({children, onPress, bgColor}) {
	//children은 porps 안에 있는 속성 값
	return ( <View style={styles.buttonContainer}>
		<Pressable onPress={onPress}
			style={({pressed}) => 
			pressed? [{backgroundColor: bgColor}, {opacity: 0.8}] : {backgroundColor: bgColor}}>
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
		overflow: 'hidden',
		backgroundColor: '#111'
	},
	buttonBg: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		// elevation: 1
	},
	buttonText: {
		color: '#fff',
        fontFamily: 'Jua',
		fontSize: 16,
		textAlign: 'center',
		letterSpacing: 1
	}
})

export default CustomButton;