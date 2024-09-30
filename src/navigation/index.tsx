import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import { Colors } from '../common';
import Account from '../screens/account';
import TabBarIcon from '../components/TabBarIcon';
import Startup from '../screens/startup';
import AddProduct from '../screens/addProduct';
import ViewProduct from '../screens/viewProduct';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="ViewProduct" component={ViewProduct} />
        </Stack.Navigator>
    );
};

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return <TabBarIcon focused={focused} name={route.name as any} color={color} size={size} />;
                },
                tabBarActiveTintColor: Colors.BLUE,
                tabBarInactiveTintColor: Colors.BLACK,
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const Navigation: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Startup" component={Startup} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
    );
};

export default Navigation