import { StyleSheet, Text, View } from "react-native";

function Hedding({children, size}) {
    return ( <View>
        <Text style={[styles.hedding, {fontSize: size*8}]}>{children}</Text>
    </View> );
}
const styles = StyleSheet.create({
    hedding: {
        fontWeight: '900',
        textAlign: 'center'
    }
})

export default Hedding;