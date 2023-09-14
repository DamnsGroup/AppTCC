import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

import fonts from '../styles/fonts';

import DrawerRoutes from './drawer.routes';
import Usuario from '../screens/Usuario';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const navigation = useNavigation();
{/* arrumar essa budega aqui debaixo mas o codigo ta funcionando então isso que importa, e olha essa mensagem matheus do futuro isso é um aviso */}
    return (
        <AppTab.Navigator
        screenOptions={{
                tabBarActiveTintColor: "green",
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: false,
                tabBarLabelPosition: 'below-icon',
                headerShown:false,
                
                tabBarStyle:{
                    height: 0,
                    paddingTop: 1
                },
            }}

            >
                <AppTab.Screen
                    name="Inicio"
                    component={DrawerRoutes}

                />

        </AppTab.Navigator>
    )
}

export default AuthRoutes;