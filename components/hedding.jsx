import { StyleSheet, Text, View } from "react-native";

function Hedding({children, size, fColor}) {
    
    return ( <View>
        <Text style={[styles.hedding, {fontSize: size*8, color: fColor}]}>{children}</Text>
    </View> );
    
}
const styles = StyleSheet.create({
    hedding: {
        textAlign: 'center',
        fontFamily: 'Jua',
    }
})

export default Hedding;