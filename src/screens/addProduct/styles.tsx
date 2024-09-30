import { StyleSheet } from "react-native";
import { Colors } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.BLACK,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: Colors.WHITE,
    },
    button: {
        backgroundColor: Colors.blue,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 16,
    },

})