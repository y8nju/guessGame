import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/customButton";
import Hedding from "../components/hedding";

function EndGame({target, count, elapsed, onRestart}) {
    const restartHandle = () => {
        onRestart();
    }
    const size = 6;
    return ( <View style={styles.endContainer}>
        <View>
            <Hedding size={size} fColor="#1f9978">{target.join(' ')}</Hedding>
        </View>
        <View style={styles.imgContainer}>
            <Image source={require('../assets/images/good.png')}  style={styles.img} />
        </View>
        <View style={styles.scoreContainer}>
            <View style={styles.scoreWrap}>
                <Text style={styles.scoreText}>시도횟수</Text>
                <Text style={styles.scoreText}>{count}</Text>
            </View>
            <View style={styles.scoreWrap}>
                <Text style={styles.scoreText}>시간</Text>
                <Text style={styles.scoreText}>{elapsed} sec</Text>
            </View>
        </View>
            <View style={styles.buttonContainer}>
                <CustomButton bgColor="#1a1c3f" onPress={restartHandle}>다시하기</CustomButton>
            </View>
    </View> );
}
const styles = StyleSheet.create({
    endContainer: {
		paddingHorizontal: 32,
		flex:1,
		justifyContent: 'center',
        backgroundColor: '#fff'
    },
    imgContainer: {
        alignItems: 'center',
    },
    img: {
        width: 240,
        height: 240,
        borderRadius: 120
    },
    scoreContainer: {
        paddingHorizontal: 20
    },
    scoreWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    scoreText: {
        fontSize: 16,
        color: '#1a1c3f'
    },
    buttonContainer: {
    }

})
export default EndGame;