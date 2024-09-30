import { StyleSheet } from "react-native";
import { Colors, Constants } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    lottie: {
        height: Constants.SCREEN_HEIGHT / 2,
        width: Constants.SCREEN_WIDTH,
        alignSelf: 'center'
    },
    welcomeMessage: {
        margin: 10,
        fontSize: 15,
        color: Colors.BLACK
    }
})