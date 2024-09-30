import { StyleSheet } from "react-native";
import { Colors } from "../../common";

export default styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colors.WHITE,
    },
    productImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailsContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.BLACK,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.BLUE,
        marginBottom: 10,
    },
    rating: {
        fontSize: 16,
        color: Colors.GRAY,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: Colors.BLACK,
        marginBottom: 20,
    },
    addToCartButton: {
        backgroundColor: Colors.BLUE,
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