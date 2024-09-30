import React from "react";
import { Colors, Images } from "../../common";
import { Image, View } from "react-native";

interface TabBarIconProps {
    focused: boolean;
    name: "Home" | "Account";
    color: string;
    size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, name, color, size }) => {

    const Icons: Record<string, any> = {
        Home: Images.HOME,
        Account: Images.AVATAR,
    };

    return (
        <View style={{ marginTop: -1, width: '90%' }}>
            <View style={{ borderColor: focused && Colors.BLUE, borderTopWidth: focused ? 4 : 0, marginBottom: 5, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} />
            <Image
                source={Icons[name]}
                style={[{
                    width: size,
                    height: size,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                },
                name != 'Account' &&
                { tintColor: color }
                ]}
            />
        </View>
    )
}

export default TabBarIcon