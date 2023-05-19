import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';
//import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function Home() {
    const navigation= useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/dashboard/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


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
            </View>
        </View>
    )
}