import { Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { NavigationProp } from '@react-navigation/native'

import { Images } from '../../common'
import styles from './styles'
import CustomButton from '../../components/CustomButton'

interface StartupProps {
    navigation: NavigationProp<any>;
}

const Startup: React.FC<StartupProps> = (props) => {

    const onStart = () => {
        props.navigation.navigate("TabNavigation");
    }

    return (
        <View style={styles.container}>
            <LottieView source={Images.SPLASH} autoPlay speed={2} loop style={styles.lottie} />
            <Text style={styles.welcomeMessage}>
                Welcome to our E-Commerce Platform
            </Text>
            <View style={{ padding: 10 }}>
                <CustomButton text={"Get Started"} onPress={() => onStart()} />
            </View>
        </View>
    )
}

export default Startup
