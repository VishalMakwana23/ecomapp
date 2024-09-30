import { Dimensions, Platform } from "react-native"

const Constants = {
    APPNAME: 'E Commerce App',
    SCREEN_WIDTH: Dimensions.get('screen').width,
    SCREEN_HEIGHT: Dimensions.get('screen').height,
    ERROR_MESSAGE: 'Something went wrong',
    BOTTOM_BAR_HEIGHT: Platform.OS == 'ios' ? 75 : 48
}

export default Constants