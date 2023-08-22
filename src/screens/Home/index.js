import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

import {SafeAreaView, Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator, RefreshControl, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DrawerRoutes from '../../routes/drawer.routes';
import { useIsFocused } from '@react-navigation/native';
import CustomDrawer from '../../components/CustomDrawer';

export default function Home() {
    const navigation= useNavigation();

    async function incendio(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Incendio' }]
        });
    }

    async function sensor(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Sensor' }]
        });
    }

    async function gas(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Gas' }]
        });
    }

    async function eletricidade(){      

        navigation.reset({
          index: 0,
          routes: [{ name: 'Eletricidade' }]
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.header}>
                <Text style={styles.primaryTilt}>Olá, Cliente!</Text>
                        
                        <Text style={styles.secondaryTilt}>Bem vindo a sua casa segura:</Text>
                    <View style={styles.containerHeader}>
                        
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            
                        >
                            <AntDesign name="appstore1" size={35} color="black" />
                        </TouchableOpacity>

                    </View>
                </View>   
            <View style={styles.body}>
                <View style={styles.painel}></View>
                <Text style={styles.painelTilt}>Painel para acessar as informações da sua casa</Text>
                <TouchableOpacity  onPress={eletricidade} style={styles.painelEletricidade}><Text style={styles.painelText}>Eletricidade</Text></TouchableOpacity>
                <TouchableOpacity  onPress={gas} style={styles.painelGas}><Text style={styles.painelText}>Gás</Text></TouchableOpacity>
                <TouchableOpacity  onPress={sensor} style={styles.painelSensor}><Text style={styles.painelText}>Sensor</Text></TouchableOpacity>
                <TouchableOpacity  onPress={incendio} style={styles.painelIncendio}><Text style={styles.painelText}>Incêncio</Text></TouchableOpacity>
              {/*ver uma forma de conectar a informação do banco ao mobile*/}
                <TouchableOpacity  onPress={incendio} style={styles.alerta}><Text style={styles.painelAlerta}>Alerta</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    )
}