import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../common'

interface HeaderProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={Images.ARROW_LEFT} style={{ height: 30, width: 30, position: 'absolute', left: 0 }} />
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.BLACK,
        textAlign: 'center',
    }
})