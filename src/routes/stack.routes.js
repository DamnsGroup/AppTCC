import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/FirstPage';
import Entrar from '../screens/Entrar';
import Incendio from '../screens/Incendio';
import Sensor from '../screens/Sensor';
import Gas from '../screens/Gas';
import Eletricidade from '../screens/Eletricidade';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
//import { Splash } from '../lotties/Splash';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';



const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Entrar" component={Entrar} /> 
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Incendio" component={Incendio} /> 
            <Stack.Screen name="Sensor" component={Sensor} />   
            <Stack.Screen name="Gas" component={Gas} />   
            <Stack.Screen name="Eletricidade" component={Eletricidade} />    
            <Stack.Screen name="Usuario" component={Usuario} /> 
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} /> 
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;