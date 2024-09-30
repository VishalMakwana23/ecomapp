import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../common'

interface CustomButtonProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.BLUE
    },
    title: {
        color: Colors.WHITE,
        fontWeight: '500',
        fontSize: 16
    }
})