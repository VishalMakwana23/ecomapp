import { StyleSheet } from "react-native";
import { Colors } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addBtn: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        zIndex: 1,
        backgroundColor: Colors.WHITE,
        borderRadius: 100
    },
    plusIcon: {
        height: 50,
        width: 50,
        tintColor: Colors.BLUE
    }
})