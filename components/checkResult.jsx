import { StyleSheet, Text, View } from "react-native";

function CheckResult({result}) {
    return ( <View style={styles.resultItem}>
        <View>
            <Text style={{fontSize: 20, color: '#2f2e41'}}>{result.number}</Text>
        </View>
        <View style={styles.details}>
                <Text style={[styles.circle, {backgroundColor: '#a7f3d0'}]}>{result.strike}S</Text>
                <Text style={[styles.circle, {backgroundColor: '#fde68a'}]}>{result.ball}B</Text>
                <Text style={[styles.circle, {backgroundColor: '#fecaca'}]}>{result.out}O</Text>
        </View>

    </View> );
}
const styles = StyleSheet.create({
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 12,
        borderColor: '#6c63ff33',
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#ffffffbd'
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    circle: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        textAlign:'center',
        padding: 4,
        fontSize: 18,
        borderRadius: 50,
        marginLeft: 8,
        fontWeight:'300',
        color: '#2f2e41'
    }
})

export default CheckResult;