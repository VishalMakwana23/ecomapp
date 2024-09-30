import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../../common';
import styles from './styles';


const Account: React.FC = () => {

    const handleOptionPress = (option: string) => {
        console.log(`Navigating to: ${option}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/* Profile Section */}
            <SafeAreaView />
            <View style={styles.profileSection}>
                <Image
                    source={Images.AVATAR}
                    style={styles.profilePhoto}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>john.doe@example.com</Text>
            </View>

            {/* Menu Options */}
            <View style={styles.menu}>
                {['Edit Profile', 'Track Order', 'Wishlist', 'Terms', 'Settings', 'Logout'].map(option => (
                    <TouchableOpacity
                        key={option}
                        style={styles.menuItem}
                        onPress={() => handleOptionPress(option)}
                    >
                        <Text style={styles.menuText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default Account

