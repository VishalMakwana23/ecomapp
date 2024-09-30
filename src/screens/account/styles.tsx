import { StyleSheet } from "react-native";
import { Colors } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: Colors.BLUE,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.BLACK,
    },
    email: {
        fontSize: 16,
        color: Colors.GRAY,
    },
    menu: {
        borderTopWidth: 1,
        borderTopColor: Colors.LIGHT_GRAY,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GRAY,
    },
    menuText: {
        fontSize: 18,
        color: Colors.BLACK,
        textAlign: 'center',
    },

})